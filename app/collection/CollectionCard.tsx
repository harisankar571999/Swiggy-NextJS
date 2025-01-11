'use client'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchHotel } from "../redux/slice/restuarantSlice";
import { fetchFoodData } from "../redux/slice/foodSlice";
import { useParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";

export default function RestaurantCard(){
     const dispatch = useDispatch();
     const {data,loading,error} = useSelector((state:any) => state.hotel);
     const {data:foodData,loading:foodLoading,error:foodError} = useSelector((state:any)=>state.food)
     const {id}=useParams()
     useEffect(()=>{
        if (!data.length){
            dispatch(fetchHotel());
        }
        if(!foodData.length){
            dispatch(fetchFoodData());
        }
        console.log(foodLoading)
        console.log(foodError)
     },[dispatch,data,foodData])
      
     const selectedCategory=foodData?.find((item:string)=>item?.category.toLowerCase().replace(/\s+/g,'-')===id)
     if(!selectedCategory){
        return <>
                   <Skeleton count={10}/>
                 </>
     }
     const restaurantList=selectedCategory.restaurantId
     console.log(restaurantList)
     const restaurantData=data.filter((hotel:number)=>restaurantList.includes(hotel.id))

     if(loading)  return <>
                   <Skeleton count={10}/>
                 </>
     if(error) return <h1>Opps! Error:{error}</h1>

    return(
       
        <> { loading ? <Skeleton/> :(
            <div className="relative max-w-[1260px] mx-auto">
                <ul className="grid grid-cols-4 p-[32px_20px] gap-[32px] max-[1300px]:flex max-[1300px]:flex-wrap max-[1300px]:justify-evenly"> 
                    { restaurantData.map((item:any ) => {
                            return (
                    
                            <li  className="w-[100%] list-hover max-[1300px]:w-[278px]"  key={item.id}>
                                <Link href={`/restaurant/${item.title.toLowerCase().replace(/\s+/g,'-')}`} className={`flex flex-col gap-[12px]  whitespace-nowrap overflow-clip text-ellipsis ${item.id>=50 ? 'cursor-not-allowed': 'cursor-pointer'}`}>
                                    <div className="w-[100%] relative rounded-[16px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.1)]">
                                            <img src={item.img} alt={item.alt} className="w-[100%] h-[182px] object-cover overflow-hidden  "/>
                                        <div className="gradient absolute bottom-0 left-0 right-0 flex items-end text-left px-[12px] pb-[4px] "> 
                                            <div className="font-[proximacond] text-[24px] text-[rgba(255,255,255,0.92)]">{item.overlay}</div>
                                        </div>
                                    </div>
                                    <div className="pl-[16px] overflow-hidden w-[260px]">
                                        <h1 className="font-[gilroy-xbold] font-[700] text-[18px] whitespace-nowrap overflow-clip text-ellipsis">{item.title}</h1>
                                        <div className="flex items-center gap-[3px]">
                                            <span className={`${item.rating ? 'block' : 'hidden'}`}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" stroke-color="rgba(2, 6, 12, 0.92)" fill-color="rgba(2, 6, 12, 0.92)">
                                                    <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                                                    <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 
                                                    13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 
                                                    5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 
                                                    10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 
                                                    8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 
                                                    13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"/>
                                                    <defs>
                                                        <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop>
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </span>
                                            <span className={`font-[gilroy-reg] text-[16px] font-[400] text-[rgba(2,6,12,0.92)] ${item.rating ? 'block' : 'hidden'}`}>{item.rating}  • </span>
                                            <span className="font-[gilroy-reg]  font-[600] text-[16px]">{item.timing} mins</span>
                                        </div>
                                        <div className="flex flex-col gap-[1px]">   
                                            <span className="font-[gilroy-med] font-[600] text-[rgba(2,6,12,0.6)] whitespace-nowrap overflow-clip text-ellipsis">{item.food}</span>
                                            <span className="font-[gilroy-med] font-[600] text-[rgba(2,6,12,0.6)] whitespace-nowrap overflow-clip text-ellipsis">{item.locality}</span>
                                        </div>
                                    </div>
                                </Link >   
                            </li>
                    
                            )
                        })
                    }
                </ul>
            </div>)} 
        </>
        
    )
}