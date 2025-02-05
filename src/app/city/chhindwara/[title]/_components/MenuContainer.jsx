'use client'
import Recommended from "./MenuRecommended"
 import VegStarter  from "./VegStarter"
 import NonVeg  from "./NonVeg"
 import VegRice from "./VegRice"
 import NonVegRice from "./NonVegRice"
 import Roti from "./Roti"
 import {useSelector,useDispatch } from "react-redux"
 import { vegToggle,NonVegToggle} from "../../../../../redux/slice/toggleSlice"
import Image from "next/image"



 export default function MenuContainer(){

    const cart=useSelector((state)=>state.cart)
    console.log(cart)
    const totalItems = Object.values(cart).length
    const dispatch=useDispatch()
    const {veg,nonVeg}=useSelector((state)=>state.toggle)
    
    const VegDispatch=(item)=>{
        dispatch(vegToggle(item))
        if (nonVeg){
            dispatch(NonVegToggle())
        }
    }

    const NonDispatch=(item)=>{
        dispatch(NonVegToggle(item))
        if (veg){
            dispatch(vegToggle())
        }
    }
   
    return(
        <>
        <div className="max-w-[800px] mx-[auto] fixed left-0 bottom-0 right-0 z-[10] flex flex-col ">
            <div className={`relative ${totalItems ? 'translate-down' : 'translate-menu' }`}>
                <div className="w-[72px] h-[72px] rounded-[50%] bg-black flex items-center justify-center shadow-[0_5px_10px_0px_rgba(0,0,0,0.3),0px_2px_1px_0px_rgba(93,141,213,.2)] absolute bottom-[10px] right-[24px] cursor-pointer">
                    <span className="px-[15px] font-[helvica-med] font-[600] text-[14px] text-white">MENU</span>
                </div>
            </div>
            <div className="relative z-[10]">
                <button className={`h-[48px] bg-[#60b246] w-[100%] ${totalItems ? 'translate-down' : 'translate-up' } `}>
                    <div  className="px-[16px] flex justify-between">
                        <div>{totalItems > 1 ? (
                            <span className="font-[helvica-semi] text-[14px] text-white">{totalItems} items added</span>) :
                            (<span className="font-[helvica-semi] text-[14px] text-white">{totalItems} item added</span>)
                            }</div>   
                        <span className="font-[helvica-semi] text-[14px] text-white flex items-center gap-[5px] ">
                            <span>View Cart</span>
                            <span>
                                <Image width={14} height={14} src="/assets/Checkout_Cart.avif" alt="Checkout_Cart.avif" className="h-[14px] w-[14px]"/>
                            </span>
                        </span>
                    </div>
                </button>
            </div>
        </div>
        <div>
            <div className="max-w-[800px] m-[20px_auto_0px] px-[20px] flex gap-[8px]">
                <div className="border-[rgba(2,6,12,0.15)] border-[1px] px-[16px] h-[34px] max-w-[72px] rounded-[1000px] flex items-center" title="Veg">
                    <label className="w-[38px] h-[10px] relative" onClick={VegDispatch}>
                        <span className={`rounded-[16px] w-[38px] h-[10px] absolute cursor-pointer ${veg ? 'bg-[rgb(27,166,114)] duration-[.25s]' : 'bg-[rgba(2,6,12,0.15)] duration-[.25s]' }`}>
                            <span className={`bottom-[-3px] bg-white absolute overflow-hidden ${veg ? 'translate-x-[22px] transition-all duration-[.25s]' : 'translate-x-[0] duration-[.25s]' }`} >
                                <svg aria-hidden="true" height="16" width="16">
                                    <g clipPath="url(#dta)"><path fillRule="evenodd" clipRule="evenodd" d="M8 14.6c-1.925 0-3.228-.003-4.203-.134-.934-.125-1.353-.345-1.635-.627-.283-.283-.502-.702-.628-1.636C1.403 
                                    11.228 1.4 9.925 1.4 8c0-1.925.003-3.228.134-4.203.126-.934.345-1.353.628-1.635.282-.283.701-.502 1.635-.628C4.772 
                                    1.403 6.075 1.4 8 1.4c1.925 0 3.228.003 4.203.134.934.126 1.353.345 1.636.628.282.282.502.701.627 1.635.131.975.134 
                                    2.278.134 4.203 0 1.925-.003 3.228-.134 4.203-.125.934-.345 1.353-.627 1.636-.283.282-.702.502-1.636.627-.975.131-2.278.134-4.203.134ZM0 
                                    8c0-3.771 0-5.657 1.172-6.828C2.343 0 4.229 0 8 0c3.771 0 5.657 0 6.828 1.172C16 2.343 16 4.229 16 8c0 3.771 0 5.657-1.172 
                                    6.828C13.657 16 11.771 16 8 16c-3.771 0-5.657 0-6.828-1.172C0 13.657 0 11.771 0 8Zm8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" 
                                    fill="#0F8A65"/></g><defs><clipPath id="dta"><path fill="#fff" transform="rotate(-180 8 8)" d="M0 0h16v16H0z"/>
                                    </clipPath></defs>
                                </svg>
                            </span>
                        </span>
                    </label>
                </div>
                <div className="border-[rgba(2,6,12,0.15)] border-[1px] px-[16px] h-[34px] max-w-[72px] rounded-[1000px] flex items-center" title="Non-Veg">
                    <label className="w-[38px] h-[10px] relative" onClick={NonDispatch}>
                        <span className={`rounded-[16px] w-[38px] h-[10px] absolute cursor-pointer ${nonVeg ? 'bg-[rgb(229,53,84)] duration-[.25s]' : 'bg-[rgba(2,6,12,0.15)] duration-[.25s]' }`}>
                            <span className={`bottom-[-3px] bg-white absolute overflow-hidden ${nonVeg ? 'translate-x-[22px] transition-all duration-[.25s]' : 'translate-x-[0] duration-[.25s]' }`} >
                                <svg aria-hidden="true" height="16" width="16">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.797 14.466c.975.131 2.278.134 4.203.134 1.925 0 
                                    3.228-.003 4.203-.134.934-.125 1.353-.345 1.636-.627.282-.283.502-.702.627-1.636.131-.975.134-2.278.134-4.203 
                                    0-1.925-.003-3.228-.134-4.203-.125-.934-.345-1.353-.627-1.635-.283-.283-.702-.502-1.636-.628C11.228 
                                    1.403 9.925 1.4 8 1.4c-1.925 0-3.228.003-4.203.134-.934.126-1.353.345-1.635.628-.283.282-.502.701-.628 1.635C1.403 
                                    4.772 1.4 6.075 1.4 8c0 1.925.003 3.228.134 4.203.126.934.345 1.353.628 1.636.282.282.701.502 1.635.627ZM1.172 1.172C0 
                                    2.343 0 4.229 0 8c0 3.771 0 5.657 1.172 6.828C2.343 16 4.229 16 8 16c3.771 0 5.657 0 6.828-1.172C16 13.657 16 11.771 16 
                                    8c0-3.771 0-5.657-1.172-6.828C13.657 0 11.771 0 8 0 4.229 0 2.343 0 1.172 1.172Zm2.172 10.107c.19.342.72.342 1.78.342h5.753c1.059 
                                    0 1.588 0 1.779-.342.19-.343-.088-.793-.646-1.693L9.134 4.939C8.625 4.12 8.37 3.71 8 3.71c-.371 0-.625.41-1.134 1.23L3.99 9.586c-.558.9-.837 
                                    1.35-.646 1.693Z" fill="#E43B4F"/>
                                </svg>
                            </span>
                        </span>
                    </label>
                </div>
            </div>
        </div>
            <Recommended/>    
            <VegStarter/>
            <NonVeg/>
            <VegRice/>
            <NonVegRice/>
            <Roti/>
        </>
    )
 }