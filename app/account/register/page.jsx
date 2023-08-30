"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const loadingToastId = toast.loading("Creating account...");

    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });

      toast.dismiss(loadingToastId);

      toast.success(response.data.message);

      router.push("/account/login");
    } catch (error) {
      toast.dismiss(loadingToastId);

      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center m-4">
      <div className="max-w-sm w-full flex flex-col items-center">
        <h1 className="text-large-semi uppercase mb-6">
          Become an Acme Member
        </h1>
        <p className="text-center text-base-regular text-gray-700 mb-8">
          Create your Acme Member profile and get access to an enhanced shopping
          experience.
        </p>
        <form onSubmit={handleSignUp} className="w-full">
          <input
            type="name"
            className="w-full border rounded-lg py-2 px-3 mb-4"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            className="w-full border rounded-lg py-2 px-3 mb-4"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            className="w-full border rounded-lg py-2 px-3 mb-4"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <span className="text-center text-gray-700 text-xs mt-6 pl-4 ">
            By creating an account, you agree to Acme&apos;s{" "}
            <Link href="/content/privacy-policy" className="underline">
              Privacy Policy
            </Link>{" "}
            &{" "}
            <Link
              href="/content/terms-of-use"
              className="underline flex justify-center "
            >
              Terms of Use
            </Link>
            .
          </span>
          <button className="mt-2 w-full bg-black text-white py-2 rounded-lg">
            JOIN
          </button>
        </form>
        <span className="text-center text-gray-700 text-small-regular mt-6">
          Already a member?{" "}
          <Link className="underline" href={"/account/login"}>
            Sign In.
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignupPage;
