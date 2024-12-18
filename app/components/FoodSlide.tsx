

import Carousal from "./Carousel";


function foodslide() {

  return (
    <div>
       <div>
          <div className="mx-auto max-w-[80%]">
            <div className="p-[16px] overflow-hidden">
                <div className="mb-[16px] flex justify-between">
                  <h2 className="font-[gilroy-xbold] font-[800] text-[24px] pl-[16px]">What's on your mind?</h2>
                </div>
                <div className="pl-[16px]">
                  <Carousal/>
                </div>
            </div>
          </div>
        </div>
        <hr className="border-[rgba(2,6,12,0.05)] border-[1px] m-[32px_calc(10%+52px)]" />
    </div>
  )
}

export default foodslide
