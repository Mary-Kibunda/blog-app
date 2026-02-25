import Sidebar from "../../components/adminComponents/Sidebar";
import Link from "next/link";
import ProfileIcon from "../../components/adminComponents/ProfileIcon";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full ">
          <div className="flex items-center justify-between w-full py-3 max-h-15px px-12 border-b border-black">
            <h2 className="font-medium">Admin Panel</h2>
            <Link href="/components/adminComponents/ProfileSettings"><ProfileIcon /></Link>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
