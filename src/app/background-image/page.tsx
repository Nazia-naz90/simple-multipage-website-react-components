"use client"

import React from 'react'
import styles from './background.module.css'
import Image from "next/image"
import Link from 'next/link'

const Page = () => {

  return (
    
    <div className={styles.container}>
        <Image
        src={"/img/image.png"}
        alt="background image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.backgroundImage} >
        </Image>
      <h1 className='lg:flex items-center justify-center text-[10vmin] text-blue-800 drop-shadow-lg font-bold mx-auto mt-1 lg:px-72 px-5'>The web framework for when it matters</h1>
      
      <p className='lg:flex items-center justify-center
       text-orange-600 lg:text-[40px] text-[20px] lg:px-72 px-5
        sm:items-center'>
      Peerless performance, efficiency and developer experience. Next.js is trusted by some of the biggest names of the web.
      </p>
      <Link href="https://vercel.com/solutions/nextjs?utm_source=next_site&utm_medium=showcase_redesign&utm_campaign=hero_cta">
      <button className="flex lg:width[500px] lg:height[70px] 
      width[70px]
      height[40px] text-blue-800 font-bold bg-white 
      rounded-md 
      lg:text-[30px] text-[20px] lg:px-10  px-5 
      lg:mx-auto  mx-auto   border-[5px border-solid] 
      mt-5 mb-0
      ">
        Get Started
      </button>
      </Link>
       

    </div>
  )
}

export default Page
