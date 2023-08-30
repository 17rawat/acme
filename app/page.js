import React from "react";
import hero from "@/assets/hero.webp";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white ml-20 absolute inset-0 z-10 flex flex-col justify-center items-start text-start small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-xl mb-4 drop-shadow-md shadow-black">
          Introducing the Latest Summer Styles
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          This season, our new summer collection embraces designs to provide
          comfort and style - ensuring you&apos;re well-prepared for whatever
          comes your way.
        </p>
        <Link
          href="/explore/products"
          className=" justify-center items-start text-start  bg-blue-500 py-2 px-4 rounded-lg text-white hover:bg-blue-600"
        >
          Explore products
        </Link>
      </div>
      <Image
        src={hero}
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Hero;
