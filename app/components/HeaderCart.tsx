'use client'
import Link from "next/link"
import { useSelector } from "react-redux"


export default function HeaderCart(){
 
    const cart =useSelector((state:any)=>state.cart)
    const total=Object.values(cart).reduce((total:any,item:any)=>total+item.count,0)

  return(  <>
        <li className="flex gap-[50px] items-center ">
            <Link href={"/"} className="flex items-center gap-[10px] group max-[450px]:gap-[5px]">
                <span className="relative flex items-center justify-center">
                    <svg  viewBox="-1 0 37 32" height="20" width="20" fill={`${total ? '#60b246' : 'none'}`} stroke={`${total ? '#60b246' : '#3d4152'}`} strokeWidth="2" className={`${total ? '' : 'group-hover:stroke-[#ff5200]'}`} >
                        <path  d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"/>
                    </svg>
                    <span className={`absolute text-[14px] ${total > 9 ? ' top-[1g0%] right-[20%] text-[12px]' : 'text-[14px] top-[1%] right-[30%]'} font-[600] font-[helvica-med] ${total ? 'text-white' : ' text-[#3d4152] group-hover:text-[#ff5200]'} `}>
                        {total}
                    </span>
                </span>
                <span  className="font-[helvica-med] text-[16px] text-[#3d4152] group-hover:text-[#ff5200] max-[540px]:text-[14px]">
                    Cart
                </span>
            </Link>
        </li>
    </>)

}