import Header from "@/app/components/Header";
import RestaurantHeader from "../RestaurantHeader";
import DealSlider from "../DealSlider";
import Menu from "../Menu";
import Recommended from "../MenuRecommended";
import VegStarter from "../VegStarter";
import NonVeg from "../NonVeg";
import Roti from "../Roti";
import VegRice from "../VegRice";
import NonVegRice from "../NonVegRice";


export default function Home() {
  return (
   
   <div>
      <Header/>
      <RestaurantHeader/>
      <DealSlider/>
      <Menu/>
      <Recommended/>
      <VegStarter/>
      <NonVeg/>
      <VegRice/>
      <NonVegRice/>
      <Roti/>
     
   </div>
  );
}
