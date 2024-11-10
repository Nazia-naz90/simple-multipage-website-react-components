import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./background.module.css";


const Hero = () => {
  return (
    <>
<main className="flex max-w-7xl mx-auto items-center justify-center">
<div className="container  ">
<Image
src={"/img/image.png"}
alt="image"
width={1280}
height={1280}
objectFit="cover"
quality={100}
></Image>
          <Link href="https://vercel.com/solutions/nextjs?utm_source=next_site&utm_medium=showcase_redesign&utm_campaign=hero_cta">
            <button
              className="flex lg:width[500px] lg:height[70px] 
      width[70px]
      height[40px] text-white font-bold bg-black 
      rounded-md 
      lg:text-[30px] text-[20px] lg:px-10  px-5 
      lg:mx-auto  mx-auto   border-[5px border-solid] 
      mt-5 mb-0
      "
            >
              Get Started
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};
export default Hero;
