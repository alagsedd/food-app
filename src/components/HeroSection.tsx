import { Button } from "@mui/material";
import styles from "../styles/HeroSection.module.css";
import { FaShoppingCart } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className={styles.parent}>
      <h1 className={styles.header}>
        <span>Alags Bakery</span>
      </h1>

      <p className={styles.desc}>
        Alags bakery is dedicated to providing the best of services within
        minimum hours. Grab a seat with us now!
      </p>

      <Button
        size="small"
        color="secondary"
        startIcon={<FaShoppingCart />}
        variant="contained"
      >
        Order now
      </Button>
    </div>
  );
};

export default HeroSection;
