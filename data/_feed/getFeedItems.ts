import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { FeedItem } from "../../types";
import { months } from "../months";

const feedItemsDirectory = path.join(process.cwd(), "data", "_feed");

export async function getFeedItems() {
  const filenames = fs.readdirSync(feedItemsDirectory);

  const items = filenames
    .filter((name) => name.includes(".md"))
    .map((filename) => {
      const id = filename.replace(/\.mdx?$/, "");

      const fullPath = path.join(feedItemsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      console.log(matterResult.data);

      return { id, ...matterResult.data } as unknown as FeedItem;
    });

  items.sort((a, b) => {
    const dateA = a.date
      .split(" ")
      .map(([m, y]) => [months[m], parseInt(y)])
      .join("-");
    const dateB = b.date
      .split(" ")
      .map(([m, y]) => [months[m], parseInt(y)])
      .join("-");

    console.log(dateA, dateB);

    return new Date(dateA) > new Date(dateB)
      ? -1
      : new Date(dateA) < new Date(dateB)
      ? 1
      : 0;
  });

  return items;
}
