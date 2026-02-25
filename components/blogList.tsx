import React, { useEffect, useState } from "react";
import BlogItem from "./Blog-Item";
import axios from "axios";

interface BlogPost {
  _id: string;
  image: string;
  title: string;
  content: string;
  category: string;
}

const BlogList = () => {
  const [meun, setMenu] = useState("All");
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8 pb-8">
      <div className="mb-10 flex flex-wrap justify-center gap-10">
        <button
          onClick={() => setMenu("All")}
          className={
            meun === "All" ? "rounded-sm bg-black px-4 py-1 text-white" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            meun === "Technology"
              ? "rounded-sm bg-black px-4 py-1 text-white"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            meun === "Lifestyle"
              ? "rounded-sm bg-black px-4 py-1 text-white"
              : ""
          }
        >
          Lifestyle
        </button>
        <button
          onClick={() => setMenu("Travel")}
          className={
            meun === "Travel" ? "rounded-sm bg-black px-4 py-1 text-white" : ""
          }
        >
          Travel
        </button>
        <button
          onClick={() => setMenu("Food")}
          className={
            meun === "Food" ? "rounded-sm bg-black px-4 py-1 text-white" : ""
          }
        >
          Food
        </button>
        <button
          onClick={() => setMenu("Sports")}
          className={
            meun === "Sports" ? "rounded-sm bg-black px-4 py-1 text-white" : ""
          }
        >
          Sports
        </button>
      </div>
      <div className="mt-10 grid w-full auto-rows-fr gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs
          .filter((post) => (meun === "All" ? true : post.category === meun))
          .map((post, index) => (
            <BlogItem
              key={index}
              id={post._id}
              image={post.image}
              title={post.title}
              content={post.content}
              category={post.category}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
