"use client";

import { useState } from "react";

const useToggle = () =>{
   const [toggle,setToggle] = useState(false);

   const handleMenuClick = () => {
    setToggle(!toggle);
   }

  return {toggle, handleMenuClick};
};

export default useToggle;
