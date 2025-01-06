'use client'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,  useState } from "react";
import { fetchHotel } from "../redux/slice/restuarantSlice";


export default function RestaurantCard(){
     const dispatch = useDispatch();
     const {data,loading,error} = useSelector((state:any) => state.hotel);
     const [random, setRandom] = useState([]);

     
     
     useEffect(()=>{
        dispatch(fetchHotel()); 
     },[dispatch])
     useEffect(()=>{
          const shuffled=[...data.slice(0,12)].sort(()=>Math.random()-0.5)
           const remaining=data.slice(12)
           setRandom([...shuffled,...remaining])
     },[data])
     
     if(loading) return <h1>Hold On!!! Its On The Way...</h1>
     if(error) return <h1>Opps! Error:{error}</h1>
     

    return(
       
        <>
            <div className="py-[20px] flex items-center">
                <ul className="flex gap-[8px] items-center">
                    <li className="rounded-[999px] border-[rgba(2,6,12,.15)] border-solid border-[1px] p-[7px_12px] shadow-[0_2px_12px_rgba(2,6,12,0.04)]">
                        <Link href={"/"} className="flex items-center gap-[8px]" >
                            <span className=" pb-[3px] font-[gilroy-reg] font-[200] text-[14px] text-[#282c3f]] ">
                                Filter
                            </span>
                            <span  className="font-[helvica-med] text-[16px] text-[#3d4152] leading-[19.2px] self-center mt-[-4px]">
                                <svg aria-hidden="true" height="16" width="16">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4 5.999a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 
                                    0Zm1.6 0a2.8 2.8 0 0 1-5.485.8H1.81a.8.8 0 1 1 0-1.6h7.707a2.801 2.801 0 0 1 5.484.8ZM3.8 13.453a1.2 1.2 0 
                                    1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm0 1.6a2.8 2.8 0 1 1 2.684-3.6h7.711a.8.8 0 1 1 0 1.6h-7.71a2.801 2.801 0 0 1-2.685 2Z" 
                                    fill="rgb(2,6,12)" fillOpacity=".92"/>
                                </svg>
                            </span>
                        </Link>
                    </li>
                    <li className="rounded-[999px] border-[rgba(2,6,12,.15)] border-solid border-[1px] p-[7px_12px] shadow-[0_2px_12px_rgba(2,6,12,0.04)] max-[750px]:hidden">
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
                    <li className="rounded-[999px] border-[rgba(2,6,12,.15)] border-solid border-[1px] p-[7px_12px] shadow-[0_2px_12px_rgba(2,6,12,0.04)] max-[900px]:hidden">
                        <Link href={"/"} className="flex items-center gap-[8px]" >
                            <span className=" pb-[3px] font-[gilroy-reg] font-[600] text-[14px] text-[#02060cbf]">
                                Fast Delivery
                            </span>
                        </Link>
                    </li>
                    <li className="rounded-[999px] border-[rgba(2,6,12,.15)] border-solid border-[1px] p-[7px_12px] shadow-[0_2px_12px_rgba(2,6,12,0.04)] max-[1050px]:hidden">
                        <Link href={"/"} className="flex items-center gap-[8px]" >
                            <span className=" pb-[3px] font-[gilroy-reg] font-[600] text-[14px] text-[#02060cbf]">
                                Ratings 4.0+
                            </span>
                        </Link>
                    </li>
                    <li className="rounded-[999px] border-[rgba(2,6,12,.15)] border-solid border-[1px] p-[7px_12px] shadow-[0_2px_12px_rgba(2,6,12,0.04)] max-[1150px]:hidden">
                        <Link href={"/"} className="flex items-center gap-[8px]" >
                            <span className=" pb-[3px] font-[gilroy-reg] font-[600] text-[14px] text-[#02060cbf]">
                                Pure Veg
                            </span>
                        </Link>
                    </li>
                    <li className="rounded-[999px] border-[rgba(2,6,12,.15)] border-solid border-[1px] p-[7px_12px] shadow-[0_2px_12px_rgba(2,6,12,0.04)] max-[1250px]:hidden">
                        <Link href={"/"} className="flex items-center gap-[8px]" >
                            <span className=" pb-[3px] font-[gilroy-reg] font-[600] text-[14px] text-[#02060cbf]">
                                Offers
                            </span>
                        </Link>
                    </li>
                    <li className="rounded-[999px] border-[rgba(2,6,12,.15)] border-solid border-[1px] p-[7px_12px] shadow-[0_2px_12px_rgba(2,6,12,0.04)] max-[1400px]:hidden">
                        <Link href={"/"} className="flex items-center gap-[8px]" >
                            <span className=" pb-[3px] font-[gilroy-reg] font-[600] text-[14px] text-[#02060cbf]">
                                Rs. 300-Rs. 600
                            </span>
                        </Link>
                    </li>
                    <li className="rounded-[999px] border-[rgba(2,6,12,.15)] border-solid border-[1px] p-[7px_12px]  shadow-[0_2px_12px_rgba(2,6,12,0.04)] max-[1400px]:hidden">
                        <Link href={"/"} className="flex items-center gap-[8px]" >
                            <span className=" pb-[3px] font-[gilroy-reg] font-[600] text-[14px] text-[#02060cbf]">
                                Less than Rs. 300
                            </span>
                        </Link>
                    </li>
                    <li className="rounded-[999px] border-[rgba(2,6,12,.15)] border-solid border-[1px] p-[7px_12px] shadow-[0_2px_12px_rgba(2,6,12,0.04)] hidden max-[1400px]:block">
                        <div className="flex items-center gap-[8px]" >
                            <span className=" pb-[3px] font-[gilroy-reg] font-[600] text-[14px] text-[#02060cbf] ">
                                More
                            </span>
                            <span  className="font-[helvica-med] text-[16px] text-[#3d4152] leading-[19.2px] self-center mt-[-4px]">
                                <svg aria-hidden="true" height="12" width="12"style={{fillOpacity: 1}}>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.309 4.277a.9.9 0 0 0-.096 1.27l3.362 3.91c.01.01.019.02.028.032.151.176.32.373.486.519.195.17.501.377.927.377.426 0 .732-.206.927-.377.165-.146.335-.343.486-.52l.028-.031 3.33-3.873a.9.9 0 1 0-1.365-1.173l-3.33 3.872-.076.088-.076-.088-3.362-3.91a.9.9 0 0 0-1.27-.096Z" fill="rgb(2,6,12)" fillOpacity=".92"/>
                                </svg> 
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="relative">
                <ul className="grid grid-cols-4 p-[32px_16px] gap-[32px] max-[1250px]:flex" > 
                    { random.map((item:any) => {
                            return (
                    
                            <li  className="w-[100%] list-hover"  key={item.id}>
                                <Link href={`/restaurant/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className={`flex flex-col gap-[12px]  whitespace-nowrap overflow-clip text-ellipsis ${item.id>=50 ? 'cursor-not-allowed': 'cursor-pointer'}`}>
                                    <div className="w-[100%] relative rounded-[16px] overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.1)]">
                                            <img src={item.img} alt={item.alt} className="w-[100%] h-[182px] object-cover overflow-hidden  "/>
                                        <div className="gradient absolute bottom-0 left-0 right-0 flex items-end text-left px-[12px] pb-[4px] "> 
                                            <div className="font-[proximacond] text-[24px] text-[rgba(255,255,255,0.92)]">{item.overlay}</div>
                                        </div>
                                    </div>
                                    <div className="pl-[16px] overflow-hidden w-[260px]">
                                        <h1 className="font-[gilroy-xbold] font-[700] w-[190px] text-[18px] whitespace-nowrap overflow-clip text-ellipsis">{item.title}</h1>
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
                                            <span className="font-[gilroy-med] font-[600] text-[rgba(2,6,12,0.6)] whitespace-nowrap overflow-clip text-ellipsis w-[190px]">{item.food}</span>
                                            <span className="font-[gilroy-med] font-[600] text-[rgba(2,6,12,0.6)] whitespace-nowrap overflow-clip text-ellipsis w-[190px]">{item.locality}</span>
                                        </div>
                                    </div>
                                </Link >   
                            </li>
                    
                            )
                        })
                    }
                </ul>
            </div>
        </>
        
    )
}