import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { setCanonicalUrl, setJsonLd, setMetaTag, SITE_URL } from '../utils/seo';

// Re-use or define interfaces (ensure consistency with Blog.tsx if possible)
interface ImageFormat {
  url: string;
}
interface PostImage {
  id: number;
  url: string;
  alternativeText: string | null;
  caption?: string;
  credit?: {
    name: string;
    profileUrl: string;
    sourceUrl: string;
  };
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
}

// Interface for the Content block used by the static blog JSON
interface ContentChild {
  type: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  level?: number; // for headings
  children?: ContentChild[]; // for nested content
  url?: string; // for inline links
}

interface ContentBlock {
  type: string;
  children: ContentChild[];
  level?: number; // for headings
  format?: string; // for lists
  style?: string; // for lists
  url?: string; // for links
  alternativeText?: string; // for images
  caption?: string; // for images
}

interface Post {
  id: number;
  Title: string;
  Meta_Title?: string;
  Meta_Description?: string;
  Category?: string;
  Keywords?: string[];
  Secondary_Keywords?: string[];
  Slug: string;
  Publish_Date: string;
  Image: PostImage | null;
  Content: ContentBlock[]; // Full content
  Teaser?: string; // Optional, might not be needed here
}

interface ApiResponse {
  data: Post[]; // API returns an array even for a single filtered item
  meta?: unknown;
}

const BLOG_DATA_URL = '/data/blog-posts.json';

const normalizeImageUrl = (imageUrl: string): string => {
  if (/^(https?:|data:|\/)/.test(imageUrl)) {
    return imageUrl;
  }

  return `/${imageUrl.replace(/^\/+/, '')}`;
};

const getImageUrl = (image: PostImage | null, format: keyof PostImage['formats'] | 'original' = 'large'): string | null => {
  if (!image) return null;
  let imageUrl = image.url;

  if (format !== 'original' && image.formats?.[format]?.url) {
    imageUrl = image.formats[format]!.url;
  }

  return imageUrl ? normalizeImageUrl(imageUrl) : null;
};

const getPostKeywords = (post: Post): string[] => [
  ...(post.Keywords || []),
  ...(post.Secondary_Keywords || []),
].filter(Boolean);

const getContentText = (content: ContentBlock[]): string => {
  return content
    .flatMap((block) => block.children || [])
    .flatMap((child) => child.children || [child])
    .map((child) => child.text || '')
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const CONTENT_LINK_CLASS = "text-[#a986ff] hover:text-[#c6b3ff] underline underline-offset-4 transition-colors duration-300 cursor-pointer";

// Helper to render text with formatting and inline links
const renderText = (child: ContentChild, key: number): React.ReactNode => {
  if (!child.text && !child.children) return null;

  // Handle inline link (if type is 'link' and url exists)
  if (child.type === 'link' && child.url) {
    const isInternal = child.url.startsWith('/') || child.url.startsWith(window.location.origin);
    const linkContent = child.children
      ? child.children.map((c, i) => renderText(c, i))
      : child.text;
    if (isInternal) {
      const internalUrl = child.url.startsWith(window.location.origin)
        ? child.url.replace(window.location.origin, '')
        : child.url;
      return (
        <Link key={key} to={internalUrl} className={CONTENT_LINK_CLASS}>
          {linkContent}
        </Link>
      );
    } else {
      return (
        <a key={key} href={child.url} className={CONTENT_LINK_CLASS} target="_blank" rel="noopener noreferrer">
          {linkContent}
        </a>
      );
    }
  }

  let element: React.ReactNode = child.text;

  // Apply formatting in the correct order
  if (child.code) {
    element = <code key={`code-${key}`} className="bg-gray-800 px-2 py-1 rounded text-sm font-mono">{element}</code>;
  }
  if (child.bold) {
    element = <strong key={`bold-${key}`}>{element}</strong>;
  }
  if (child.italic) {
    element = <em key={`italic-${key}`}>{element}</em>;
  }
  if (child.underline) {
    element = <u key={`underline-${key}`}>{element}</u>;
  }
  if (child.strikethrough) {
    element = <del key={`strike-${key}`}>{element}</del>;
  }

  return element;
};

// Helper to render rich content blocks from the static blog JSON
const renderContent = (content: ContentBlock[]) => {
  return content.map((block, index) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="mb-6 text-lg leading-normal text-gray-300">
            {block.children.map((child, childIndex) => 
              renderText(child, childIndex)
            )}
          </p>
        );
      
      case 'heading': {
        const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
        const headingClasses = {
          1: "text-4xl md:text-5xl font-bold mb-8 mt-12 text-white",
          2: "text-3xl md:text-4xl font-bold mb-6 mt-10 text-white",
          3: "text-2xl md:text-3xl font-bold mb-4 mt-8 text-white",
          4: "text-xl md:text-2xl font-bold mb-4 mt-6 text-white",
          5: "text-lg md:text-xl font-bold mb-3 mt-4 text-white",
          6: "text-base md:text-lg font-bold mb-3 mt-4 text-white"
        };
        return (
          <HeadingTag key={index} className={headingClasses[block.level as keyof typeof headingClasses] || headingClasses[2]}>
            {block.children.map((child, childIndex) => 
              renderText(child, childIndex)
            )}
          </HeadingTag>
        );
      }
      
      case 'list': {
        const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
        const listClass = block.format === 'ordered' 
          ? "list-decimal list-inside mb-6 space-y-3 text-gray-300 ml-4" 
          : "list-disc list-inside mb-6 space-y-3 text-gray-300 ml-4";
        return (
          <ListTag key={index} className={listClass}>
            {block.children.map((child, childIndex) => (
              <li key={childIndex} className="text-lg leading-normal">
                {child.children?.map((grandChild, grandChildIndex) => 
                  renderText(grandChild, grandChildIndex)
                ) || child.text}
              </li>
            ))}
          </ListTag>
        );
      }
      
      case 'list-item':
        return (
          <li key={index} className="text-lg leading-normal text-gray-300 mb-2">
            {block.children.map((child, childIndex) => 
              renderText(child, childIndex)
            )}
          </li>
        );
      
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-[#5C3693] pl-6 py-4 my-8 bg-gray-900/50 rounded-r-lg">
            <p className="text-lg italic text-gray-300 leading-normal">
              {block.children.map((child, childIndex) => 
                renderText(child, childIndex)
              )}
            </p>
          </blockquote>
        );
      
      case 'code':
        return (
          <pre key={index} className="bg-gray-900 rounded-lg p-6 my-8 overflow-x-auto">
            <code className="text-gray-300 text-sm">
              {block.children.map((child) => child.text).join('')}
            </code>
          </pre>
        );
      
      case 'link': {
        const isInternal = block.url && (block.url.startsWith('/') || block.url.startsWith(window.location.origin));
        if (isInternal && block.url) {
          // Remove domain if present for consistency
          const internalUrl = block.url.startsWith(window.location.origin)
            ? block.url.replace(window.location.origin, '')
            : block.url;
          return (
            <Link
              key={index}
              to={internalUrl}
              className={CONTENT_LINK_CLASS}
            >
              {block.children.map((child, childIndex) =>
                renderText(child, childIndex)
              )}
            </Link>
          );
        } else {
          return (
            <a
              key={index}
              href={block.url || '#'}
              className={CONTENT_LINK_CLASS}
              target="_blank"
              rel="noopener noreferrer"
            >
              {block.children.map((child, childIndex) =>
                renderText(child, childIndex)
              )}
            </a>
          );
        }
      }
      
      case 'image':
        return (
          <div key={index} className="my-8">
            <img 
              src={block.url ? normalizeImageUrl(block.url) : ''}
              alt={block.alternativeText || ''} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {block.caption && (
              <p className="text-sm text-gray-500 mt-2 text-center italic">
                {block.caption}
              </p>
            )}
          </div>
        );
      
      case 'hr':
      case 'horizontal-rule':
        return (
          <hr key={index} className="my-12 border-gray-700" />
        );
      
      default:
        // Fallback for unknown block types
        return (
          <div key={index} className="mb-4 text-lg leading-normal text-gray-300">
            {block.children?.map((child, childIndex) => 
              renderText(child, childIndex)
            )}
          </div>
        );
    }
  });
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>(); // Get slug from URL
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(BLOG_DATA_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse = await response.json();

        if (result && Array.isArray(result.data)) {
          const matchingPost = result.data.find((item) => item.Slug === slug);

          if (matchingPost) {
            setPost(matchingPost);
          } else {
            throw new Error('Post not found.');
          }
        } else {
          throw new Error('Invalid data format received from blog data.');
        }
      } catch (err) {
        console.error("Failed to fetch post:", err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (!post) return;

    const title = post.Meta_Title || `${post.Title} | Axonary`;
    const description = post.Meta_Description || post.Teaser || '';
    const canonicalUrl = `${SITE_URL}/blog/${post.Slug}`;
    const imageUrl = getImageUrl(post.Image, 'large') || undefined;
    const keywords = getPostKeywords(post);

    document.title = title;
    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'article');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'article:published_time', post.Publish_Date);

    if (post.Category) {
      setMetaTag('property', 'article:section', post.Category);
    }

    if (keywords.length > 0) {
      const keywordList = keywords.join(', ');
      setMetaTag('name', 'keywords', keywordList);
      setMetaTag('property', 'article:tag', keywordList);
    }

    setMetaTag('name', 'twitter:card', imageUrl ? 'summary_large_image' : 'summary');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    if (imageUrl) {
      setMetaTag('property', 'og:image', imageUrl);
      setMetaTag('property', 'og:image:alt', post.Image?.alternativeText || post.Title);
      setMetaTag('name', 'twitter:image', imageUrl);
      setMetaTag('name', 'twitter:image:alt', post.Image?.alternativeText || post.Title);
    }

    setCanonicalUrl(canonicalUrl);
    setJsonLd('blog-post', {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.Title,
      description,
      image: imageUrl ? [imageUrl] : undefined,
      datePublished: post.Publish_Date,
      dateModified: post.Publish_Date,
      articleSection: post.Category,
      keywords,
      articleBody: getContentText(post.Content),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      author: {
        '@type': 'Organization',
        name: 'Axonary',
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Axonary',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/AXONARY-WHITE-TRANSPARENT.png`,
        },
      },
    });
  }, [post]);

  if (loading) {
    // Return a full-page loading indicator
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          {/* Optional: Add a spinner component here later */}
          <p className="text-xl text-gray-400">Loading Post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    // Keep error display similar, but ensure it fills space if needed
    return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
            <div className="text-center p-10 bg-red-900/20 rounded-lg">
                 <p className="text-xl text-red-500">Error loading post:</p>
                 <p className="text-md text-red-400 mt-2">{error}</p>
            </div>
        </div>
    );
  }

  if (!post) {
    // Keep post not found similar
     return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
             <div className="text-center p-10">
                 <p className="text-xl text-gray-500">Post not found.</p>
             </div>
         </div>
    );
  }

  const imageUrl = getImageUrl(post.Image, 'large'); // Get large format URL

  return (
    <div className="bg-black text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden p-6 md:p-10"
      >
        <header className="mb-8 border-b border-gray-700 pb-6">
          {post.Category && (
            <p className="text-sm uppercase tracking-wider text-[#a986ff] font-semibold mb-4">
              {post.Category}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{post.Title}</h1>
          <time dateTime={post.Publish_Date} className="text-gray-400 text-sm">
            Published on {new Date(post.Publish_Date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={post.Image?.alternativeText || post.Title}
            className="w-full h-auto max-h-[500px] object-contain rounded-md mb-8"
          />
        )}

        <div className="prose prose-invert max-w-none">
          {/* Render the content blocks */}
          <div className="space-y-6">
            {renderContent(post.Content)}
          </div>
        </div>

        {/* Back to blog link */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-[#5C3693] hover:text-[#7e5adb] transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </motion.article>
    </div>
  );
};

export default BlogPost;
