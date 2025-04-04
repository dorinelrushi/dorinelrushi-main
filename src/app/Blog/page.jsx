'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const BlogPosts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://devpromote.online/api/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <br></br>
      <div className="min-h-screen w-[95%] lg:w-[80%] mt-[100px] m-auto text-white p-6">
        {error && <p className="text-red-500 text-center">Error: {error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div 
              key={item.slug} 
              className="bg-[#161616] border-[1px] border-[#252525] shadow-lg rounded-lg overflow-hidden p-4 cursor-pointer hover:shadow-xl transition" 
              onClick={() => router.push(`https://devpromote.online/items/${item.slug}`)}
            >
              {item.imageUrl && (
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
              <h2 className="mt-4 text-xl font-semibold text-blue-400">{item.title}</h2>
              <p className="text-sm text-gray-400">Tags: {item.tags ? item.tags.join(", ") : "No tags"}</p>
              <button 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent div click from triggering
                  router.push(`/blog/${item.slug}`);
                }}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
