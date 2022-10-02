import React, { useState } from "react";
import LInk from "../link/LInk";
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
  const [open ,setOpen] =useState(false)
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/Products" },
    { id: 3, name: "Order", path: "/Order" },
    { id: 4, name: "Contact", path: "/Contact" },
    { id: 4, name: "About", path: "/About" },
  ];

  return (
    <nav className="bg-purple-200 w-full">

    <div className="md:hidden">
    {
        open ? <XMarkIcon onClick={()=>setOpen(!open)} className="h-6 w-6"/>

      :<Bars3Icon onClick={()=>setOpen(!open)} className="h-6 w-6"/>
      }
       
    </div>
      <ul className={`md:flex  bg-purple-200 w-full justify-center absolute md:static duration-500 ease-in ${open ? 'top-6':'top-[-120px]'}`}>
        {
            routes.map(route=><LInk 
            key={routes.id}
            route={route}
            ></LInk>)
        }
      </ul>
    </nav>
  );
};

export default NavBar;
