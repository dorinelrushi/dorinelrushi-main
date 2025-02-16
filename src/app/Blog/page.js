"use client";
import { fetchGraphQL } from "../lib/apollo-client"; 
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const testGraphQL = async () => {
            try {
                const query = `
                    query {
                        posts {
                            nodes {
                                title
                                slug
                                excerpt
                                featuredImage {
                                    node {
                                        sourceUrl
                                    }
                                }
                            }
                        }
                    }
                `;

                const data = await fetchGraphQL(query);
                
                if (data && data.posts) {
                    setPosts(data.posts.nodes);
                } else {
                    console.error("❌ No posts found in response:", data);
                }
            } catch (error) {
                console.error("❌ Fetch Error:", error);
            } finally {
                setLoading(false);
            }
        };

        testGraphQL();
    }, []);

    if (loading) return <p>🔄 Duke u ngarkuar...</p>;
    if (!posts.length) return <p>❌ Gabim në marrjen e blogjeve!</p>;

    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.map((post) => (
                <div key={post.slug} className="border-b pb-4 mb-4">
                    <h2>
                        <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                            {post.title}
                        </Link>
                    </h2>
                    {post.featuredImage?.node?.sourceUrl ? (
                        <img src={post.featuredImage.node.sourceUrl} alt={post.title} width="600" />
                    ) : (
                        <img src="/default-image.jpg" alt="Default Image" width="600" />
                    )}
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </div>
            ))}
        </div>
    );
}
