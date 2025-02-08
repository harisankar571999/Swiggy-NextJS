'use client'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchHotel } from "../../../redux/slice/restuarantSlice";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow"
import PrevArrow from "./PrevArrow"
import Skeleton from "react-loading-skeleton";
import Image from "next/image";


export default function RestaurantCarousel(){
     const dispatch = useDispatch();
     const {data,loading,error} = useSelector((state) => state.hotel);
     const [progress,setProgress]=useState(0)
     
     useEffect(()=>{
        dispatch(fetchHotel()); 
     },[dispatch])
     const [randomstate,setRandomState]=useState([])
     useEffect(() => {
        if (data.length>0){
            setRandomState([...data.slice(0,30)].sort(()=>Math.random()-0.5).slice(0,10))
        }
        
     },[data])
     console.log(data.title)
     
    
     if(error) return <h1>Opps! Error:{error}</h1>
     
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
              slidesToShow: 3.5,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 1065,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1.3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        afterChange:current=>{
            setProgress(100/(randomstate.length-4+1)*(current+1))
        }
      };

    return(
       
        <>{ loading ?  <Skeleton height={300}/>:(
            <div className="relative">
                <div >
                    <Slider {...settings}>
                            { randomstate.map((item) => {
                                    return (
                                 <ul className="flex gap-[32px] mb-[16px] max-[700px]:justify-center " key={item.id} > 
                                    <li  className="w-[100%] max-[1220px]:w-[280px] list-hover ">
                                    <Link href={`city/chhindwara/${item.title.toLowerCase().replace(/\s+/g,'-')}`} className="flex flex-col gap-[12px]  whitespace-nowrap overflow-clip text-ellipsis ">
                                        <div className="w-[100%] relative rounded-[16px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.1)]">{loading? <Skeleton height={182} width={300} />:( 
                                        <div>
                                            <Image width={100} height={182} src={item.img} alt={item.alt} className="w-[100%] h-[182px] object-cover overflow-hidden  "/>
                                            <div className="gradient absolute bottom-0 left-0 right-0 flex items-end text-left px-[12px] pb-[4px] "> 
                                                <div className="font-[proximacond] text-[24px] text-[rgba(255,255,255,0.92)]">{item.overlay}</div>
                                            </div>
                                        </div>)}
                                        </div>
                                        <div className="pl-[16px] overflow-hidden w-[260px]">
                                            <h1 className="font-[gilroy-xbold] font-[700] text-[18px] whitespace-nowrap overflow-clip text-ellipsis w-[190px]">{loading? <Skeleton height={"1.5em"} width={"10em"}/>: `${item.title}`}</h1>
                                            {loading? <Skeleton height={"1.5em"} width={100}/>: (
                                            <div className="flex items-center gap-[3px]">
                                                <span>
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
                                                <span className="font-[gilroy-reg] text-[16px] font-[400] text-[rgba(2,6,12,0.92)]">{item.rating}  • </span>
                                                <span className="font-[gilroy-reg]  font-[600] text-[16px]">{item.timing}</span>
                                            </div>)}
                                            <div className="flex flex-col gap-[1px]">   
                                                <span className="font-[gilroy-med] font-[600] text-[rgba(2,6,12,0.6)] whitespace-nowrap overflow-clip text-ellipsis w-[190px]">{loading? <Skeleton height={"1.5em"} width={100}/>: `${item.food}`}</span>
                                                <span className="font-[gilroy-med] font-[600] text-[rgba(2,6,12,0.6)] whitespace-nowrap overflow-clip text-ellipsis w-[190px]">{loading? <Skeleton height={"1.5em"} width={100}/>: `${item.locality}`}</span>
                                            </div>
                                        </div>
                                    </Link >   
                                </li>
                                </ul>
                                    )
                                })
                            }
                        
                        
                    </Slider>
                    <div className="w-[48px] mx-[auto] h-[4px] rounded-[4px] relative bg-[rgb(240,240,245)]">
                        <div className={`bg-[rgba(255,8,0)] absolute rounded-[2px] w-[50.8197%] top-0 left-0 bottom-0 transition-all duration-[.1s] ease-in-out`} style={{ transform: `translateX(${progress}%)` }}></div>
                    </div>
                </div>
            </div>)}
        </>
        
    )
}