import getPostMetadata from "@/utils/getPostMetadata";
import fs from "fs";
import Markdown from "markdown-to-jsx"; // markdown-to-jsx is a package that converts markdown to JSX
import matter from "gray-matter"; // gray-matter is a package that helps to parse frontmatter from markdown files

const BlogPage = (props) => {
  const { slug } = props.params;
  // Get the content of the markdown file
  const getPostContent = (slug) => {
    const folderName = "src/content/posts";
    const filePath = `${folderName}/${slug}.md`;
    const fileContent = fs.readFileSync(filePath, "utf8");
    return fileContent;
  };
  const post = getPostContent(slug);
  const { data, content } = matter(post); // Parse the frontmatter and content of the markdown file
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <Markdown>{content}</Markdown>
    </div>
  );
};

// This function is used to generate the static pages at build time
export const getStaticPaths = async () => {
  const post = getPostMetadata();
  const paths = post.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;
