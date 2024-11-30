import Image from "next/image";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import FoodSlide from "./components/FoodSlide";
import PrevArrow from "./components/PrevArrow";
import NextArrow from "./NextArrow";

export default function Home() {
  return (
   
   <div>
      <Header/>
      {/* <SubHeader/> */}
      <FoodSlide/>
   </div>
  );
}
