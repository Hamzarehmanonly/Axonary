import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

// Interface for the Content block (simplified)
interface ContentBlock {
  type: string;
  children: { type: string; text: string }[];
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

// Helper to render Strapi content blocks (basic version)
const renderContent = (content: ContentBlock[]) => {
  return content.map((block, index) => {
    if (block.type === 'paragraph') {
      return (
        <p key={index} className="mb-4 text-lg leading-relaxed">
          {block.children.map((child, childIndex) => (
            <span key={childIndex}>{child.text}</span>
          ))}
        </p>
      );
    }
    // Add rendering for other block types (headings, lists, images) here if needed
    return null;
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

        <div className="prose prose-invert">
             {/* Render the content blocks */}
             {renderContent(post.Content)}
        </div>

        {/* Optional: Add back link or related posts section here */}
      </motion.article>
    </div>
  );
};

export default BlogPost; 