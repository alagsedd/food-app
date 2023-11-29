import HeroSection from "./components/HeroSection";
import BlackDeals from "./components/BlackDeals";
import CustomerFavourites from "./components/CustomerFavourites";
import Reason from "./components/Reason";

const HomePage = () => {
  return (
    <>
      <div className="parent">
        <HeroSection />
        <Reason />
        <BlackDeals />
        <CustomerFavourites />
      </div>
    </>
  );
};

export default HomePage;
