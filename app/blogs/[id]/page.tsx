"use client";
import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import Image from "next/image";
import { ArrowBigRight, Target } from "lucide-react";
import Footer from "@/components/Footer";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import axios from "axios";

interface Blog {
  id: number;
  title: string;
  category: string;
  date: number;
  author: string;
  image: string;
  content: string;
  authorImage: string;
}

const Page = ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = React.use(params);
  const [data, setData] = useState<Blog | null>(null);

  {
    /* Function for fetching the full info about an article*/
  }
  const fetchBlogData = async () => {
    const response = await axios.get(`/api/blog/`, {
      params: {
        id: id,
      },
    });
    setData(response.data.blog);
  };

  useEffect(() => {
    fetchBlogData();
  }, [id]);

  const blocks = useMemo(() => {
    if (!data?.content) return [];
    const lines = data.content.split(/\r?\n/);
    const result: Array<
      | { type: "p"; text: string }
      | { type: "ul"; items: string[] }
      | { type: "h2"; text: string }
    > = [];
    let paragraph: string[] = [];
    let list: string[] = [];

    const pushParagraph = () => {
      if (paragraph.length) {
        result.push({ type: "p", text: paragraph.join(" ") });
        paragraph = [];
      }
    };

    const pushList = () => {
      if (list.length) {
        result.push({ type: "ul", items: list });
        list = [];
      }
    };

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) {
        pushParagraph();
        pushList();
        continue;
      }

      if (trimmed.startsWith("- ")) {
        pushParagraph();
        list.push(trimmed.slice(2).trim());
        continue;
      }

      if (trimmed.endsWith(":")) {
        pushParagraph();
        pushList();
        result.push({ type: "h2", text: trimmed.slice(0, -1) });
        continue;
      }

      pushList();
      paragraph.push(trimmed);
    }

    pushParagraph();
    pushList();
    return result;
  }, [data?.content]);

  return data ? (
    <>
      <div className="bg-gray-50 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={180}
              height={180}
              className="mr-2"     
            />
          </Link>
          <button className="shadow-[-7px_7px_0px_0px_#000000] border border-solid border-black p-4 text-[#0b0] hover:text-[#0e4b34] hover:bg-[#909893] hover:rounded-xl flex flex-row font-medium sm:py-3 sm:px-3 items-center space-x-3 text-lg md:text-lg">
            Get Started{" "}
            <span>
              <ArrowBigRight />
            </span>
          </button>
        </div>
        <div className=" my-8 text-center">
          <h1 className=" text-4xl md:text-3xl font-medium sm:5xl">
            {data.title}
          </h1>
          <Image
            src={data.authorImage}
            alt=""
            width={50}
            height={50}
            className="rounded-full mt-5 items-center mx-auto"
          />
          <p>{data.author}</p>
        </div>
        <div className="mx-5 max-w-200px md:mx-auto -mt-5 mb-10">
          <Image
            src={data.image}
            alt=""
            width={600}
            height={600}
            className="rounded-2xl border-4 border-white mx-auto items-center"
          />
          <article className="mx-auto mt-10 max-w-3xl text-gray-800">
            {blocks.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={`h2-${index}`}
                    className="mt-8 text-xl font-semibold text-gray-900"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul
                    key={`ul-${index}`}
                    className="mt-4 list-disc space-y-2 pl-6 text-[17px] leading-7"
                  >
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={`p-${index}`} className="mt-4 text-[17px] leading-7">
                  {block.text}
                </p>
              );
            })}
          </article>
          <p className="text-lg justify-center items-center text-center mt-10 font-bold mb-6">
            Share this on social media
          </p>
          <div className="flex items-center justify-center gap-3 text-center">
            <FaFacebook className="text-black h-8 w-8" />
            <FaGooglePlus className="text-black  h-8 w-8" />
            <FaInstagram className="text-black  h-8 w-8" />
            <FaTwitter className="text-black  h-8 w-8" />
            <div />
          </div>
        </div>
        <Footer />
      </div>
    </>
  ) : (
    <></>
  );
};

export default Page;
