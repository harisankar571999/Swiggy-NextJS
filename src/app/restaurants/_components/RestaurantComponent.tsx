import RestaurantCard from './RestaurantCard';




function RestaurantComponent() {

  return (
    <div>
       <div className='px-[20px]'>
          <div className="mx-auto w-[80%] max-[1220px]:w-[100%] text-left">
            <div className="overflow-hidden">
                <div className="mb-[16px] flex justify-between text-left ml-[3%] ">
                  <h2 className="font-[gilroy-xbold] font-[800] text-[24px] text-center max-[850px]:text-[22px] max-[700px]:text-[20px] max-[600px]:text-[18px]">Restaurants with online food delivery in Chhindwara</h2>
                </div>
                <div className="pl-[16px]">
                    <RestaurantCard/>
                </div>
            </div>
          </div>
        </div>
        <hr className="border-[rgba(2,6,12,0.05)] border-[1px] m-[32px_calc(10%+52px)]" />
    </div>
  )
}

export default RestaurantComponent
