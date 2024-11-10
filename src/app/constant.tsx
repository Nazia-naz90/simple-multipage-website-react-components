import Link from 'next/link'
import { title } from 'process'
import React from 'react'

interface Inavitem{
    title:string,
    link:string,

}
export const navItem:Inavitem[]=[
    {
        
        title:"Home",
        link: "/"
    },
    {
        title:"Showcase",
        link:"/showcase"
    },
    {
        title:"Docs",
        link:"/docs"
    },
    {
        title:"Blogs",
        link:"/blogs"
    }
    
]
  
export default navItem