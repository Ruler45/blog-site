import fs from "fs";
import Markdown from "markdown-to-jsx"; // markdown-to-jsx is a package that converts markdown to JSX
import matter from "gray-matter"; // gray-matter is a package that helps to parse frontmatter from markdown files
import styles from "./BlogPost.module.scss";
const BlogPost = (slug) => {
  
  // Get the content of the markdown file
  const getPostContent = ({slug}) => {
    const folderName = "src/content/posts";
    const filePath = `${folderName}/${slug}.md`;
    const fileContent = fs.readFileSync(filePath, "utf8");
    return fileContent;
  };
  const post = getPostContent(slug);
  const { data, content } = matter(post); // Parse the frontmatter and content of the markdown file
  return (
    <div className={styles.BlogPost} >
      <h1>{data.title}</h1>
      <p className={styles.date} >{data.date}</p>
      <Markdown className={styles.content}>{content}</Markdown>
    </div>
  );
};

export default BlogPost;