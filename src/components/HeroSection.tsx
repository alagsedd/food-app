import { Button } from "@mui/material";
import styles from "../styles/HeroSection.module.css";
import { FaShoppingCart } from "react-icons/fa";
import background1 from "../assets/Images/backgroung-img.jpg"; // Renamed for clarity
import background2 from "../assets/Images/background-2.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentBackground, setCurrentBackground] = useState(background1);

  useEffect(() => {
    const timer = setInterval(() => {
      // Toggle between background images
      setCurrentBackground((prevBackground) =>
        prevBackground === background1 ? background2 : background1
      );
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [currentBackground]); // Re-run effect if currentBackground changes

  return (
    <section
      className={styles.heroContainer}
      style={{
        backgroundImage: `url(${currentBackground})`,
      }}
    >
      <div className={styles.overlay}></div>{" "}
      {/* Added for better text readability */}
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Alags Bakery</h1>
        <p className={styles.description}>
          Experience the art of baking with **Alags Bakery**. We're dedicated to
          delivering freshly baked goods and the best services right to your
          doorstep, in minimal time.
        </p>
        <div className={styles.buttonContainer}>
          <Button
            size="large" // Changed to 'large' for more prominence
            color="primary" // Assuming primary for main action, adjust your theme
            startIcon={<FaShoppingCart />}
            variant="contained"
            className={styles.orderButton} // Add a class for custom styling
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
