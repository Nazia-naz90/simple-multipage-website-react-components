"use client";

import navItem from "../constant";
import Link from "next/link";
import Image from "next/image";
import useToggle from "../hooks/hooks";

export default function Navbar() {
  const { toggle, handleMenuClick } = useToggle();
  return (
    <header className="h-[85px] bg-white drop-shadow-[0_0px_3px_rgba(117,195,16,0.5)] max-w-7xl mx-auto">
      <div className="flex items-center gap-10 h-full px-4 sm:px-6 md:px-8 lg:mx-auto xl:px-4 max-w-7x1">
        <div className="lg:flex sm:flex-row gap-2 ">
          <Image
            src={"/img/triangle-icon.png"}
            alt="logo-icon"
            width={40}
            height={30}
          ></Image>
          <Image
            src={"/img/logo-name.webp"}
            alt="Logo name"
            width={100}
            height={100}
          ></Image>
        </div>

        <nav className="h-[44.54px]">
          <ul
            className="hidden lg:flex h-full w-full items-center 
          justify-between gap-[46px] text-gray-400 
          text-[20px] font-medium"
          >
{navItem.map((item,id) => (
<Link href={item.link}
key={id}
className="transition transform hover:-translate-y-1 
motion-reduce:transition-none 
motion-reduce:hover:transform-none"
>
<li key={id}>{item.title}</li>
</Link>
))}
</ul>
</nav>
<button
className="bg-gray-200 shadow-lg 
text-black text-[3vmin] w-[15vw] 
h-[7vh] rounded-md hidden lg:flex flex-row justify-center items-center transition transform hover:-translate-y-1 motion-reduce:transition-none 
motion-reduce:hover:transform-none mx-auto"
>
<Image
src={"/img/triangle-icon.png"}
alt="icon"
width={30}
height={20}
></Image>
<Link
href={
"https://vercel.com/new/clone?utm_source=next-site&utm_medium=banner&b=main&s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fnextjs&showOptionalTeamCreation=false&template=nextjs&teamCreateStatus=hidden&utm_campaign=showcase"
}
>
Deploy
</Link>
</button>
<button
className="bg-black shadow-md 
hidden lg:flex justify-center items-center
text-white w-[100px] h-[40px] 
rounded-md transition transform hover:-translate-y-1 motion-reduce:transition-none 
motion-reduce:hover:transform-none"
>
<Link href={"https://nextjs.org/learn"}>Learn
</Link>
</button>
{/* HAMBURGER BUTTON FOR MOBILE */}
<div className="lg:hidden">
<div
className="flex flex-col justify-between gap-y-1
ml-[25vmin]  mx-4 cursor-pointer "
onClick={handleMenuClick}
>
<div className="bg-black w-[25px] h-[4px]">
</div>
<div className="bg-black w-[25px] h-[4px]">
</div>
<div className="bg-black w-[25px]  h-[4px]">
</div>
</div>
  {/* media query on navbar */}
{toggle && (
<div className="absolute right-0 w-48 h-[80vh] bg-slate-400 mt-6 ">
<div className="flex flex-col justify-center items-center">
<nav className="h-[44.54px]">
<ul
className=" flex flex-col 
h-full w-full items-center 
justify-between space-y-4 text-white 
text-[20px] font-medium"
>
{navItem.map((item, id) => (
<Link href={item.link}
key={id}
className="transition transform hover:-translate-y-1 
motion-reduce:transition-none 
motion-reduce:hover:transform-none"
>
<li key={id}>{item.title}</li>
</Link>
))}
</ul>
</nav>
<div className="flex flex-col mt-60 space-y-4">
<button
className="bg-gray-200 shadow-lg 
text-black text-[3vmin] w-[15vw] 
h-[10vh] rounded-md
flex flex-col justify-center items-center
transition transform hover:-translate-y-1 
motion-reduce:transition-none 
motion-reduce:hover:transform-none mx-auto"
>
<Image
src={"/img/triangle-icon.png"}
alt="icon"
width={30}
height={20}
></Image>
<Link
href={
"https://vercel.com/new/clone?utm_source=next-site&utm_medium=banner&b=main&s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fnextjs&showOptionalTeamCreation=false&template=nextjs&teamCreateStatus=hidden&utm_campaign=showcase"
                      }
>
Deploy
</Link>
</button>
<button
className="bg-black shadow-md 
flex justify-center items-center
text-white w-[100px] h-[40px] 
rounded-md transition transform hover:-translate-y-1 
motion-reduce:transition-none motion-reduce:hover:transform-none"
>
<Link href={"https://nextjs.org/learn"}>Learn</Link>
</button>
</div>
</div>
</div>
)}
{/* toggle-end */}
        </div>
      </div>
    </header>
  );
}
