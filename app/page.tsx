import Image from "next/image";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import FoodSlide from "./components/FoodSlide";
import BestPlaces from  "./components/BestPlaces";
import BestCuisines from "./components/BestCuisines";
import Footer from "./components/Footer";
import CardSlide from "./components/CardSlide"
import RestaurantComponent from "./components/RestaurantComponent";
import NavbarSwitch from "./components/NavbarSwitch";


export default function Home() {
  return (
   
   <div>
      <NavbarSwitch/>
      <FoodSlide/>
      <CardSlide/>
      <RestaurantComponent/>
      <BestPlaces/>
      <BestCuisines/>
      <Footer/>
      
   </div>
  );
}
