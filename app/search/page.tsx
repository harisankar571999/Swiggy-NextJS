import React from 'react'
import Header from '../components/Header'


function Search() {
  return (
    <div>
       <Header/>
       <div>
         <div className='pt-[48px] pb-[8px] w-[100]% sticky t-[80px] z-[2]'>
            <div >
              <form action="post" >
                <div className=''>
                  <div className='flex items-center relative'>
                      <input type="search" placeholder='Search for restaurants and food' className='bg-[#fff] h-[48px] border-[rgba(40,44,63,.3)] border-solid border-[1px] w-[53%] rounded-[3px] m-[0_auto_8px] outline-none font-[helvica-reg] font-[600] text-[#686b78] px-[13px] placeholder:text-[#686b78] placeholder:font-[600]  placeholder:font-[helvica-reg] leading-[19px] '/>
                      <div className='absolute top-[15px] right-[24.5%]'>
                        <span> 
                          <svg viewBox="5 -1 12 25" height="18" width="18" fill="#686b78">
                            <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478    
                              12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0    
                              20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568    
                              C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669  
                              C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 
                              10.1973467,17.8453568    Z"> 
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
    </div>
  )
}

export default Search
