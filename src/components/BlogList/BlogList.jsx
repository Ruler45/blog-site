import getPostMetadata from "@/utils/getPostMetadata";
import Link from "next/link";
import styles from "./BlogList.module.scss";

const BlogList = () => {
  // Get the metadata of each post
  const postMetadata = getPostMetadata();
  return (
    <div className={styles.BlogList}>
      <h2>Recent Blogs</h2>
      <div className={styles.blogsContainer}>
        {postMetadata.map((post) => {
          return (
            <Link
              href={`/blogs/${post.slug}`}
              className={styles.blogs}
              key={post.slug}
            >
              <h3>{post.title}</h3>
              <p>{post.date}</p>
              <p>
                {
                  post.summary.length>100?post.summary.slice(0,100)+"...":post.summary  
                }
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
