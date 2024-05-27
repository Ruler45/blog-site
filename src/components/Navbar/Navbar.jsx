"use client";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { Sevillana } from "next/font/google";

const sevillana = Sevillana({ weight: ["400"], subsets: ["latin"] });

const Navbar = ({ searchData }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [suggested, setSuggested] = useState();

  const search = (e) => {
    const query = e.target.value;
    if (!query) {
      setSearchResults([]);
      return;
    }
    const result = searchData.filter((post) => {
      if (post.title.toLowerCase().includes(query.toLowerCase())) {
        return post;
      } else if (post.tags) {
        const tags = post.tags.filter((tag) =>
          tag.toLowerCase().includes(query.toLowerCase())
        );
        if (tags.length > 0) {
          console.log(tags);
          return post;
        }
      }
    });
    setSearchResults(result);
  };

  useEffect(() => {
    setSuggested(searchData[Math.floor(Math.random() * searchData.length)]);
  }, [searchData, suggested]);

  return (
    <nav className={`${styles.Navbar} `}>
      <Link href="/">
        <h1 className={sevillana.className}>
          <span style={{ color: "green" }}>Sahin</span>
          &apos;s <span style={{ color: "red" }}>Blogs</span>📝
        </h1>
      </Link>
      <div className={styles.searchBar}>
        <input onChange={search} type="text" placeholder="search..." />
        {
          <div className={styles.searchResults}>
            {searchResults.map((post) => (
              <a
                className={styles.searchResult}
                href={`/blogs/${post.slug}`}
                key={post.slug}
              >
                {post.title}
              </a>
            ))}
            <p >Suggested</p>
            {suggested && (
              <a
                className={styles.searchResult}
                href={`/blogs/${suggested.slug}`}
              >
                <h4>{suggested.title}</h4>
              </a>
            )}
          </div>
        }
      </div>
    </nav>
  );
};

export default Navbar;
