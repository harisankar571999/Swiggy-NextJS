import Header from "@/app/components/Header";
import RestaurantHeader from "../RestaurantHeader";
import DealSlider from "../DealSlider";
import Menu from "../Menu";
import MenuContainer from "../MenuContainer"
import Customize from "../Customize";



export default function Home() {
  return (
   
   <div>
      <Header/>
      {/* <Customize/> */}
      <RestaurantHeader/>
      <DealSlider/>
      <Menu/>
      <MenuContainer/>
      
   </div>
  )
}
