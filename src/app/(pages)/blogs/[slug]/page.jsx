import getPostMetadata from "@/utils/getPostMetadata";
import BlogPost from "@/components/BlogPost/BlogPost";
import fs from "fs";
import matter from "gray-matter";

// This function is used to generate the metadata title for the page
export async function generateMetadata({ params, searchParams }) {
  const { slug } = params;
  const getPostContent = (slug) => {
    const folderName = "src/content/posts";
    const filePath = `${folderName}/${slug}.md`;
    const fileContent = fs.readFileSync(filePath, "utf8");
    return fileContent;
  };
  const post = getPostContent(slug);
  const { data } = matter(post);
  return {
    title: data.title,
  };
}

const BlogPage = (props) => {
  const { slug } = props.params;
  return (
    <div>
      <BlogPost slug={slug} />
    </div>
  );
};

// This function is used to generate the static pages at build time
//  generateStaticParams replaces the need for getStaticPrpos/getStaticPaths as the latter are not supported in the current version of the framework
export const generateStaticParams = async () => {
  const posts = await getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    tags: post.tags,
  }));
};

export default BlogPage;
