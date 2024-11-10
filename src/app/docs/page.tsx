import React from 'react'
import Navbar from '../components/navbar'

const Docs = () => {
  return (
    <div>
<Navbar/>
<div className="max-w-7xl lg:mx-auto flex flex-col 
      justify-center">
<div className='flex flex-col justify-center items-center' >
                  {/* INTRODUCTION */}
  <h1 className='text-[7vmin] font-mono font-bold'>Introduction</h1>
  <p>Welcome to the Next.js documentation!</p>
  <h1 className='text-[5vmin] font-serif font-bold'>What is Next.js</h1>
  <p className='lg:pl-64 lg:pr-64 p-10 lg:leading-7'>
    Next.js is a React framework for building full-stack web applications.
     You use React Components to build user interfaces, and Next.js for 
     additional features and optimizations.Under the hood, Next.js also 
     abstracts and automatically configures tooling needed for React, like 
     bundling, compiling, and more. This allows you to focus on building 
     your application instead of spending time with configuration.
     Whether you&apos;re an individual developer or part of a larger team, 
     Next.js can help you build interactive, dynamic, and fast React 
     applications.
</p>
<h1 className='text-[5vmin] font-serif font-bold'>Main Features</h1>
<p>Some of the main Next.js features include</p>
                 {/* DEFINITION-HEADING */}
<div className='flex lg:gap-x-96 gap-x-10'>
  <h6 className='text-[20px] font-semibold'>Feature	</h6>
  <h6 className='text-[20px] font-semibold'>Description</h6>
</div>
                {/* DEFINITION */}
<div className='flex flex-col gap-y-10 mt-10'>
<div className='lg:flex lg:gap-x-72 lg:pl-72  lg:pr-72 
'>
<h6 className='text-[20px] font-semibold'>Routing</h6>
<p>	
  A file-system based router built on top of 
  Server Components that supports layouts nested routing loading states 
  error handling and more.
</p>
</div>

<div className='flex gap-x-72 pl-72 pr-72'>
  <h6 className='text-[20px] font-semibold'>Rendering</h6>
  <p>	Client-side and Server-side Rendering with Client and Server 
    Components. Further optimized with Static and Dynamic Rendering 
    on the server with Next.js. Streaming on Edge and Node.js runtimes.
	</p>
</div>

<div className='flex gap-x-72 pl-72 pr-72'>
  <h6 className='text-[20px] font-semibold'>Data Fetching</h6>
  <p>	Simplified data fetching with async/await in Server 
    Components, and an extended fetch API for request memoization, data 
    caching and revalidation.
	</p>
</div>

<div className='flex gap-x-72 pl-72 pr-72'>
  <h6 className='text-[20px] font-semibold'>Styling</h6>
  <p>Support for your preferred styling 
    methods, including CSS Modules, Tailwind CSS, and CSS-in-JS
	</p>
</div>

<div className='flex gap-x-72 pl-72 pr-72'>
  <h6 className='text-[20px] font-semibold'>Optimizations</h6>
  <p>	Image, Fonts, and Script Optimizations 
    to improve your application&apos;s Core Web Vitals and User Experience.
	</p>
</div>

<div className='flex gap-x-72 pl-72 pr-72'>
  <h6 className='text-[20px] font-semibold'>TypeScript</h6>
  <p>	
  Improved support for TypeScript, with better type checking and more 
  efficient compilation, as well as custom TypeScript Plugin and type 
  checker.

	</p>
</div>
<div className='flex flex-col lg:justify-center items-center'>
  <h1 className='text-[5vmin] font-serif font-bold'>
    How to Use These Docs</h1>
  <p className='lg:pl-64 lg:pr-64 p-10  lg:leading-7 text-center'>
On the left side of the screen, you&apos;ll find the docs navbar. 
The pages of the docs are organized sequentially, from basic to advanced
so you can follow them step-by-step when building your application. However 
you can read them in any order or skip to the pages that apply to your use 
case.On the right side of the screen, you&apos;ll see a table of contents that 
makes it easier to navigate between sections of a page. If you need to 
quickly find a page, you can use the search bar at the top or the search 
shortcut .To get started checkout the Installation guide</p>
</div>

<div className='flex flex-col justify-center items-center'>
  <h1 className='text-[5vmin] font-serif font-bold'>
  App Router vs Pages Router
    </h1>
  <p className='pl-64 pr-64 leading-7 text-center'> 
Next.js has two different routers: the App Router and the Pages Router. 
The App Router is a newer router that allows 
you to use React&apos;s latest features, such as Server Components and Streaming.
The Pages Router is the original Next.js router, which allowed you to build
server-rendered React applications and continues to be supported for older 
Next.js applications.At the top of the sidebar, you&apos;ll notice a dropdown 
menu that allows you to switch between the App Router and the Pages Router 
features. Since there are features that are unique to each directory, it&apos;s 
important to keep track of which tab is selected.
The breadcrumbs at the top of the page will also indicate whether you&apos;re 
viewing App Router docs or Pages Router docs.
</p>
</div>

<div className='flex flex-col justify-center items-center'>
  <h1 className='text-[5vmin] font-serif font-bold'>
  Pre-Requisite Knowledge
  </h1>
  <p className='pl-64 pr-64 leading-7 text-center'> 
Although our docs are designed to be beginner-friendly, we need to 
establish a baseline so that the docs can stay focused on Next.js 
functionality. We&apos;ll make sure to provide links to relevant documentation 
whenever we introduce a new concept.To get the most out of our docs. 
it&apos;s recommended that you have a basic understanding of HTML CSS and React.
If you need to brush up on your React skills, check out our React 
Foundations Course, which will introduce you to the fundamentals. 
Then learn more about Next.js by building a dashboard application.
</p>
</div>

<div className='flex flex-col justify-center items-center'>
  <h1 className='text-[5vmin] font-serif font-bold'>
  Accessibility
  </h1>
  <p className='pl-64 pr-64 leading-7 text-center'> 
  
For optimal accessibility when using a screen reader while reading the
 docs. we recommend using Firefox and NVDA or Safari and VoiceOver.


</p>
</div>

                </div>


</div>
</div>

  
    </div>
  )
}

export default Docs
