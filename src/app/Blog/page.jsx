import { getItems } from "@/actions";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

async function page() {
  const user = await currentUser();

  let items = [];
  if (user) {
    const response = await getItems(user.id);
    if (response.success) {
      items = response.data;
    } else {
      console.error("Error fetching items:", response.error);
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Beauty Blog</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items
          .reverse()
          .slice()
          .map((item) => (
            <div key={item._id} className="border rounded-lg p-4 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              {item.imageUrl && (
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={900}
                  height={1000}
                  className="h-auto rounded-md"
                />
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-2">
                <a
                  href={`/items/${item.slug}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default page;
