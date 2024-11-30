"use client"
import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { fetchFoodData } from "../redux/slice/foodSlice"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link"
import NextArrow from "../NextArrow"
import PrevArrow from "./PrevArrow"

export default function Carousal(){
    const dispatch = useDispatch()
    const {data,loading,error}=useSelector((state)=>state.food);
    
useEffect(()=>{
    dispatch(fetchFoodData())
},[dispatch])
const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow  />,
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
return (
    <div className="relative">
        <Slider {...settings}>
          {
          data.map((item) => {
            return   (
            <div className="flex gap-[24px]"> 
              <Link href={'/'} key={item.id}>
                <span className="h-[180px] w-[144px] block object-cover">
                  <img src={item.img} alt={item.alt} className="h-[180px] w-[100%] object-cover" />
                </span>
              </Link>
            </div>
            )
              })
            }
        </Slider>
    </div>
    )
}