import Link from "next/link";

export default function Footer() {
    return (
        <>
           <footer className="bg-[rgba(240,240,245)] mt-[64px]" >
                <div className="w-[70%] mx-auto border-t-[1px] border-[rgba(2,6,12,0.75)] p-[24px_0_32px] flex items-center gap-[1%] justify-center max-[1400px]:flex-col">
                    <h1 className="font-[gilroy-xbold] text-[24px] text-[rgba(2,6,12,0.75)] text-center ">
                        For better experience,download the Swiggy app now
                    </h1>
                    <div className="flex items-center gap-[6%] max-[1400px]:mt-[20px]  max-[480px]:flex-col max-[480px]:gap-[10px]">
                        <span className="">
                            <Link href={'/'}>
                              <img src="/assets/footer/play_store.avif" alt="play_store.avif" className="max-[160px] h-[64px]"/>
                            </Link>
                        </span>
                        <span>
                            <Link href={'/'}>
                                <img src="/assets/footer/app_store.avif" alt="app_store.avif" className="max-[160px] h-[64px]" />
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="w-[65%] mx-auto flex justify-between mt-[64px] pb-[2rem] max-[900px]:flex-col"> 
                   
                    <div className="ml-15px flex flex-col items-center gap-[13px]">
                        <Link href={'/'}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="49" fill="none"><g filter="url(#filter0_b_674_19294)"><path fill="#FE5005" d="M69.097 35.543c-2.126 0-3.916-.456-5.376-1.368-1.459-.932-2.5-2.228-3.13-3.888l4.191-2.43c.85 
                                1.964 2.338 2.948 4.464 2.948 1.925 0 2.885-.576 2.885-1.733 0-.648-.312-1.133-.94-1.459-.649-.384-1.8-.802-3.462-1.243-1.699-.466-3.139-1.133-4.31-2.002-1.296-1.051-1.944-2.539-1.944-4.464 
                                0-1.925.696-3.533 2.093-4.704 1.416-1.176 3.096-1.761 5.04-1.761 1.742 0 3.278.412 4.613 1.243 
                                1.334.811 2.39 1.992 3.158 3.552l-4.1 2.4c-.767-1.642-1.991-2.458-3.671-2.458-.71 0-1.267.154-1.67.456-.404.303-.61.687-.61 1.152 0 .504.245.96.73 1.368.527.403 1.56.83 3.095 
                                1.277l1.973.638c.504.164 1.095.437 1.762.821.73.365 1.277.759 1.641 1.186.97 1.051 1.46 2.366 1.46 3.945 0 2.002-.73 
                                3.605-2.184 4.796-1.46 1.152-3.36 1.732-5.708 1.732v-.004Zm23.482-7.47 2.184-8.135h4.858L94.763 35.12H90.51l-2.429-8.107-2.428 
                                8.107H81.4l-4.858-15.182H81.4l2.184 8.136 2.366-8.136h4.253l2.366 8.136h.01Zm12.432-10.262a2.594 2.594 0 0 1-1.91.788 2.72 2.72 0 0 
                                1-1.944-.788 2.702 2.702 0 0 1-.788-1.944c0-.748.264-1.387.788-1.91.547-.547 1.195-.82 1.944-.82.748 0 1.387.273 1.91.82.547.528.821 
                                1.162.821 1.91 0 .75-.274 1.397-.821 1.944Zm.365 17.304h-4.555V19.933h4.555v15.182Zm13.867-13.632v-1.55h4.43v14.42c0 2.39-.777 
                                4.19-2.337 5.404-1.536 1.234-3.432 1.853-5.679 1.853-3.441 0-5.841-1.224-7.195-3.672l3.888-2.247c.711 1.277 1.863 1.916 3.461 
                                1.916 1.094 0 1.934-.284 2.52-.85.61-.566.912-1.368.912-2.4V32.96c-1.07 1.315-2.549 1.973-4.43 1.973-2.127 0-3.908-.749-5.343-2.246-1.416-1.498-2.126-3.322-2.126-5.468 
                                0-2.145.71-3.955 2.126-5.433 1.416-1.517 3.197-2.275 5.343-2.275 1.881 0 3.36.657 4.43 1.972Zm-6.317 8.29c.711.648 1.589.97 2.64.97 1.051 0 
                                1.935-.322 2.64-.97.687-.629 1.032-1.478 1.032-2.549 0-1.07-.345-1.925-1.032-2.549-.71-.648-1.589-.97-2.64-.97-1.051 0-1.934.322-2.64.97-.686.63-1.032 
                                1.479-1.032 2.55 0 1.07.346 1.924 1.032 2.548Zm24.624-8.29v-1.55h4.431v14.42c0 2.39-.778 4.19-2.338 5.404-1.536 1.234-3.432 1.853-5.678 
                                1.853-3.442 0-5.842-1.224-7.196-3.672l3.888-2.247c.711 1.277 1.863 1.916 3.461 1.916 1.095 0 1.935-.284 2.52-.85.61-.566.912-1.368.912-2.4V32.96c-1.07 
                                1.315-2.549 1.973-4.43 1.973-2.127 0-3.907-.749-5.343-2.246-1.416-1.498-2.126-3.322-2.126-5.468 0-2.145.71-3.955 2.126-5.433 1.416-1.517 3.197-2.275 5.343-2.275 1.881 0 3.36.657 4.43 1.972Zm-6.317 8.29c.711.648 
                                1.589.97 2.64.97 1.052 0 1.935-.322 2.64-.97.687-.629 1.032-1.478 1.032-2.549 0-1.07-.345-1.925-1.032-2.549-.71-.648-1.588-.97-2.64-.97-1.051 
                                0-1.934.322-2.64.97-.686.63-1.032 1.479-1.032 2.55 0 1.07.346 1.924 1.032 2.548Zm20.194-.547 2.856-9.293h4.858l-5.194 14.726c-.85 2.367-1.973 4.07-3.37 5.103-1.377 
                                1.051-3.139 1.526-5.284 1.425v-4.252c1.051 0 1.862-.192 2.428-.576.567-.365 1.023-1.013 1.368-1.944l-6.043-14.482h5.011l3.37 9.293ZM.5 24.94C.5 14.566.5 9.382 3.298 5.845a12.87 
                                12.87 0 0 1 2.108-2.107C8.938.939 14.127.939 24.5.939c10.373 0 15.557 0 19.094 2.799a12.87 12.87 0 0 1 2.108 2.107C48.5 9.378 48.5 14.567 48.5 24.94c0 10.373 0 15.557-2.798 
                                19.095a12.873 12.873 0 0 1-2.108 2.107C40.062 48.94 34.873 48.94 24.5 48.94c-10.373 0-15.557 0-19.094-2.799a12.873 12.873 0 0 1-2.108-2.107C.5 40.5.5 35.312.5 
                                24.939Z"></path><path fill="#fff" fillRule="evenodd" d="M26.314 19.967v-4.973a.588.588 0 0 0-.586-.586.588.588 0 0 0-.585.586v5.841c0 .332.268.596.595.596h.571c8.3 0 
                                9.163.432 8.645 2.184-.024.086-.053.168-.082.259a.788.788 0 0 1-.014.053c-2.18 6.57-8.074 14.793-9.816 17.145a.611.611 0 0 1-.984 0c-1.051-1.42-3.624-4.992-5.971-9.043-.159-.37-.235-1.234 
                                2.37-1.234h3.188c.178 0 .322.144.322.322v2.573c0 .307.225.59.533.614a.584.584 0 0 0 .465-.173.561.561 0 0 0 
                                .173-.412v-3.49a.608.608 0 0 0-.605-.605h-6.442c-1.123 0-1.804-.96-2.25-1.833-1.402-2.938-2.405-5.837-2.405-8.122 
                                0-5.851 4.665-11.117 11.107-11.117 5.736 0 10.08 4.171 10.963 9.216.005.043.038.235.043.274.23 2.477-6.23 2.193-8.947 
                                2.208a.286.286 0 0 1-.288-.288v.005Z" clipRule="evenodd"></path></g><defs></defs></svg>
                            </div>
                        </Link>
                        <h1 className="font-[gilroy-reg] font-[400] text-[16px] text-[rgba(2,6,12,0.6)]">
                          © 2024 Swiggy Limited
                        </h1>
                    </div>
                    <div className="flex items-start gap-[51px] max-[900px]:mt-[50px] flex-wrap evenly">
                        <div className="flex flex-col gap-[16px]">
                            <h1 className="font-[gilroy-xbold] font-[700] text-[18px]">Company</h1>
                            <ul className="flex flex-col gap-[16px]">
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">About Us</Link></li>
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Swiggy Corporate</Link></li>
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Careers</Link></li>
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Team</Link></li>
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Swiggy One</Link></li>
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Swiggy Instamart</Link></li>
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Swiggy Dineout</Link></li>
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Swiggy Genie</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[85px]">
                            <div className="flex flex-col gap-[16px]">
                                <h1 className="font-[gilroy-xbold] font-[700] text-[18px]">Contact us</h1>
                                <ul className="flex flex-col gap-[8px]">
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Help & Support</Link></li>
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Partner with us</Link></li>
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Ride with us</Link></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-[16px]">
                                <h1 className="font-[gilroy-xbold] font-[700] text-[18px]">Legal</h1>
                                <ul className="flex flex-col gap-[8px]">
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Terms & Conditions</Link></li>
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Cookie Policy</Link></li>
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Privacy Policy</Link></li>
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Investor Relations</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <h1 className="font-[gilroy-xbold] font-[700] text-[18px]">Available in:</h1>
                            <ul className="flex flex-col gap-[8px]">
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Banglore</Link></li>
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Gurgon</Link></li>
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Hyderbad</Link></li>
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Delhi</Link></li>
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Mumbai</Link></li>
                                <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Pune</Link></li>
                                <li>
                                    <button className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)] p-[4px_8px] border-[1px] border-[rgba(2,6,12,0.15)] rounded-[8px]">
                                        <div className="flex gap-[32px] items-center">
                                            <span>676 cities</span>
                                            <span>
                                                <svg aria-hidden="true" height="12" width="12">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.309 4.277a.9.9 0 0 0-.096 1.27l3.362 3.91c.01.01.019.02.028.032.151.176.32.373.486.519.195.17.501.377.927.377.426 
                                                    0 .732-.206.927-.377.165-.146.335-.343.486-.52l.028-.031 3.33-3.873a.9.9 0 1 0-1.365-1.173l-3.33 3.872-.076.088-.076-.088-3.362-3.91a.9.9 0 0 0-1.27-.096Z" 
                                                    fill="rgb(2, 6, 12)" fillOpacity=".6"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[85px]">
                            <div className="flex flex-col gap-[16px]">
                                <h1 className="font-[gilroy-xbold] font-[700] text-[18px]">Life at Swiggy</h1>
                                <ul className="flex flex-col gap-[8px]">
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Explore with Swiggy</Link></li>
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Swiggy News</Link></li>
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]">Snackables</Link></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-[16px]">
                                <h1 className="font-[gilroy-xbold] font-[700] text-[18px]">Social Links</h1>
                                <ul className="flex gap-[16px]">
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]"><img src="/assets/footer/icon-linkedin.avif" alt="icon-linkedin.avif" className="h-[18px] w-[16px]" /></Link></li>
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]"><img src="/assets/footer/icon-instagram.avif" alt="icon-instagram.avif" className="h-[18px] w-[16px]" /></Link></li>
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]"><img src="/assets/footer/icon-facebook.avif" alt="icon-facebook.avif"  className="h-[18px] w-[12px]"/></Link></li>
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]"><img src="/assets/footer/icon-pinterest.avif" alt="icon-pinterest.avif" className="h-[18px] w-[16px]"/></Link></li>
                                    <li><Link href={'/'} className="font-[gilroy-reg] text-[16px] text-[rgba(2,6,12,0.6)]"><img src="/assets/footer/icon-twitter.avif" alt="icon-twitter.avif" className="h-[16px] w-[16px]" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
           </footer>
        </>
    )
}
