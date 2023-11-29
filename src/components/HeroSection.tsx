import { Button } from "@mui/material";
import styles from "../styles/HeroSection.module.css";
import { FaShoppingCart } from "react-icons/fa";
import background from "../assets/Images/backgroung-img.jpg";
import background2 from "../assets/Images/background-2.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [current, setCurrent] = useState(background);

  useEffect(() => {
    const timer = setInterval(() => {
      if (current === background) setCurrent(background2);
      else setCurrent(background);
    }, 10000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div
      style={{
        backgroundImage: `url(${current})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={styles.parent}
    >
      <div className={styles.main}>
        {" "}
        <h1 className={styles.header}>
          <span>Alags Bakery</span>
        </h1>
        <p className={styles.desc}>
          Alags bakery is dedicated to providing the best of services within
          minimum hours. Grab a seat with us now!
        </p>
        <div className={styles.buttonBox}>
          {" "}
          <Button
            size="small"
            color="secondary"
            startIcon={<FaShoppingCart />}
            variant="contained"
          >
            Order now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
