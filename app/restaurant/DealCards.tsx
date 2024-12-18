'use client'
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../components/NextArrow"
import PrevArrow from "../components/PrevArrow"


    

export default function DealCards(){
    const settings = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 2,
        swipe:true,
        swipeToSlide: true,
        touchThreshold: 5,  
        touchMove: true, 
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      

        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 870,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return(
       
        <>
            <div className="relative">
               <Slider {...settings}> 
                    <div className="block" >
                        <div className="w-[328px] p-[12px] rounded-[20px] border-[rgba(2,6,12,0.15)] border-[1px] flex items-center gap-[12px] whitespace-nowrap " >
                            <div className="w-[48px] h-[48px]">
                                <img src="/assets/restaurant/offer png.avif" alt="png.avif" className="object-cover" />
                            </div>
                            <div className="">
                                <h1 className="font-[gilroy-xbold] text-[18px] w-[100%] ">50% Off Upto ₹100</h1>
                                <h2 className="font-[gilroy-bold] text-[14px] text-[rgba(2,6,12,.45)]">USE TRYNEW</h2>
                            </div>
                        </div>
                    </div>
                    <div className="block" >
                        <div className="w-[328px] p-[12px] rounded-[20px] whitespace-nowrap border-[rgba(2,6,12,0.15)] border-[1px] flex items-center gap-[12px]" >
                            <div className="w-[48px] h-[48px]">
                                <img src="/assets/restaurant/offer png.avif" alt="png.avif" className="object-cover" />
                            </div>
                            <div>
                                <h1 className="font-[gilroy-xbold] text-[18px]">Flat 15% Off</h1>
                                <h2 className="font-[gilroy-bold] text-[14px] text-[rgba(2,6,12,.45)]">USE ORDER4FAMILY</h2>
                            </div>
                        </div>
                    </div>
                    <div className="block" >
                        <div className="w-[328px] p-[12px] rounded-[20px] border-[rgba(2,6,12,0.15)] border-[1px] flex items-center gap-[12px]" >
                            <div className="w-[48px] h-[48px]">
                                <img src="/assets/restaurant/offer png.avif" alt="png.avif" className="object-cover" />
                            </div>
                            <div>
                                <h1 className="font-[gilroy-xbold] text-[18px]">15% Off Upto ₹100</h1>
                                <h2 className="font-[gilroy-bold] text-[14px] text-[rgba(2,6,12,.45)]">USE RBLCC100</h2>
                            </div>
                        </div>
                    </div>
                    <div className="block" >
                        <div className="w-[328px] p-[12px] whitespace-nowrap rounded-[20px] border-[rgba(2,6,12,0.15)] border-[1px] flex items-center gap-[12px]" >
                            <div className="w-[48px] h-[48px]">
                                <img src="/assets/restaurant/offer png.avif" alt="png.avif" className="object-cover" />
                            </div>
                            <div>
                                <h1 className="font-[gilroy-xbold] text-[18px]">50% Off Upto ₹100</h1>
                                <h2 className="font-[gilroy-bold] text-[14px] text-[rgba(2,6,12,.45)]">USE ICICI100</h2>
                            </div>
                        </div>
                    </div>
                    <div className="block" >
                        <div className="w-[328px] p-[12px] whitespace-nowrap rounded-[20px] border-[rgba(2,6,12,0.15)] border-[1px] flex items-center gap-[12px]" >
                            <div className="w-[48px] h-[48px]">
                                <img src="/assets/restaurant/offer png.avif" alt="png.avif" className="object-cover" />
                            </div>
                            <div>
                                <h1 className="font-[gilroy-xbold] text-[18px]">10% Off Upto ₹150</h1>
                                <h2 className="font-[gilroy-bold] text-[14px] text-[rgba(2,6,12,.45)]">USE HSBCFEST</h2>
                            </div>
                        </div>
                    </div>
                    <div className="block" >
                        <div className="w-[328px] p-[12px] whitespace-nowrap rounded-[20px] border-[rgba(2,6,12,0.15)] border-[1px] flex items-center gap-[12px]" >
                            <div className="w-[48px] h-[48px]">
                                <img src="/assets/restaurant/offer png.avif" alt="png.avif" className="object-cover" />
                            </div>
                            <div>
                                <h1 className="font-[gilroy-xbold] text-[18px]">Flat ₹75 Off</h1>
                                <h2 className="font-[gilroy-bold] text-[14px] text-[rgba(2,6,12,.45)]">NO CODE REQUIRED</h2>
                            </div>
                        </div>
                    </div>      
                </Slider>
            </div>
        </>
    )
}