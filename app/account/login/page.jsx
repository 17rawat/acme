"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { toast } from "react-hot-toast";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const loadingToastId = toast.loading("Logging in...");

    const callback = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    toast.dismiss(loadingToastId);

    if (callback?.error) {
      toast.error(callback.error);
    }

    if (callback?.ok && !callback?.error) {
      toast.success("Logged in successfully!");
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center m-4">
      <div className="max-w-sm w-full flex flex-col items-center">
        <h1 className="text-large-semi uppercase mb-6">Welcome back</h1>
        <p className="text-center text-base-regular text-gray-700 mb-8">
          Sign in to access an enhanced shopping experience.
        </p>
        <form onSubmit={handleLogin} className="w-full">
          <input
            type="email"
            className="w-full border rounded-lg py-2 px-3 mb-4"
            placeholder="Email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full border rounded-lg py-2 px-3 mb-4"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="mt-2 w-full bg-black text-white py-2 rounded-lg">
            Enter
          </button>
        </form>

        <span className="text-center text-gray-700 text-small-regular mt-6">
          Not a member?{" "}
          <Link className="underline" href={"/account/register"}>
            Join us.
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
