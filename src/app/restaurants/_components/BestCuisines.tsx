import Link from "next/link";

import React from 'react'

function BestCuisines() {
  return (
    <div>
       <div className="px-[calc(6%+8px)] mt-[64px] mx-auto w-[90%]">
            <div >
                <h2 className="font-[gilroy-xbold] text-[24px] text-[rgba(2,6,12,0.92)]">Best Cuisines Near Me</h2>
            </div>
            <div className="mt-[16px] flex gap-[32px] flex-wrap evenly">
                <div className="flex flex-col gap-[16px]">
                    <div>
                    <Link href={'/'}><div className="p-[16px] border-[1.5px] border-[rgba(2,6,12,0.1) 
                    rounded-[12px] w-[100%] font-[gilroy-reg] font-[600] text-center text-[16px]
                    text-[rgba(2,6,12,0.75)]">Best Restaurants in Bangalore</div></Link>   
                    </div>
                    <div>
                    <Link href={'/'}><div className="p-[16px] border-[1.5px] border-[rgba(2,6,12,0.1) 
                    rounded-[12px] w-[100%] font-[gilroy-reg] font-[600] text-center text-[16px]
                    text-[rgba(2,6,12,0.75)]">Best Restaurants in Hyderabad</div></Link>   
                    </div>
                    <div>
                    <Link href={'/'}><div className="p-[16px] border-[1.5px] border-[rgba(2,6,12,0.1) 
                    rounded-[12px] w-[100%] font-[gilroy-reg] font-[600] text-center text-[16px]
                    text-[rgba(2,6,12,0.75)]">Best Restaurants in Ahmedabad</div></Link>   
                    </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <div>
                    <Link href={'/'}><div className="p-[16px] border-[1.5px] border-[rgba(2,6,12,0.1) 
                    rounded-[12px] w-[100%] font-[gilroy-reg] font-[600] text-center text-[16px]
                    text-[rgba(2,6,12,0.75)]">Best Restaurants in Pune</div></Link>   
                    </div>
                    <div>
                    <Link href={'/'}><div className="p-[16px] border-[1.5px] border-[rgba(2,6,12,0.1) 
                    rounded-[12px] w-[100%] font-[gilroy-reg] font-[600] text-center text-[16px]
                    text-[rgba(2,6,12,0.75)]">Best Restaurants in Kolkata</div></Link>   
                    </div>
                    <div>
                    <Link href={'/'}><div className="p-[16px] border-[1.5px] border-[rgba(2,6,12,0.1) 
                    rounded-[12px] w-[100%] font-[gilroy-reg] font-[600] text-center text-[16px]
                    text-[rgba(2,6,12,0.75)]">Best Restaurants in Jaipur</div></Link>   
                    </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <div>
                    <Link href={'/'}><div className="p-[16px] border-[1.5px] border-[rgba(2,6,12,0.1) 
                    rounded-[12px] w-[100%] font-[gilroy-reg] font-[600] text-center text-[16px]
                    text-[rgba(2,6,12,0.75)]">Best Restaurants Mumbai</div></Link>   
                    </div>
                    <div>
                    <Link href={'/'}><div className="p-[16px] border-[1.5px] border-[rgba(2,6,12,0.1) 
                    rounded-[12px] w-[100%] font-[gilroy-reg] font-[600] text-center text-[16px]
                    text-[rgba(2,6,12,0.75)]">Best Restaurants in Chennai</div></Link>   
                    </div>
                    <div>
                    <Link href={'/'}><div className="p-[16px] border-[1.5px] border-[rgba(2,6,12,0.1) 
                    rounded-[12px] w-[100%] font-[gilroy-reg] font-[600] text-center text-[16px]
                    text-[rgba(2,6,12,0.75)]">Best Restaurants in Nagpur</div></Link>   
                    </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <div>
                    <Link href={'/'}><div className="p-[16px] border-[1.5px] border-[rgba(2,6,12,0.1) 
                    rounded-[12px] w-[100%] font-[gilroy-reg] font-[600] text-center text-[16px]
                    text-[rgba(2,6,12,0.75)]">Best Restaurants in Delhi</div></Link>   
                    </div>
                    <div>
                    <Link href={'/'}><div className="p-[16px] border-[1.5px] border-[rgba(2,6,12,0.1) 
                    rounded-[12px] w-[100%] font-[gilroy-reg] font-[600] text-center text-[16px]
                    text-[rgba(2,6,12,0.75)]">Best Restaurants Chandigarh</div></Link>   
                    </div>
                    <div>
                    <Link href={'/'}><div className="p-[16px] border-[1.5px] border-[rgba(2,6,12,0.1) 
                    rounded-[12px] w-[100%] font-[gilroy-reg] font-[600] text-center text-[16px]
                    text-[rgba(2,6,12,0.75)]">Best Restaurants in Ahmedabad</div></Link>   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestCuisines
