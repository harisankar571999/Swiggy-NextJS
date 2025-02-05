import Link from "next/link"

function SubHeader() {
  return (
    <div className="w-[100%] bg-[white] sticky top-0 z-[101] transition-all ease-in-out delay-75 block">
        <header className="shadow-[0_8px_16px_0px_rgba(27,30,36,0.1)] bg-[white]">
            <div className="">
                <div className=" mx-auto ml-[7%] mr-[4%]">
                    <div className="flex justify-between items-center ">
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
                        <div className="hidden max-[600px]:block">
                            <Link href={"search"} className="flex items-center gap-[8px]">
                                <div className="flex gap-[10px] max-[650px]:items-center">
                                    <svg aria-hidden="true" height="20" width="20"  style={{ width: "18px", height: "18px"}}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.1 8.842a5.25 5.25 0 1 1-10.5 0 5.25 5.25 
                                        0 0 1 10.5 0Zm-.957 5.338a6.85 6.85 0 1 1 .993-.98l5.183 4.76a.963.963 0 1 1-1.354 1.368l-4.822-5.148Z" 
                                        fill="rgb(2,6,12)" fillOpacity=".6"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div className="relative max-[600px]:hidden">
                            <Link href={'/search'} className="flex items-center gap-[8px]">
                                <button className="w-[360px] max-[850px]:w-[300px] rounded-[12px] bg-[rgb(240,240,245)] h-[56px] p-[8px] text-[rgba(2,6,12,0.45)] text-left pl-[16px] text-[18px] max-[850px]:text-[16px] font-[200] font-[gilroy-reg]">Search for restaurant and food</button>
                                <div className="flex gap-[10px] max-[650px]:items-center">
                                    <svg aria-hidden="true" height="20" width="20"  style={{position: "absolute", top: "16px", right: "16px", width: "18px", height: "18px"}}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.1 8.842a5.25 5.25 0 1 1-10.5 0 5.25 5.25 
                                        0 0 1 10.5 0Zm-.957 5.338a6.85 6.85 0 1 1 .993-.98l5.183 4.76a.963.963 0 1 1-1.354 1.368l-4.822-5.148Z" 
                                        fill="rgb(2,6,12)" fillOpacity=".6"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    </div>
  )
}

export default SubHeader
