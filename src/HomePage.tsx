import HeroSection from "./components/HeroSection";
import BlackDeals from "./components/BlackDeals";
import CustomerFavourites from "./components/CustomerFavourites";
import Reason from "./components/Reason";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <>
      {/* Use the global-container class for consistent max-width and padding */}
      <div className="global-container">
        <HeroSection />
        <Reason />
        <BlackDeals />
        {/* CustomerFavourites will be addressed in the next step, ensuring its styling matches */}
        <CustomerFavourites />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
