"use client";
import { getAllItems } from "@/actions";
import React, { useEffect, useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import Image from "next/image";
import Link from "next/link";

function ListBlog() {
  const [items, setItems] = useState([]);
  const [tags, setTags] = useState({});
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    async function fetchItems() {
      const fetchedItems = await getAllItems();
      const sortedItems = fetchedItems.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setItems(sortedItems);

      // Extract and count tags
      const tagCount = {};
      sortedItems.forEach((item) => {
        item.tags.forEach((tag) => {
          if (tagCount[tag]) {
            tagCount[tag] += 1;
          } else {
            tagCount[tag] = 1;
          }
        });
      });
      setTags(tagCount);
    }

    fetchItems();
  }, []);

  const formatTimeAgo = (date) => {
    if (!date) return "Invalid date";
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) return "Invalid date";
    const distance = formatDistanceToNowStrict(parsedDate);
    return `${distance.replace("about ", "").replace(" ago", "")} ago`;
  };

  const filteredItems = selectedTag
    ? items.filter((item) => item.tags.includes(selectedTag))
    : items;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-[white]">
        List of Blog
      </h1>
      <div className="flex flex-wrap">
        {/* Sidebar with tags */}
        <div className="w-full md:w-1/4 p-4">
          <h2 className="text-2xl text-[white] text-[white] font-bold mb-4">
            Tags
          </h2>
          <ul>
            {Object.keys(tags).map((tag) => (
              <li key={tag} className="mb-2">
                <button
                  onClick={() => setSelectedTag(tag)}
                  className={`text-[white] hover:underline ${
                    selectedTag === tag ? "font-bold" : ""
                  }`}
                >
                  {tag} ({tags[tag]})
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => setSelectedTag("")}
                className={`text-[white] hover:underline ${
                  selectedTag === "" ? "font-bold" : ""
                }`}
              >
                All Tags
              </button>
            </li>
          </ul>
        </div>
        {/* Main content */}
        <div className="w-full md:w-3/4">
          {filteredItems.length > 0 && (
            <div>
              {/* Featured Post */}
              <Link href={`/items/${filteredItems[0].slug}`}>
                <div className="mb-12 p-6 bg-[#2f2f38] rounded-lg shadow-xl relative hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={filteredItems[0].imageUrl}
                      alt={filteredItems[0].title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className="absolute bottom-4 left-4 bg-[#2f2f38] bg-opacity-70 text-white p-4 rounded-lg">
                      <p className="text-sm">
                        {formatTimeAgo(filteredItems[0].createdAt)}
                      </p>
                      <h2 className="text-3xl font-bold mt-1">
                        {filteredItems[0].title}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Grid of Other Posts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredItems.slice(1).map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col p-6 bg-[#2f2f38] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                      <div className="absolute bottom-2 left-2 bg-blue-600 text-white p-2 rounded-lg">
                        <p className="text-xs">
                          {formatTimeAgo(item.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col justify-between flex-grow">
                      <h2 className="text-2xl text-[white] font-semibold">
                        {item.title}
                      </h2>
                      <Link href={`/items/${item.slug}`}>
                        <span className="text-blue-600 hover:underline mt-2 cursor-pointer inline-block">
                          Read More
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListBlog;
