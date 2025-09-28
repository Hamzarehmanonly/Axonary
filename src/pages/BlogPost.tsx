import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Re-use or define interfaces (ensure consistency with Blog.tsx if possible)
interface ImageFormat {
  url: string;
}
interface PostImage {
  id: number;
  url: string;
  alternativeText: string | null;
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
}

// Interface for the Content block (enhanced for Strapi rich text)
interface ContentChild {
  type: string;
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  level?: number; // for headings
  children?: ContentChild[]; // for nested content
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
  Slug: string;
  Publish_Date: string;
  Image: PostImage | null;
  Content: ContentBlock[]; // Full content
  Teaser?: string; // Optional, might not be needed here
}

interface ApiResponse {
  data: Post[]; // API returns an array even for a single filtered item
  meta?: { /* pagination etc. */ };
}

// Helper to render text with formatting
const renderText = (child: ContentChild, key: number): React.ReactNode => {
  if (!child.text) return null;
  
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

// Helper to render Strapi content blocks (comprehensive version)
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
      
      case 'heading':
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
      
      case 'list':
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
              {block.children.map((child, childIndex) => child.text).join('')}
            </code>
          </pre>
        );
      
      case 'link':
        return (
          <a 
            key={index} 
            href={block.url || '#'} 
            className="text-[#5C3693] hover:text-[#7e5adb] underline transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {block.children.map((child, childIndex) => 
              renderText(child, childIndex)
            )}
          </a>
        );
      
      case 'image':
        return (
          <div key={index} className="my-8">
            <img 
              src={block.url} 
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

  const STRAPI_BASE_URL = (import.meta.env.VITE_STRAPI_API_URL || 'https://cms-axonary-production.up.railway.app').replace('/api','');
  const STRAPI_API_ENDPOINT = `${STRAPI_BASE_URL}/api`;

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch post by slug, populate Image and Content
        const response = await fetch(
          `${STRAPI_API_ENDPOINT}/posts?filters[Slug][$eq]=${slug}&populate=*`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse = await response.json();

        if (result && Array.isArray(result.data) && result.data.length > 0) {
          setPost(result.data[0]); // Get the first (and should be only) post
        } else {
          throw new Error('Post not found.');
        }
      } catch (err) {
        console.error("Failed to fetch post:", err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, STRAPI_API_ENDPOINT]);

  // Re-use getImageUrl logic (could be moved to a shared utility)
  const getImageUrl = (image: PostImage | null, format: keyof PostImage['formats'] | 'original' = 'large'): string | null => {
      if (!image) return null;
      let imageUrl = image.url; // Default to original
      if (format !== 'original' && image.formats?.[format]?.url) {
          imageUrl = image.formats[format]!.url;
      }
      return imageUrl ? `${STRAPI_BASE_URL}${imageUrl}` : null;
  };

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