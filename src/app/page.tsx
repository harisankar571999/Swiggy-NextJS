
import FoodSlide from "./restaurants/_components/FoodSlide";
import BestPlaces from  "./restaurants/_components/BestPlaces";
import BestCuisines from "./restaurants/_components/BestCuisines";
import Footer from "./restaurants/_components/Footer";
import CardSlide from "./restaurants/_components/CardSlide"
import RestaurantComponent from "./restaurants/_components/RestaurantComponent";
import NavbarSwitch from "./restaurants/_components/NavbarSwitch";


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
