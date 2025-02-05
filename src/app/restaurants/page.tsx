
import FoodSlide from "./_components/FoodSlide";
import BestPlaces from  "./_components/BestPlaces";
import BestCuisines from "./_components/BestCuisines";
import Footer from "./_components/Footer";
import CardSlide from "./_components/CardSlide"
import RestaurantComponent from "./_components/RestaurantComponent";
import NavbarSwitch from "./_components/NavbarSwitch";


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
