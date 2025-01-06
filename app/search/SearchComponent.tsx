'use client'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'


function SearchComponent() {

    const [hotel,setHotel]=useState([])
    const[food,setFood]=useState([])
    const [searchTerm,setSearchTerm]=useState('')
    const [filteredResult,setFilteredResult]=useState([])

    useEffect(()=>{
         axios.get('/api/restaurantApi')
         .then((res)=>{
            const hotelWithType= res.data.map((item:any)=>{
                return{
                    ...item,type:'Restaurant'
            }
            })
            setHotel(hotelWithType)
        })
      }
    ,[])

    useEffect(()=>{
        axios.get('/api/foodApi')
        .then((res)=>{
            
            setFood(res.data)
           })   
     }
   ,[])

    console.log(food)

    useEffect(()=>{
        if(searchTerm.trim() ===''){
            return setFilteredResult([])
        }
         
            const term=searchTerm?.toLowerCase()
            console.log(hotel)
            console.log(term)
            const searchResult=[
                ...hotel?.filter((item)=> item.title.toLowerCase().includes(term))
                // ...food?.flatMap((item) => [
                //     ...item.recommended?.filter((rec:any) => rec?.name?.toLowerCase().includes(term)) || [],
                //     ...item.vegStarter?.filter((rec:any) => rec?.name?.toLowerCase().includes(term)) || [],
                //     ...item.nonVeg?.filter((rec:any) => rec?.name?.toLowerCase().includes(term)) || [],
                //     ...item.vegRice?.filter((rec:any) => rec?.name?.toLowerCase().includes(term)) || [],
                //     ...item.nonVegRice?.filter((rec:any) => rec?.name?.toLowerCase().includes(term)) || [],
                //     ...item.roti?.filter((rec:any) => rec?.name?.toLowerCase().includes(term)) || []
                // ])
                
            ].sort((a,b)=>{
                const firstWord=(item:any)=> item.title?.toLowerCase().split(" ")[0].startsWith(term)
                const secondWord = (item:any) => {
                    const words = item.title?.toLowerCase().split(" ");
                    return words?.[1]?.startsWith(term);
                }

                if (firstWord(a)) return -1
                if(firstWord(b)) return 1
                if (secondWord(a)) return -1
                if (secondWord(b)) return 1
                return 0
                
            })
            setFilteredResult(searchResult)

         
            console.log(term)
    },[searchTerm,hotel])



    const highlightText =(text:any,term:any)=>{
        if (!text || typeof text !== 'string') {
            return text
        }
        
        const regex= new RegExp((`${term}`),"gi")
        return text.replace(regex,(match:any)=> {
            return `<b>${match}</b>`
        })
    }
         console.log(filteredResult)
        if(!filteredResult){
            return <h1>Please Wait..</h1>
        }
  return (
    <div>
       <Header/>
        <div>
            <div className='pt-[48px] pb-[8px] w-[100]% sticky t-[80px] z-[2]'>
                <div>
                    <form action="post" >
                        <div className=''>
                            <div className='flex items-center relative'>
                                <input type="search" placeholder='Search for restaurants and food' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className='bg-[#fff] h-[48px] border-[rgba(40,44,63,.3)] cursor-pointer border-solid border-[1px] w-[53%] rounded-[3px] m-[0_auto_8px] outline-none font-[helvica-reg] font-[600] text-[#686b78] px-[13px] placeholder:text-[#686b78] placeholder:font-[600]  placeholder:font-[helvica-reg] leading-[19px] '/>
                                <div className='absolute top-[15px] right-[24.5%]'>
                                    <span className={`${searchTerm ? 'hidden' : 'block'}`}> 
                                        <svg viewBox="5 -1 12 25" height="18" width="18" fill="#686b78">
                                            <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478    
                                            12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0    
                                            20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568    
                                            C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669  
                                            C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 
                                            10.1973467,17.8453568Z"> 
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className='w-[53%] mx-[auto] pt-[13px] flex flex-col'>
            { filteredResult?.map((item)=>(
            <button className='w-[100%] p-[14px_16px] flex items-center gap-[15px]' key={item.id}>
                <div className='w-[64px] h-[64px] rounded-[4px]'>
                    <img src={item?.img || '/path/to/default-image.png'} className="w-[64px] h-[64px] rounded-[4px]" />
                </div>
                <div className='flex flex-col items-start'>
                   <div className='font-[helvica-reg] font-[400] text-[14.98px] text-[#282c3f]'  dangerouslySetInnerHTML={{__html: highlightText(item.title || item.name, searchTerm),}}></div>
                    <div className='font-[helvica-reg]  font-[400] text-[14.98px] text-[#686b78]'>{item.type}</div>
                </div>
            </button>
       ))}</div>
    </div>
  )
}

export default SearchComponent
