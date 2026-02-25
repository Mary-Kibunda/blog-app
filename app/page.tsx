"use client"
import Footer from "@/components/Footer";
import Header  from "@/components/Header";
import BlogList from "@/components/blogList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
   <>
    <ToastContainer theme="colored"/>
   <Header/>
   <BlogList />
   <Footer />
   </>
  );
}
