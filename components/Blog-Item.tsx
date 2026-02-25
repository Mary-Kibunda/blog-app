"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogItem = (props: {
  title: string;
  content: string;
  category: string;
  image: string;
  id: string;
}) => {
  const { title, content, category, image, id } = props;
  return (
    <div className="flex max-w-82.5 flex-col border border-black bg-white sm:max-w-75 hover:shadow-[-7px_7px_0px_0px_#000]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt=""
          width={500}
          height={300}
          loading="eager"
          className="h-36 w-full border-b border-black object-cover"
        />
      </Link>
      <p className="ml-4 mt-3 inline-block bg-black px-1 text-xs text-white">
        {category}
      </p>
      <div className="flex-1 p-4">
        <h5 className="mb-1.5 text-base font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="max-h-16 overflow-hidden text-sm leading-snug tracking-tight text-gray-700">
          {content}
        </p>
      </div>
      <Link
        href={`/blogs/${id}`}
        className="inline-flex items-center px-4 pb-4 text-sm font-semibold"
      >
        Read More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default BlogItem;
