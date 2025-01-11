'use client'
import { useEffect,useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { foodMenu } from "../redux/slice/menuSlice"
import { addItem,IncrementItem,DecrementItem } from "../redux/slice/cartSlice"
import Image from "next/image"



export default function NonVegRice(){
   
    const [items,setItems]=useState({})
        const dispatch=useDispatch()
        const {data,loading,error}=useSelector((state)=>state.menu)
        const [hide,setHide]=useState(false)
        const cart =useSelector((state)=>state.cart)
        const {veg,nonVeg}=useSelector((state)=>state.toggle)

        const [foodClick,setFood]=useState(null)
        const [full,setFull]=useState(false)
        const [view,setView]=useState(false)

        console.log(cart,loading,nonVeg)
    
        useEffect(()=>{
            dispatch(foodMenu())
        },[dispatch])
    
    const View=()=>{
        setView(!view)
    }    
    
    const Full=()=>{
      setFull(!full)
      }
    

        const Add = (item) => {
          
            
            if (item.customise){
                 setFood(item)
                if(foodClick){
                    setItems((prev)=>({
                        ...prev,[item.id]:{count:1}
                  }))
                  dispatch(addItem(item))
                  setFood(null)
                }
            }
            else{
                setFood(null)
                setItems((prev)=>({
                ...prev,[item.id]:{count:1}
                }))
                dispatch(addItem(item))
            }
          
        }

        const Hide=()=>{
            setHide(!hide)
        }
    
        
        const Increment=(item)=>{
            dispatch(IncrementItem(item))
            setItems((prev)=>(
                {
                    ...prev,[item.id]:{count:(prev[item.id]?.count) +1}
                }
            )) 
        }
    
        const Decrement = (item) => {
                setItems((prev) => {
                    const updatedItems = { ...prev };
                    
                    if (updatedItems[item.id]) {
                        updatedItems[item.id] = {
                          ...updatedItems[item.id], 
                          count: updatedItems[item.id].count - 1,
                        };
               
            
                        if (updatedItems[item.id].count < 1) {
                            delete updatedItems[item.id];
                        }
                    }
            
                    return updatedItems;
                });
            
                dispatch(DecrementItem(item));
            };
    
        if (error) return <div>Error loading menu.</div>
    
        return(
            <>
                <div>
                    <div className={`max-w-[800px] m-[20px_auto_0px] px-[20px] ${veg ? 'hidden' : 'block' }`}>
                        <div className="border-t-[16px] border-t-[rgba(2,6,12,.0509803922)]">{
                            data?.map((state)=>state?.nonVegRice?.map((item)=>(   
                            
                            <div className={`m-[24px_16px_0_16px]  last:border-b-0 border-b-[#d3d3d3] ${hide ? 'border-b-0' : 'border-b-[.5px]'}`} key={item.id}>
                                <div className={`mb-[24px] pr-[16px] flex items-center justify-between ${item.category ? 'block' : 'hidden'}`}>
                                    <h3 className={`font-[gilroy-xbold] text-[18px]`}>
                                        {item.category} ({state.nonVegRice.length})
                                    </h3>
                                    <div onClick={Hide} className="transition-all ease-in-out duration-[300ms]">
                                        <svg aria-hidden="true" viewBox="0 0 18 18" height="20" width="20" className={`transition-all ease-in-out duration-[100ms] ${hide ? 'arrow-up' : ''}`}>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.309 4.277a.9.9 0 0 0-.096 1.27l3.362 3.91c.01.01.019.02.028.032.151.176.32.373.486.519.195.17.501.377.927.377.426 0 
                                            .732-.206.927-.377.165-.146.335-.343.486-.52l.028-.031 3.33-3.873a.9.9 0 1 0-1.365-1.173l-3.33 3.872-.076.088-.076-.088-3.362-3.91a.9.9 0 0 0-1.27-.096Z" 
                                            fill="rgba(2,6,12,0.92)"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="">
                                    <div className={`  ${item.img ? '' : 'pb-[16px]' } ${hide ? 'hidden' :'block'}`}>
                                        <div className={`py-[4px] flex justify-between `}>
                                            <div>
                                                <div className="flex items-center gap-[4px]"> 
                                                    <span>
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
                                                    <span className={`${item.bestseller ? 'block' : 'hidden'}`}>
                                                        <svg aria-hidden="true" height="16" width="74">
                                                            <path d="M15.022 11V1.2h4.032c.999 0 1.769.21 2.31.63.55.42.826 1.008.826 1.764 0 .476-.13.896-.392 1.26-.252.355-.574.63-.966.826 1.176.467 1.764 1.26 1.764 2.38 0 .896-.336 1.61-1.008 2.142-.663.532-1.484.798-2.464.798h-4.102Zm1.848-4.368v2.716h2.142c1.157 0 1.736-.453 1.736-1.358s-.579-1.358-1.736-1.358H16.87Zm0-3.808v2.184h2.044c.513 0 .887-.089 1.12-.266.243-.177.364-.453.364-.826 0-.373-.121-.649-.364-.826-.233-.177-.607-.266-1.12-.266H16.87Zm13.226 5.124h-5.348c.056.532.257.957.602 1.274.346.308.78.462 1.302.462.86 0 1.498-.425 1.918-1.274l1.317.756c-.654 1.353-1.741 2.03-3.262 2.03-.99 0-1.834-.34-2.535-1.022-.69-.69-1.035-1.573-1.035-2.646 0-1.083.35-1.965 1.05-2.646.709-.681 1.577-1.022 2.604-1.022.989 0 1.8.327 2.436.98.634.644.951 1.475.951 2.492v.616Zm-3.444-2.744c-.457 0-.858.14-1.204.42a2.1 2.1 0 0 0-.7 1.036h3.724c-.084-.457-.284-.812-.602-1.064-.317-.261-.723-.392-1.218-.392Zm5.807.56c0 .43.546.756 1.638.98.813.168 1.4.425 1.764.77.374.336.56.793.56 1.372 0 .672-.247 1.227-.742 1.666-.494.43-1.162.644-2.002.644-.802 0-1.47-.196-2.002-.588A3.638 3.638 0 0 1 30.5 9.11l1.413-.896c.16.457.388.821.686 1.092.309.27.677.406 1.107.406.289 0 .54-.065.755-.196.224-.14.337-.331.337-.574 0-.224-.117-.401-.35-.532-.234-.14-.612-.261-1.135-.364-1.614-.317-2.422-1.04-2.422-2.17 0-.625.253-1.115.757-1.47.503-.364 1.115-.546 1.833-.546.738 0 1.326.14 1.764.42.449.28.817.723 1.107 1.33l-1.274.756c-.318-.812-.84-1.218-1.569-1.218-.7 0-1.05.205-1.05.616Zm4.18-.28V4.056h1.078V2.18h1.764v1.876h1.512v1.428H39.48v3.164c0 .653.294.98.882.98.205 0 .401-.028.588-.084L41.119 11c-.355.13-.747.196-1.176.196-1.484 0-2.226-.737-2.226-2.212v-3.5h-1.078Zm6.81.28c0 .43.547.756 1.639.98.812.168 1.4.425 1.764.77.373.336.56.793.56 1.372 0 .672-.248 1.227-.742 1.666-.495.43-1.162.644-2.002.644-.803 0-1.47-.196-2.002-.588A3.638 3.638 0 0 1 41.49 9.11l1.414-.896c.158.457.387.821.686 1.092.308.27.676.406 1.106.406.289 0 .541-.065.756-.196.224-.14.336-.331.336-.574 0-.224-.117-.401-.35-.532-.234-.14-.612-.261-1.134-.364-1.615-.317-2.422-1.04-2.422-2.17 0-.625.252-1.115.756-1.47.504-.364 1.115-.546 1.834-.546.737 0 1.325.14 1.764.42.448.28.816.723 1.106 1.33l-1.274.756c-.318-.812-.84-1.218-1.568-1.218-.7 0-1.05.205-1.05.616Zm11.485 2.184h-5.348c.056.532.257.957.602 1.274.346.308.78.462 1.302.462.859 0 1.498-.425 1.918-1.274l1.316.756c-.653 1.353-1.74 2.03-3.262 2.03-.989 0-1.834-.34-2.534-1.022-.69-.69-1.036-1.573-1.036-2.646 0-1.083.35-1.965 1.05-2.646.71-.681 1.578-1.022 2.604-1.022.99 0 1.802.327 2.436.98.635.644.952 1.475.952 2.492v.616ZM51.49 5.204c-.457 0-.858.14-1.204.42-.336.27-.569.616-.7 1.036h3.724c-.084-.457-.284-.812-.602-1.064-.317-.261-.723-.392-1.218-.392ZM55.837 11V1.2h1.764V11h-1.764Zm3.027 0V1.2h1.764V11h-1.764Zm9.678-3.052h-5.348c.056.532.256.957.602 1.274.345.308.78.462 1.302.462.858 0 1.498-.425 1.918-1.274l1.316.756c-.654 1.353-1.74 2.03-3.262 2.03-.99 0-1.834-.34-2.534-1.022-.69-.69-1.036-1.573-1.036-2.646 0-1.083.35-1.965 1.05-2.646.71-.681 1.577-1.022 2.604-1.022.99 0 1.801.327 2.436.98.634.644.952 1.475.952 2.492v.616Zm-3.444-2.744c-.458 0-.859.14-1.204.42a2.1 2.1 0 0 0-.7 1.036h3.724c-.084-.457-.285-.812-.602-1.064-.318-.261-.724-.392-1.218-.392Zm8.645-1.26-.28 1.666a1.648 1.648 0 0 0-.575-.098c-.513 0-.924.196-1.232.588-.298.383-.448.873-.448 1.47V11h-1.763V4.056h1.764v1.106c.429-.868 1.073-1.302 1.931-1.302.215 0 .416.028.603.084Z" fill="#FF6E5A"/>
                                                            <path d="M7.5 14.5H23M1 5.996h4.202L6.5 2l1.298 3.996H12l-3.4 2.47 1.3 3.996-3.4-2.47S4.335 11.32 4 12c-.335.68-.763 2.5 3.798 2.5" stroke="#FF6E5A" strokeWidth="1.5" strokeLinecap="round" fill='white' strokeLinejoin="round"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <h1 className="font-[gilroy-bold] text-[18px] text-[rgba(2,6,12,0.75)]">{item.name}</h1>
                                                <h2 className="font-[gilroy-reg] text-[16px] font-[600]">₹ {item.price}</h2>
                                                <div className={`mt-[12px] flex items-center gap-[2px] ${item.rating ? '' : 'hidden'}`}>
                                                    <span>
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" role="img" >
                                                            <rect width="14" height="14" fill="white"></rect>
                                                            <path 
                                                                d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 
                                                                1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 
                                                                12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 
                                                                11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 
                                                                12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 
                                                                4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 
                                                                4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill={`${item.rating >=4 ? '#116649': item.rating >=3 ? '#1BA672': item.rating >=2 ? '#E6A408' : '#116649'}`}>
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span className={`font-[gilroy-bold] text-[13px] ${item.rating >=4 ? 'text-[#116649]': item.rating >=3 ? 'text-[#1BA672]': item.rating >=2 ? 'text-[#E6A408]' : '#116649'}`}>
                                                       {typeof item.rating === 'number' ? item.rating.toFixed(1) : ''}
                                                    </span>
                                                    <span className="font-[gilroy-bold] text-[13px] text-[rgb(17,102,0.6)]">
                                                        ({item.review})
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`flex flex-col items-center  ${item.img ? '' : 'justify-center ' }`}>
                                                <div className={`w-[156px] h-[144px] rounded-[12px] ${item.img ? '' : 'hidden'} overflow-hidden`}>
                                                    <Image width={156}  height={144} src={item.img} alt="image.avif" className="object-cover rounded-[12px] block overflow-hidden w-[156px] h-[144px] " />
                                                </div>
                                                <div className={` bottom-[20px]  flex flex-col  items-center cursor-pointer ${item.img ? 'relative' : 'justify-center bottom-0 pr-[20px]' }`}>
                                                    <div className="relative">
                                                        <div className="bg-[white] border-[rgba(2,6,12,0.15)] border-[1px] w-[120px] h-[40px] rounded-[8px] flex items-center justify-center shadow-[0px_3px_8px_rgba(40,44,63,0.08)] relative overflow-hidden">
                                                            { !(items[item.id]?.count) ? (  <button className="relative z-[5] "  onClick={()=>Add(item)}>
                                                                    <span className="font-[gilroy-xbold] text-[18px] text-[rgb(27,166,114)] text-center cursor-pointer">
                                                                        ADD
                                                                    </span>
                                                                </button>) :
                                                            (<div className="">
                                                                    {/* <button className={`h-[40px] w-[120px] transition-all duration-[100ms] ease-in-out absolute appearance-none  translate-y-[-80px]`}>
                                                                        <span className="font-[gilroy-xbold] text-[18px] text-[rgb(27,166,114)] text-center cursor-pointer appearance-none">ADD</span>
                                                                    </button> */}
                                                                    <button className={`h-[40px] w-[120px] transition-all duration-[100ms] ease-in-out absolute appearance-none left-[0px] translate-y-[-20px]`}>
                                                                        <span className="font-[gilroy-xbold] text-[18px] text-[rgb(27,166,114)] text-center cursor-pointer appearance-none">{items[item.id].count}</span>
                                                                    </button>
                                                                    <button className={`h-[40px] pl-[16px] pr-[12px] top-0 transition-all duration-[500ms] ease-in-out absolute appearance-none translate-x-[-60px]`} onClick={()=>Decrement(item)}>
                                                                        <span className="font-[gilroy-xbold] text-[18px] text-[rgb(27,166,114)] text-center cursor-pointer appearance-none">-</span>
                                                                    </button>
                                                                    <button className={`h-[40px] pl-[12px] pr-[16px] translate-x-[25px] top-0 transition-all duration-[100ms] ease-in-out absolute appearance-none `} onClick={()=>Increment(item)}>
                                                                        <span className="font-[gilroy-xbold] text-[18px] text-[rgb(27,166,114)] text-center cursor-pointer appearance-none">+</span>
                                                                    </button> 
                                                                </div>)}
                                                            </div>
                                                        </div>
                                                    <div className={`mt-[2px] font-[gilroy-reg] text-[13px] text-[rgba(2,6,12,0.45)] ${item.customise ? '' : 'hidden'}`}>
                                                        Customisable
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )))}
                        </div>
                    </div>
                </div>
                {foodClick &&(
            <div className="w-[100%] z-[119999] fixed top-0 bottom-0">
                <div className="bg-[rgba(2,6,12,0.6)]  h-[100%]  flex items-center justify-center">
                    <div className="flex items-center justify-center max-[700px]:w-[90%] max-[700px]:h-auto " >
                        <div className="w-[600px]  rounded-[24px]  bg-[#f0f0f5] relative">
                        <button className="absolute bg-white h-[28px] w-[28px] rounded-[50%] shadow-[0px_2px_6px_rgba(0,0,0,.12)] flex justify-center items-center top-[20px] right-[20px]" onClick={()=>(setFood(null),setFull(false))} >
                            <span>
                                <svg aria-hidden="true" height="12" width="12">
                                    <g clipPath="url(#dwa)">
                                        <path d="M1.214 2.21a.9.9 0 0 1 1.273 0L6 5.726 9.514 2.21a.9.9 0 0 1 1.273 1.273L7.273 6.997l3.514 3.514a.9.9 0 1 1-1.273 1.273L6.001 
                                        8.27l-3.514 3.514a.9.9 0 1 1-1.273-1.273l3.514-3.513-3.514-3.514a.9.9 0 0 1 0-1.273Z" fill="var(--fill-color)" fillOpacity=".92"/>
                                    </g>
                                    <defs>
                                        <clipPath id="dwa"><path fill="#fff" transform="translate(0 .998)" d="M0 0h12v12H0z"/></clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </button>
                            <div className=" border-b-[1px] border-b-[rgba(2,6,12,0.15)] mt-[32px] mb-[16px] mx-[16px]">
                                <div className="flex gap-[10px]">
                                    <h3 className="font-[gilroy-reg]  text-[14px] text-[rgba(2,6,12,.65)]">{foodClick?.name}</h3>
                                    <h3 className="font-[gilroy-reg] font-[400px] text-[14px] text-[rgba(2,6,12,.6)]">•</h3>
                                    <h3 className="font-[gilroy-reg] font-[400px] text-[14px] text-[rgba(2,6,12,.6)]">₹{foodClick?.price.toFixed(2)}</h3>
                                </div>
                                <div className="mb-[12px] mt-[4px]">
                                    <h1 className="font-[gilroy-xbold] text-[20px] text-[rgba(2,6,12,0.75)] max-[550px]:text-[18px]">Customise as per your taste</h1>
                                </div>
                            </div>
                            <div className="px-[16px] pb-[36px] ">
                                <div className="font-[gilroy-xbold] text-[16px] text-[rgba(2,6,12,0.75)] pt-[8px] pb-[16px]">Quantity</div>
                                <div className="px-[16px] flex flex-col justify-center gap-[20px] py-[20px] bg-white rounded-[16px] ">
                                    <div className="flex justify-between items-center">
                                        <span className="flex gap-[12px] items-center"> 
                                            <span>
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
                                            <h2 className="font-[gilroy-reg] text-[rgba(2,6,12,0.75)]">Half</h2>
                                        </span>
                                        <span onClick={()=>Full(full)} className="cursor-pointer">
                                            <svg aria-hidden="true" height="16" width="16">
                                                <path fill={full ?'rgba(2,6,12,0.75)': '#FF5200 '} fillRule="evenodd" clipRule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0zM16 8A8 8 0 1 1 0 8a8 8 0 0 1 
                                                16 0zm-8 4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/>
                                                <path fill={full ?'#fff': '#FF5200'} stroke={full ?'#fff': '#FF5200'}  clipRule="evenodd" d="M8 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 
                                                0 0 0 0 9z"/>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="flex gap-[12px] items-center"> 
                                            <span>
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
                                            <h2 className="font-[gilroy-reg] text-[rgba(2,6,12,0.75)]">Full</h2>
                                        </span>
                                        <span className="flex items-center gap-[10px]">
                                            <span className="font-[gilroy-reg] text-[rgba(2,6,12,0.6)] text-[16px]">
                                             ₹ {(foodClick.price.toFixed(0)/2).toFixed(0)}
                                            </span>
                                            <span onClick={()=>Full(full)} className="cursor-pointer">
                                                <svg aria-hidden="true" height="16" width="16">
                                                    <path fill={full ?'#FF5200': 'rgba(2,6,12,0.75)'} fillRule="evenodd" clipRule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0zM16 8A8 8 0 1 1 0 8a8 8 0 0 1 
                                                    16 0zm-8 4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/>
                                                    <path fill={full ?'#FF5200': '#fff'} stroke={full ?'#FF5200': '#fff'} clipRule="evenodd" d="M8 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 
                                                    0 0 0 0 9z"/>
                                                </svg>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={`p-[16px] rounded-t-[16px] bg-white pb-[16px] border-b-[1px] border-b-[rgba(2,6,12,.15)] text-[rgba(2,6,12,0.6)] ${view? 'block' : 'hidden'}`} >
                                <div className="pt-[8px]   font-[gilroy-reg] text-[14px] text-[rgba(2,6,12,0.6] ">
                                    Quantity: {full? 'Full' : 'Half'}
                                </div>
                            </div>
                            <div className="p-[16px] rounded-b-[24px] bg-white pb-[16px] text-[rgba(2,6,12,0.6)]">
                                <div className=" flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="font-[gilroy-xbold] font-[700] text-[18px] text-[rgba(2,6,12,0.92)]">
                                         {full ? `₹${(parseFloat(foodClick?.price.toFixed(2))+(foodClick.price.toFixed(0)/2)).toFixed(2)}` : `₹${foodClick?.price.toFixed(2)}`}
                                        </span>
                                         <button className="font-[gilroy-xbold] font-[700] text-[13px] text-[rgb(255,82,0)] flex flex-col" onClick={()=>View()}>
                                            {view? 'Hide Customized Item' : 'View Customized Item'}
                                         </button>
                                    </div>
                                    <div className="w-[55%]">
                                        <button className="bg-[rgb(27,166,114)] w-[100%] rounded-[12px] h-[44px] font-[gilroy-xbold] font-[16px] text-[rgba(255,255,255,0.92)] hover:scale-[.96] transition-all duration-[.1s] ease-in" onClick={()=>(Add(foodClick),setFull(false))} >
                                            Add Item to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
            </>
        )
    }
    