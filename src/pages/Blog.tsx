import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for routing

// Define interface for image formats
interface ImageFormat {
  url: string;
  // Add other format properties if needed (width, height, etc.)
}

// Define interface for the Image object
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

// Update Post interface to include the Image field
interface Post {
  id: number;
  Title: string;
  Teaser: string;
  Slug: string;
  Publish_Date: string;
  Image: PostImage | null; // Image can be null if not populated/set
}

// Define the structure of the API response
interface ApiResponse {
  data: Post[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Base URL for constructing image paths (without /api)
  const STRAPI_BASE_URL = (import.meta.env.VITE_STRAPI_API_URL || 'https://cms-axonary-production.up.railway.app').replace('/api','');
  const STRAPI_API_ENDPOINT = `${STRAPI_BASE_URL}/api`; // Keep API endpoint separate

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Update fetch URL to populate the Image field
        const response = await fetch(`${STRAPI_API_ENDPOINT}/posts?populate=Image`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse = await response.json();

        if (result && Array.isArray(result.data)) {
          const sortedPosts = result.data.sort((a, b) =>
            new Date(b.Publish_Date).getTime() - new Date(a.Publish_Date).getTime()
          );
          setPosts(sortedPosts);
        } else {
          console.error("Fetched data is not in the expected format:", result);
          throw new Error("Invalid data format received from API.");
        }

      } catch (err) {
        console.error("Failed to fetch posts:", err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [STRAPI_API_ENDPOINT]); // Dependency array updated

  // Helper function to get the image URL
  const getImageUrl = (image: PostImage | null): string | null => {
    if (!image) return null;
    const imageUrl = image.formats?.medium?.url || image.formats?.small?.url || image.url;
    return imageUrl ? `${STRAPI_BASE_URL}${imageUrl}` : null;
  };

  return (
    <div className="bg-black text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16" // Increased margin bottom
        >
          From the Blog
        </motion.h1>

        {loading && (
           <div className="text-center text-gray-400">Loading posts...</div>
        )}

        {error && (
          <div className="text-center text-red-500">Error fetching posts: {error}</div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"> {/* Further Increased gap */}
            {posts.length > 0 ? posts.map((post, index) => {
              const imageUrl = getImageUrl(post.Image);
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:shadow-purple-500/40 hover:border-[#7e5adb] transition-all duration-300 ease-in-out flex flex-col"
                >
                  {/* Image section - full width and proper aspect ratio */}
                  {imageUrl ? (
                    <div className="w-full h-64 overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={post.Image?.alternativeText || post.Title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-full h-64 flex items-center justify-center text-gray-400 text-sm ${index % 2 === 0 ? 'bg-[#5C3693]' : 'bg-[#472A71]'}`}
                      style={{ backgroundColor: index % 2 === 0 ? '#5C3693' : '#472A71' }}
                    >
                      [No Image]
                    </div>
                  )}
                  
                                     {/* Content section with better spacing and typography */}
                   <div className="p-5 flex flex-col flex-grow">
                     <h2 className="text-lg font-bold mb-3 text-white leading-tight">
                       {post.Title}
                     </h2>
                     
                     {/* Description with improved readability */}
                     <p className="text-gray-400 text-sm leading-6 mb-4 flex-grow">
                       {post.Teaser}
                     </p>
                     
                     {/* Footer with cleaner design */}
                     <div className="flex justify-between items-center pt-3 border-t border-gray-700 mt-auto">
                       <span className="text-xs text-gray-500 font-medium">
                         {new Date(post.Publish_Date).toLocaleDateString('en-US', { 
                           year: 'numeric', 
                           month: 'short', 
                           day: 'numeric' 
                         })}
                       </span>
                       <Link
                         to={`/blog/${post.Slug}`}
                         className="text-[#5C3693] hover:text-[#7e5adb] text-sm font-semibold transition-colors duration-200"
                       >
                         Read More →
                       </Link>
                     </div>
                   </div>
                </motion.div>
              );
            }) : (
              <p className="text-center text-gray-500 col-span-full">No posts found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;