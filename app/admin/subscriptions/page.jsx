"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import SubscriptionTable from "../../../components/adminComponents/SubscriptionTable";

const Page = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete(`/api/email?id=${mongoId}`);
    if (response.data.success) {
      toast.success("Email deleted successfully");
      fetchEmails();
    } else {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-3xl font-bold mb-5">Subscriptions</h1>
      <div className="relative max-w-150px h-[80vh] overflow-y-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3 border-b " scope="col">
                Email subscription
              </th>
              <th className="px-6 py-3 border-b hidden sm:block">
                Subscribed At
              </th>
              <th className="px-6 py-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email, index) => (
              <SubscriptionTable
                key={index}
                mongoId={email._id}
                email={email.email}
                date={email.date}
                deleteEmail={deleteEmail}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
