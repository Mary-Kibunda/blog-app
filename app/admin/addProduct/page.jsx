"use client";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    content: "",
    category: "",
    author: "Flare",
    authorImage: "/1771250412577_Screenshot (43).png",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImage", data.authorImage);
    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.message);
      setImage(false);
      setData({
        title: "",
        content: "",
        category: "",
        author: "Flare",
        authorImage: "/1771250412577_Screenshot (43).png",
      });
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className=" pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">
          Upload thumbnail <span className="text-red-500">*</span>
        </p>
        <label htmlFor="image">
          <Image
            src={image ? URL.createObjectURL(image) : "/assets/upload.jpg"}
            alt=""
            width={140}
            height={140}
            className="mt-4"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">
          Blog Title <span className="text-red-500">*</span>
        </p>
        <input
          onChange={onChangeHandler}
          name="title"
          value={data.title}
          type="text"
          placeholder="Type your blog title here..."
          className="w-full sm:w-125 mt-4 px-4 py-3 border border-black"
          required
        />
        <p className="text-xl mt-4">
          Blog Content <span className="text-red-500">*</span>
        </p>
        <textarea
          onChange={onChangeHandler}
          name="content"
          value={data.content}
          type="text"
          placeholder="Type your blog content here..."
          rows={6}
          className="w-full sm:w-125 mt-4 px-4 py-3 border border-black"
          required
        />
        <p className="text-xl mt-4">
          Blog Category <span className="text-red-500">*</span>
        </p>
        <select
          onChange={onChangeHandler}
          value={data.category}
          name="category"
          id="category"
          className="w-40 sm:w-125 mt-4 px-4 py-3 border border-black"
        >
          <option disabled value="" className="text-gray-200">
            Select Category
          </option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Sports">Sports</option>
          <option value="Fashion">Fashion</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          Publish
        </button>
      </form>
    </>
  );
};

export default Page;
