'use client'
import { useEffect, useState } from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";



export default function NavbarSwitch(){
    const [nav,setNav]=useState(false)
    useEffect(()=>{
        const handleScroll=()=>{
        if (window.scrollY >=900 && !nav){
            setNav(!nav)
        }
        else{
            setNav(nav)
        }

    }
    window.addEventListener("scroll",handleScroll)
     
    return()=>{
        window.removeEventListener("scroll",handleScroll)
    }
    },[])
       
    return(
        <>  
            {nav ? <SubHeader/>  : <Header/>}
           
            
        </>
    )
}