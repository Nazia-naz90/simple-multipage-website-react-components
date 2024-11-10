import Link from "next/link";
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer
      className="lg:flex flex-col justify-evenly max-w-7xl mx-auto mt-0 bg-slate-100 space-x-10 "
    >
      {/* footer-pannel-1 */}
      <div
        className="flex justify-center items-center content-center 
     height-[50px] mt-10 bg-slate-400"
      >
        <Link href={"/"} className="text-white">
          back to top
        </Link>
      </div>
      {/* footer-logo */}
      <div className="lg:flex  mt-10 gap-x-10 mx-auto">
        <div className="flex ">
          <div className="w-[4vw] h-[4vw]">
            <Image
              src={"/img/triangle-icon.png"}
              alt="logo"
              width={40}
              height={40}
            ></Image>
          </div>
          <div>
            <h1 className=" text-[4vmin] font-bold text-balance">Vercel</h1>
          </div>
        </div>
        {/* footer-pannel-2 */}
        {/* Resources */}
        <div
          className="flex flex-col height-[300px] text-white">
          <ul className="flex flex-col text-gray-400 gap-3">
            <h6 className="text-gray-600">Resources</h6>
            <a>Docs</a>
            <a>Learn</a>
            <a>Showcase</a>
            <a>Blog</a>
            <a>Analytics</a>
            <a>Next.js Conf</a>
            <a>Previews</a>
          </ul>
        </div>
        {/*====== More-Section ========*/}
        <div
          className="flex flex-col height-[300px]
    text-white"
        >
          <ul className="flex flex-col text-gray-400 gap-3">
            <h6 className="text-gray-600">More</h6>
            <a>Next.js Commerce</a>
            <a>Contact Sales</a>
            <a>GitHub</a>
            <a>Releases</a>
            <a>Telemetry</a>
            <a>Governance</a>
          </ul>
        </div>
        {/* =====About Vercel====== */}
        <div
          className="flex flex-col height-[300px]
    text-white"
        >
          <ul className="flex flex-col text-gray-400 gap-3">
            <h6 className="text-gray-600">About Vercel</h6>
            <a>Next.js + Vercel</a>
            <a>Open Source Software</a>
            <a>GitHub</a>
            <a>X</a>
          </ul>
        </div>
        {/* =====Legal-section====== */}
        <div
          className="flex flex-col height-[300px]
    text-white"
        >
          <ul className="flex flex-col text-gray-400 gap-3">
            <h6 className="text-gray-600">Legal</h6>
            <a>Privacy Policy</a>
          </ul>
        </div>
        {/* =====Subscribe to our newsletter======*/}
        <div
          className="flex flex-col height-[300px]
    text-white"
        >
          <ul className="flex flex-col text-gray-400 gap-3">
            <h6 className="text-gray-600">Subscribe to our newsletter</h6>
            <p>Stay updated on new releases and </p>
            <p>features, guides, and case studies.</p>
            <div
              className=" lg:flex 
            text-gray-600 
            rounded-md "
            >
              <input
                type="email"
                placeholder="you@domain.com"
                className="
             w-full py-2 lg:pl-4 text-sm  border-none 
             rounded-md
             "
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm  border border-transparent
             bg-gray-300 rounded-md hover:bg-gray-400 focus:ring-gray-500"
              >
                Subscribe
              </button>
            </div>
          </ul>
        </div>
        {/* © 2024 Vercel, Inc. */}
        
      </div>
      <section className="flex justify-center items-center height-[50px]
        mt-10 mb-10">
          <div>
            <h6 className="text-gray-400">© 2024 Vercel, Inc.</h6>
          </div>
          <div>
            <Link href={"https://github.com/vercel/next.js"}>
            <Image
              src={"/img/github_icon.png"}
              alt="github-icon"
              width={30}
              height={30}
            className="rounded-full"
            ></Image>
            </Link>
          </div>
        </section>
    </footer>
  );
};

export default Footer;
