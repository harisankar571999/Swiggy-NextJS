
import RestaurantCarousel from './RestaurantCarousel';



function CardSlide() {

  return (
    <div>
       <div>
          <div className="mx-auto max-w-[80%]">
            <div className="p-[16px] ">
                <div className="mb-[16px] flex justify-between">
                  <h2 className="font-[gilroy-xbold] font-[800] text-[24px] pl-[16px]">Top restaurant chains in Chhindwara</h2>
                </div>
                <div className="pl-[16px]">
                    <RestaurantCarousel/>
                </div>
            </div>
          </div>
        </div>
        <hr className="border-[rgba(2,6,12,0.05)] border-[1px] m-[32px_calc(10%+52px)]" />
    </div>
  )
}

export default CardSlide
