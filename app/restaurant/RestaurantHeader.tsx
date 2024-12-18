'use client'
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { fetchHotel } from "../redux/slice/restuarantSlice";
import { useEffect } from "react";
import { useParams } from "next/navigation";
  export default function RestaurantHeader(){
    const {title} =useParams()
    const dispatch=useDispatch()
    const {data,loading,error}=useSelector((state:any)=>state.hotel)
    useEffect(()=>{
        dispatch(fetchHotel())
    },[dispatch])
   console.log(data)
   const selectedRestaurant=data?.find((hotel:any)=>hotel?.title?.toLowerCase().replace(/\s+/g, '-')=== title)
   if(!selectedRestaurant){
    return <h1>Hold On!!! Your Food Is On the Way...</h1>
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
                    <span className="text-[10px] text-[#535665] font-[600]"><Link href={`/restaurant/${selectedRestaurant.title.toLowerCase().replace(/\s+/g, '-')}`}>{selectedRestaurant.title}</Link></span>
                </div>
                <div className="ml-[16px] mb-[8px]">
                    <h1 className="font-[gilroy-xbold] text-[24px] text-[rgba(2,6,12,0.92)] mb-[.67em]">{selectedRestaurant.title}</h1>
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
                                    <h1>{selectedRestaurant.rating}</h1>
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
        </>
    )
}