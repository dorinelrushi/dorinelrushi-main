'use client'
import { fetchGraphQL } from "@/app/lib/apollo-client";  


export async function getServerSideProps({ params }) {
    const query = `
        query GetPostBySlug($slug: String!) {
            postBy(slug: $slug) {
                title
                content
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }
    `;
    const variables = { slug: params.slug };
    const data = await fetchGraphQL(query, variables);

    if (!data || !data.postBy) {
        return { notFound: true };
    }

    return {
        props: { post: data.postBy },
    };
}

export default function BlogPost({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            {post.featuredImage?.node?.sourceUrl ? (
                <img src={post.featuredImage.node.sourceUrl} alt={post.title} width="800" />
            ) : (
                <img src="/default-image.jpg" alt="Default Image" width="800" />
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}
