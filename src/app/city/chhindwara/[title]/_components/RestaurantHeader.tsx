'use client'
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { fetchHotel } from "../../../../../redux/slice/restuarantSlice";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import DealSlider from "./DealSlider";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


  export default function RestaurantHeader(){
    const {title} =useParams()
    const dispatch=useDispatch()
    const {data,loading,error}=useSelector((state)=>state.hotel)
    useEffect(()=>{
        dispatch(fetchHotel())
    },[dispatch])
   console.log(data,loading,error)
   const selectedRestaurant=data?.find((hotel)=>hotel?.title?.toLowerCase().replace(/\s+/g, '-')===title)

   if(!selectedRestaurant){
    return <>
                <div className="max-w-[800px] m-[20px_auto_0px] px-[20px]">
                    <Skeleton height={500}/>
                </div> 
            </>
   }

    return(
        <>
           <div>
              <div className="max-w-[800px] m-[20px_auto_0px] px-[20px]">
                <div className="flex justify-start gap-[5px] h-[50px]">
                    <span className="text-[10px] text-[#93959f]"><Link href={'/'} >Home</Link></span>
                    <span className="text-[10px] text-[#93959f]">/</span>
                    <span className="text-[10px] text-[#93959f]"><Link href={'/'}>Chhindwara</Link></span>
                    <span className="text-[10px] text-[#93959f]">/</span>
                    <span className="text-[10px] text-[#535665] font-[600]"><Link href={`/restaurant/${selectedRestaurant?.title?.toLowerCase().replace(/\s+/g, '-')}`}>{selectedRestaurant.title}</Link></span>
                </div>
                <div className="ml-[16px] mb-[8px]">
                    <h1 className="font-[gilroy-xbold] text-[24px] text-[rgba(2,6,12,0.92)] mb-[.67em] max-[700px]:text-[22px] max-[500px]:text-[20px]">{selectedRestaurant.title}</h1>
                </div>
                <div className="p-[0_16px_16px] rounded-b-[36px] bg-gradient ">
                    <div className="rounded-[20px] border-[1px] border-[rgba(2,6,12,0.15)] flex flex-col bg-white shadow-[0px_8px_16px_0px_rgba(0,0,0,0.04)] p-[16px] gap-[8px]">
                        <div className="flex items-center font-[gilroy-bold] text-[16px]">
                            <div className="flex gap-[3px] items-center ">
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" stroke-color="rgba(2, 6, 12, 0.92)" fill-color="rgba(2, 6, 12, 0.92)">
                                        <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)">
                                            </circle>
                                            <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 
                                            14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 
                                            8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 
                                            5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 
                                            7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 
                                            10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" 
                                            fill="white"></path><defs>
                                            <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" 
                                            y2="19" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540">
                                            </stop>
                                            </linearGradient></defs>
                                    </svg>
                                </div>
                                <span>
                                    <h1>{selectedRestaurant?.rating.toFixed(1)}</h1>
                                </span>
                                <span>
                                    <h1>(1.2K+ ratings)</h1>
                                </span>
                            </div>
                            <span className="mx-[8px] text-[rgba(2,6,12,0.45)]">•</span>
                            <span>
                                <h1>₹250 for two</h1>
                            </span>
                        </div>
                        <div>
                            <h1 className="font-[gilroy-bold] text-[14px] leading-[17px] underline text-[rgb(255,82,0)]">{selectedRestaurant.food}</h1>
                        </div>
                        <div className="flex items-center gap-[12px] ">
                            <span className="flex flex-col items-center ">
                                <div className="w-[7px] h-[7px] rounded-[50%] bg-[rgb(196,196,196)]"></div>
                                <div className="w-[1px] h-[23px]  bg-[rgb(196,196,196)]"></div>
                                <div className="w-[7px] h-[7px] rounded-[50%] bg-[rgb(196,196,196)]"></div>
                            </span>
                            <span  className="flex flex-col gap-[7px] ">
                                <div className="flex items-center gap-[12px]">
                                    <h1 className="font-[gilroy-bold] text-[14px]">Outlet</h1>
                                    <span className="font-[gilroy-med] text-[14px] font-[600] text-[rgba(2,6,12,0.6)]">{selectedRestaurant.locality}</span>
                                </div>
                                <div>
                                    <h1 className="font-[gilroy-bold] text-[14px]">{selectedRestaurant.timing} mins</h1>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
              </div>
           </div>
           <DealSlider/>
           <div className="max-w-[800px] m-[20px_auto_0px] px-[20px]">
            <div className="mt-[32px] mb-[16px]">
                <span className="flex justify-center items-center"> 
                    <span className="">
                        <svg aria-hidden="true" height="24" width="24">
                            <g opacity=".8" fill="rgba(2,6,12,0.92)" stroke="rgba(2,6,12,0.92)" strokeWidth=".2">
                                <path d="M10.558 4c-.073 0-.119.002-.13.003-1.821 0-3.33.92-4.788 1.811-1.456.889-2.961 1.808-4.796 
                                1.808a.252.252 0 0 0-.251.252c0 .14.112.253.251.253h6.29a.252.252 0 0 0 .25-.253.252.252 0 0 0-.25-.252H3.33c.91-.363 
                                1.747-.874 2.57-1.376 1.464-.894 2.847-1.738 4.541-1.738.03-.002 1.683-.074 2.742.937.598.571.902 1.389.902 2.43.002.033.097 
                                1.753-.882 2.8-.508.544-1.226.82-2.134.82-.021 0-1.156.034-1.864-.655-.388-.377-.583-.912-.58-1.59 0-.012 0-.753.554-1.31.432-.435 
                                1.088-.655 1.95-.655h.052a.252.252 0 0 0 .002-.505c-1.03-.01-1.827.262-2.366.809a2.492 2.492 0 0 0-.694 1.665c-.004.816.243 
                                1.475.736 1.952.865.839 2.167.795 2.22.793h.002c1.043 0 1.884-.33 2.49-.98 1.129-1.21 1.02-3.082 1.016-3.161 0-1.17-.357-2.112-1.061-2.783C12.48 
                                4.08 11.004 4 10.558 4ZM23.163 7.748h-7.327a.248.248 0 0 0-.243.252c0 .14.109.252.243.252h7.328A.248.248 0 0 0 23.407 8a.248.248 0 0 0-.244-.252Z"/>
                            </g>
                        </svg>
                    </span>
                    <h2 className="font-[gilroy-reg] ml-[4px] text-[13px] font-[600] text-[rgba(2,6,12,0.6)] tracking-[4px] pb-[9px]">
                        MENU
                    </h2>
                    <span  >
                        <svg aria-hidden="true" height="24" width="24">
                            <g opacity=".8" fill="rgba(2,6,12,0.92)" stroke="rgba(2,6,12,0.92)" strokeWidth=".2">
                                <path d="M8.163 7.748H.836A.248.248 0 0 0 .593 8c0 .14.109.252.243.252h7.328A.248.248 0 0 0 8.407 
                                8c0-.14-.11-.252-.244-.252ZM13.442 4c.073 0 .119.002.13.003 1.821 0 3.33.92 4.788 1.811 1.456.889 
                                2.961 1.808 4.796 1.808a.252.252 0 0 1 0 .505h-6.29a.252.252 0 0 1 0-.505h3.803c-.91-.363-1.747-.874-2.57-1.376-1.464-.894-2.847-1.738-4.541-1.738-.03-.002-1.683-.074-2.742.937-.598.571-.902 
                                1.389-.902 2.43-.001.033-.097 1.753.882 2.8.508.544 1.226.82 2.134.82.021 0 1.155.034 1.864-.655.388-.377.583-.912.58-1.59 0-.012 
                                0-.753-.554-1.31-.432-.435-1.088-.655-1.95-.655h-.052a.252.252 0 0 1-.002-.505c1.03-.01 1.827.262 2.366.809.703.713.694 1.626.694 
                                1.665.004.816-.243 1.475-.736 1.952-.865.839-2.167.795-2.22.793h-.002c-1.043 0-1.884-.33-2.49-.98-1.129-1.21-1.02-3.082-1.016-3.161 
                                0-1.17.357-2.112 1.061-2.783C11.52 4.08 12.996 4 13.442 4Z"/>
                            </g>
                        </svg>
                    </span>
                </span>
            </div>
            <div className="px-[16px]">
                <Link href={`${selectedRestaurant?.title?.toLowerCase().replace(/\s+/g, '-')}/search`}>
                    <button className="w-[100%] h-[48px] rounded-[12px] bg-[rgba(2,6,12,0.05)] flex items-center justify-center relative">
                        <div className="font-[gilroy-reg] font-[600] text-[16px] text-[rgba(2,6,12,0.6)]">
                            Search For Dishes
                        </div>
                        <div className="absolute right-[10px]">
                            <svg aria-hidden="true" height="20" width="20" >
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.1 8.842a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 
                                0Zm-.957 5.338a6.85 6.85 0 1 1 .993-.98l5.183 4.76a.963.963 0 1 1-1.354 1.368l-4.822-5.148Z" fill="rgba(2, 6, 12,0.6)"/>
                            </svg>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
        </>
    )
}