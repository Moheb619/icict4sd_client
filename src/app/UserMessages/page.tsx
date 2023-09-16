"use client";
import { Contact } from "@prisma/client";
import axios from "axios";
import { SyntheticEvent, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillDelete } from "react-icons/ai";
import Spinner from "../components/common/Spinner/Spinner";
import { AuthContext } from "../context/AuthContext";
const UserMessages = () => {
  //   get all contact from db using axios
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [contacts, setContacts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}contactUs`, { withCredentials: true });
      setContacts(res.data.contacts);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!user || (user && user.role !== "ADMIN")) {
      router.push("/");
    }
    fetchContacts();
  }, [user, router]);
  const handleStatusChange = async (event: React.ChangeEvent<HTMLSelectElement>, contactId: string, newStatus: string) => {
    try {
      event.target.classList.remove("bg-green-400", "bg-violet-600");
      event.target.classList.toggle(`${newStatus === "Checked" ? "bg-green-400" : "bg-violet-600"}`);
      const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}contactUs/${contactId}`, { markedAsOkay: newStatus === "Checked" ? true : false }, { withCredentials: true });
      fetchContacts();
    } catch (error) {
      console.error("Error updating contact status:", error);
    }
  };

  const handleDelete = async (contactId: number) => {
    const element = document.getElementById(contactId.toString());
    if (element) element.classList.add("hidden");
    await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}contactUs/${contactId}`, { withCredentials: true });
    fetchContacts();
  };
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leadi text-black text-center">Messages</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-700">
              <tr className="text-left">
                <th className="p-3">Sl No.</th>
                <th className="p-3">Full Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Message</th>
                <th className="p-3">Issued</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact: any, index: number) => (
                <tr key={contact.id} id={contact.id} className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{contact.fullname}</td>
                  <td className="p-3">{contact.email}</td>
                  <td className="p-3">{contact.message}</td>
                  <td className="p-3">{formatDate(contact.createdAt)}</td>
                  <td className="p-3">
                    <select
                      defaultValue={contact.markedAsOkay ? "Checked" : "Pending"}
                      className={`text-black px-3 py-1 font-semibold rounded-md ${contact.markedAsOkay ? "bg-green-400" : "bg-violet-600"}`}
                      onChange={(e) => handleStatusChange(e, contact.id, e.target.value)}
                    >
                      <option className="bg-white text-black" value="Checked">
                        Checked
                      </option>
                      <option className="bg-white text-black" value="Pending">
                        Pending
                      </option>
                    </select>
                  </td>
                  <td className="p-3">
                    <button className="px-3 py-1" onClick={(e) => handleDelete(contact.id)}>
                      <AiFillDelete className="text-red-600 text-2xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserMessages;
