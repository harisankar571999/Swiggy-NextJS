
export default function NextArrow({onClick,currentSlide,slideCount}){
   
    return (
        <div className="absolute top-[-50px] right-0 ">
          <button className={`rounded-full h-[34px] p-[8px] ${currentSlide===10 ? 'bg-[rgba(2,6,12,0.10)]' : 'bg-[rgba(2,6,12,0.15)]' }`} onClick={onClick}>
                <div className="rotate-[180deg]">
                    <svg aria-hidden="true" height="16" width="16" fill="none" viewBox="0 0 17 17">
                        <path d="M7.469 3.434a.8.8 0 0 1 1.091 1.17L5.084 7.848l-.37.347h10.38a.8.8 0 0 1 0 1.6H4.667c.12.114.257.244.417.393l3.434 3.204a.8.8 0 1 1-1.092 1.17l-3.471-3.24c-.409-.38-.773-.721-1.029-1.035-.277-.341-.51-.75-.51-1.27s.233-.927.51-1.269c.256-.314.62-.654 1.029-1.035l3.514-3.28Z" fill="rgb(2,6,12)" fillOpacity={`${currentSlide===10 ? '0.4' : '.92'}`}/>
                    </svg>
                </div>
          </button>
        </div>
    )
}