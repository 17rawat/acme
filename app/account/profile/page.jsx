"use client";

import { useSession, signOut } from "next-auth/react";

import Link from "next/link";
import EditableField from "@/components/EditUserDetails";
import axios from "axios";
import toast from "react-hot-toast";

const Account = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ redirect: "/" });
  };

  const handleChange = async (field, oldPassword, newValue) => {
    const loadingToastId = toast.loading(`Updating ${field}...`);
    try {
      const response = await axios.patch("/api/update-user", {
        userId: session?.user?.id,
        field,
        value: newValue,
        oldPassword,
      });

      toast.dismiss(loadingToastId);

      toast.success(response.data.message);

      await signOut({ redirect: "/" });
    } catch (error) {
      console.log(error);
      toast.dismiss(loadingToastId);
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600 mb-4 sm:mb-0">
          {session?.user?.name &&
            session.user.name
              .split(" ")
              .map((word) => word[0].toUpperCase())
              .join("")}
        </div>
        <div className="ml-0 sm:ml-4">
          <h1 className="text-xl font-bold text-gray-800">
            Hello, {session?.user?.name}
          </h1>
          <p className="text-gray-600">Signed in as: {session?.user?.email}</p>
        </div>

        <button
          onClick={handleLogout}
          className="ml-auto mt-4 sm:mt-0 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <section className="mt-10 mb-6">
        <Link
          href={"/explore/products"}
          className="bg-black border text-white border-black px-4 py-2 rounded hover:bg-blue-700 "
        >
          Back to collection
        </Link>
      </section>

      <div className="border rounded p-4 mb-4">
        <EditableField
          label="Name"
          field="name"
          value={session?.user?.name || ""}
          onSave={handleChange}
        />

        <hr className="my-4" />

        <EditableField
          label="Email"
          field="email"
          value={session?.user?.email || ""}
          onSave={handleChange}
        />

        <hr className="my-4" />

        <EditableField
          label="Password"
          field="password"
          value="The password is not shown for security reasons"
          onSave={handleChange}
        />
      </div>
    </div>
  );
};

export default Account;
