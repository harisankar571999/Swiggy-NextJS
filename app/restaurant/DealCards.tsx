'use client'
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperArrows from "./SwiperArrows";



    

export default function DealCards(){
   
    

    return(

       
        <>
            <div className="relative">
                <Swiper 
                  modules={[Navigation]}
                  spaceBetween={270}
                  slidesPerView={3}
                  navigation ={{
                    nextEl:'.next-button',
                    prevEl:'.prev-button'
                  }}
                  
                >
                <SwiperSlide>
                <div className="" >
                    <div className="w-[323px] p-[12px] rounded-[20px] border-[rgba(2,6,12,0.15)] border-[1px] flex items-center gap-[12px] whitespace-nowrap " >
                        <div className="w-[48px] h-[48px]">
                            <img src="/assets/restaurant/offer png.avif" alt="png.avif" className="object-cover" />
                        </div>
                        <div className="">
                            <h1 className="font-[gilroy-xbold] text-[18px] w-[100%] ">50% Off Upto ₹100</h1>
                            <h2 className="font-[gilroy-bold] text-[14px] text-[rgba(2,6,12,.45)]">USE TRYNEW</h2>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="" >
                    <div className="w-[323px] p-[12px] rounded-[20px] whitespace-nowrap border-[rgba(2,6,12,0.15)] border-[1px] flex items-center gap-[12px]" >
                        <div className="w-[48px] h-[48px]">
                            <img src="/assets/restaurant/offer png.avif" alt="png.avif" className="object-cover" />
                        </div>
                        <div>
                            <h1 className="font-[gilroy-xbold] text-[18px]">Flat 15% Off</h1>
                            <h2 className="font-[gilroy-bold] text-[14px] text-[rgba(2,6,12,.45)]">USE ORDER4FAMILY</h2>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="" >
                    <div className="w-[323px] p-[12px] rounded-[20px] border-[rgba(2,6,12,0.15)] border-[1px] flex items-center gap-[12px]" >
                        <div className="w-[48px] h-[48px]">
                            <img src="/assets/restaurant/offer png.avif" alt="png.avif" className="object-cover" />
                        </div>
                        <div>
                            <h1 className="font-[gilroy-xbold] text-[18px]">15% Off Upto ₹100</h1>
                            <h2 className="font-[gilroy-bold] text-[14px] text-[rgba(2,6,12,.45)]">USE RBLCC100</h2>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="" >
                    <div className="w-[323px] p-[12px] whitespace-nowrap rounded-[20px] border-[rgba(2,6,12,0.15)] border-[1px] flex items-center gap-[12px]" >
                        <div className="w-[48px] h-[48px]">
                            <img src="/assets/restaurant/offer png.avif" alt="png.avif" className="object-cover" />
                        </div>
                        <div>
                            <h1 className="font-[gilroy-xbold] text-[18px]">50% Off Upto ₹100</h1>
                            <h2 className="font-[gilroy-bold] text-[14px] text-[rgba(2,6,12,.45)]">USE ICICI100</h2>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="" >
                    <div className="w-[323px] p-[12px] whitespace-nowrap rounded-[20px] border-[rgba(2,6,12,0.15)] border-[1px] flex items-center gap-[12px]" >
                        <div className="w-[48px] h-[48px]">
                            <img src="/assets/restaurant/offer png.avif" alt="png.avif" className="object-cover" />
                        </div>
                        <div>
                            <h1 className="font-[gilroy-xbold] text-[18px]">10% Off Upto ₹150</h1>
                            <h2 className="font-[gilroy-bold] text-[14px] text-[rgba(2,6,12,.45)]">USE HSBCFEST</h2>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="" >
                    <div className="w-[323px] p-[12px] whitespace-nowrap rounded-[20px] border-[rgba(2,6,12,0.15)] border-[1px] flex items-center gap-[12px]" >
                        <div className="w-[48px] h-[48px]">
                            <img src="/assets/restaurant/offer png.avif" alt="png.avif" className="object-cover" />
                        </div>
                        <div>
                            <h1 className="font-[gilroy-xbold] text-[18px]">Flat ₹75 Off</h1>
                            <h2 className="font-[gilroy-bold] text-[14px] text-[rgba(2,6,12,.45)]">NO CODE REQUIRED</h2>
                        </div>
                    </div>
                </div>  
                </SwiperSlide>
                </Swiper> 
                <SwiperArrows/>
            </div> 
        </>
    )
}