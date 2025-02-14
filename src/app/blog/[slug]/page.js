import fetchGraphQL from "@/lib/fetchPosts";
import Link from "next/link";

export default async function Blog() {
  const query = `
    query GetPosts {
      posts {
        nodes {
          title
          slug
          excerpt
          date
          author {
            node {
              name
            }
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  console.log("✅ API Response:", data); // Printo përgjigjen për debugging

  // Kontrollo nëse `data` është undefined
  if (!data || !data.posts || !data.posts.nodes) {
    return <p>❌ Gabim: Nuk mund të lexohen blogjet.</p>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      {data.posts.nodes.length === 0 ? (
        <p>Nuk ka postime.</p>
      ) : (
        data.posts.nodes.map((post) => (
          <div key={post.slug} className="border-b pb-4 mb-4">
            <h2>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            <p><strong>Author:</strong> {post.author.node.name}</p>
            <p><strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
          </div>
        ))
      )}
    </div>
  );
}
