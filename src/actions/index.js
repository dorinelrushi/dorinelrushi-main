"use server";

import Item from "@/models/Item";
import connectToDB from "@/database";
import sanitizeHtml from "sanitize-html";
import slugify from "slugify";

export async function SaveItems(data, userId) {
  await connectToDB();

  const { title, description, image, tags } = data;

  // Sanitize the description to remove HTML tags
  const sanitizedDescription = sanitizeHtml(description, {
    allowedTags: [],
    allowedAttributes: {},
  });

  try {
    const newItem = new Item({
      title,
      description: sanitizedDescription,
      userId,
      imageUrl: image,
      tags,
      slug: slugify(title, { lower: true, strict: true }), // Generate slug
    });
    await newItem.save();
    const plainItem = newItem.toObject({ getters: true, versionKey: false });
    plainItem._id = plainItem._id.toString();
    return { success: true, data: plainItem };
  } catch (error) {
    console.error("Error saving item:", error);
    return { success: false, error: error.message };
  }
}

export async function getItems(userId) {
  await connectToDB();

  try {
    const items = await Item.find({ userId });
    const plainItems = items.map((item) => {
      const plainItem = item.toObject({ getters: true, versionKey: false });
      plainItem._id = plainItem._id.toString();
      return plainItem;
    });

    return { success: true, data: plainItems };
  } catch (error) {
    console.error("Error retrieving items:", error);
    return { success: false, error: error.message };
  }
}

export async function getItemBySlug(slug) {
  await connectToDB();

  try {
    const item = await Item.findOne({ slug });
    if (!item) {
      return null;
    }
    return item.toObject({ getters: true, versionKey: false });
  } catch (error) {
    console.error("Error fetching item by slug:", error);
    return null;
  }
}

//get all items from db

export async function getAllItems() {
  await connectToDB();
  const items = await Item.find({});
  // Convert Mongoose documents to plain JavaScript objects
  const plainItems = items.map((item) => {
    const plainItem = item.toObject({ getters: true, versionKey: false });
    plainItem._id = plainItem._id.toString();
    return plainItem;
  });

  return plainItems;
}
