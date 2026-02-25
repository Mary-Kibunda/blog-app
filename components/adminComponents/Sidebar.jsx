import { Mail, PlusCircle, SquarePen, Target } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 inline-flex items-center justify-center border border-black">
        <Target className="h-8 w-8 text-green-400 font-bold mr-2" />{" "}
        <span>Blogie</span>
      </div>

      <div className="w-60 sm:80 h-screen relative py-12 border border-black ">
        <div className="w-[50%] sm:w-[80%] absolute right-0 gap-y-4">
          <Link href="/admin/addProduct" className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_0px_#000000]">
            <PlusCircle /> <span>Add Blog</span>
          </Link>
          <Link href="/admin/blogList" className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_0px_#000000]">
            <SquarePen /> <span>Blog List</span>
          </Link>
          <Link href="/admin/subscriptions" className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_0px_#000000]">
            <Mail /> <span>Subscriptions</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
