import DealCards from './DealCards'

export default function DealSlider(){
    return(
        <>
        <div>
            <div>
                <div className="max-w-[800px] m-[20px_auto_0px] px-[20px]">
                    <div className="overflow-hidden">
                        <div className="mb-[16px] flex justify-between ml-[3%] pt-[10px] ">
                        <h2 className="font-[gilroy-xbold] font-[800] text-[20px] text-left">Deals For You</h2>
                        </div>
                        <div className="pl-[16px]">
                            <DealCards/>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        </>
    )
}