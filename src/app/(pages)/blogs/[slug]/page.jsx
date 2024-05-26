import getPostMetadata from "@/utils/getPostMetadata";
import BlogPost from "@/components/BlogPost/BlogPost";

const BlogPage = (props) => {
  const { slug } = props.params;
  console.log(slug);
  return (
    <div>
      <BlogPost slug={slug} />
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
