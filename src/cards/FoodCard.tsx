import styles from "../styles/FoodCard.module.css";
import { FaStar } from "react-icons/fa";

interface Props {
  name: string;
  price: number;
  image: string;
  rating: number;
}

const FoodCard = ({ name, image, price, rating }: Props) => {
  return (
    <div className={styles.foodCard}>
      {" "}
      {/* Changed parent to foodCard */}
      <img
        className={styles.foodImage} // Changed image to foodImage
        src={image}
        alt={name}
        loading="lazy"
      />
      <div className={styles.infoSection}>
        {" "}
        {/* Changed other to infoSection */}
        <span className={styles.foodName}>{name}</span>{" "}
        {/* Changed name to foodName */}
        <span className={styles.rating}>
          {" "}
          {/* Added a class for rating */}
          {rating.toFixed(1)} {/* Format rating to one decimal place */}
          <FaStar size="13" color="#FFC04D" className={styles.starIcon} />{" "}
          {/* Use accent gold for star */}
        </span>
      </div>
      <div className={styles.priceSection}>
        {" "}
        {/* Changed price to priceSection */}
        <span className={styles.priceText}>GH₵{price}</span>{" "}
        {/* Added class for price text */}
      </div>
    </div>
  );
};

export default FoodCard;
