import fs from "fs"; // fs is a Node.js module that provides file system-related functionality
import path from "path"; // path is a Node.js module that provides utilities for working with file and directory paths
import matter from "gray-matter"; // g


const getPostMetadata = () => {
    // The path to the folderPath containing the markdown files
  const folderPath = "src/content/posts";
  const files = fs.readdirSync(path.join(process.cwd(), folderPath));
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  // Read the content of each markdown file
  const posts = markdownFiles.map((filename) => {
    const filePath = `${folderPath}/${filename}`;
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);
    // console.log(data);
    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      summary: data.summary,
      date: data.date,
      tags: data.tags,
    };
  });
  // Return the metadata of each post
  return posts;
};

export default getPostMetadata;
