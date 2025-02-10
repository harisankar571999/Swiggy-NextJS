'use client'

import Link from "next/link";
import {  useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchFoodData } from "@/src/redux/slice/foodSlice";
import { useParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";


export default function CollectionComponent(){  

const {id} =useParams()
const dispatch = useDispatch();
const { data, loading, error } = useSelector((state) => state.food);


useEffect(()=>{

    dispatch(fetchFoodData())

},[dispatch,])
   const myData= data.find((item)=>item.category.toLowerCase().replace(/\s+/g,'-')===id)
   console.log(myData)


if (error) {
    return <p>Error loading data: {error.message}</p>;
}
 if(!myData){
    return <div className="p-[60px_0_8px_0] max-w-[1260px] mx-auto">
        <Skeleton height={200}/>
    </div>
   }



 return( 
  <>
  
    <div className="px-[20px]">
       <div className="p-[60px_0_8px_0] max-w-[1260px] mx-auto">
          <h1 className="font-[helvica-med] font-[600] text-[36px] text-[#282c3f] tracking-[1px]">{loading?<Skeleton height={"1.5em"} width={"10em"}/> : `${myData.category}`}</h1>
          <p className="font-[helvica-reg] font-[400] text-[18px] text-[#282c3f] mt-[8px] tracking-[.5px] opacity-[.9]">{loading?<Skeleton height={"1.5em"} width={"10em"}/> : `${myData.description}`}</p>
       </div>
    </div>
      <div className=" max-w-[1260px] mx-auto mt-[24px] px-[20px]"  >
        <ul className="flex gap-[8px] items-center">
            <li className="rounded-[999px] border-[rgba(2,6,12,.15)] border-solid border-[1px] p-[7px_12px] shadow-[0_2px_12px_rgba(2,6,12,0.04)]">
                <Link href={"/"} className="flex items-center gap-[8px]" >
                    <span className=" pb-[3px] font-[gilroy-reg] font-[200] text-[14px] text-[#282c3f]] ">
                        Filter
                    </span>
                    <span  className="font-[helvica-med] text-[16px] text-[#3d4152] leading-[19.2px] self-center mt-[-4px]">
                            <svg aria-hidden="true" height="16" width="16"><path fillRule="evenodd" clipRule="evenodd" d="M13.4 5.999a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm1.6 0a2.8 2.8 0 0 1-5.485.8H1.81a.8.8 0 1 1 0-1.6h7.707a2.801 2.801 0 0 1 5.484.8ZM3.8 13.453a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm0 1.6a2.8 2.8 0 1 1 2.684-3.6h7.711a.8.8 0 1 1 0 1.6h-7.71a2.801 2.801 0 0 1-2.685 2Z" fill="rgb(2,6,12)" fillOpacity=".92"/></svg>
                    </span>
                </Link>
            </li>
            <li className="rounded-[999px] border-[rgba(2,6,12,.15)] border-solid border-[1px] p-[7px_12px] shadow-[0_2px_12px_rgba(2,6,12,0.04)]">
                <Link href={"/"} className="flex items-center gap-[8px]" >
                    <span className=" pb-[3px] font-[gilroy-reg] font-[600] text-[14px] text-[#02060cbf] ">
                        Sort By
                    </span>
                    <span  className="font-[helvica-med] text-[16px] text-[#3d4152] leading-[19.2px] self-center mt-[-4px]">
                        <svg aria-hidden="true" height="12" width="12"style={{fillOpacity: 1}}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.309 4.277a.9.9 0 0 0-.096 1.27l3.362 3.91c.01.01.019.02.028.032.151.176.32.373.486.519.195.17.501.377.927.377.426 0 .732-.206.927-.377.165-.146.335-.343.486-.52l.028-.031 3.33-3.873a.9.9 0 1 0-1.365-1.173l-3.33 3.872-.076.088-.076-.088-3.362-3.91a.9.9 0 0 0-1.27-.096Z" fill="rgb(2,6,12)" fillOpacity=".92"/>
                        </svg> 
                    </span>
                </Link>
            </li>
        </ul>
      </div>
  </>
  )
}
