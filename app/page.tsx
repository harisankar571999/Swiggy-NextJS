import Image from "next/image";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import FoodSlide from "./components/FoodSlide";
import PrevArrow from "./components/PrevArrow";
import NextArrow from "./components/NextArrow";
import BestPlaces from  "./components/BestPlaces";
import BestCuisines from "./components/BestCuisines";
import Footer from "./components/footer";
import CardSlide from "./components/CardSlide"
// import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
   
   <div>
      <Header/>
      {/* <SubHeader/> */}
      <FoodSlide/>
      <CardSlide/>
      {/* <BestPlaces/> */}
       {/* <BestCuisines/> */}
  
      {/* <Footer/> */}
      {/* <RestaurantCard/> */}
      
   </div>
  );
}
