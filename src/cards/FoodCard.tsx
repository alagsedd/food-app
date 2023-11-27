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
    <div className={styles.parent}>
      <img
        className={styles.image}
        src={image}
        alt="Your browser doesn't support this image"
      />
      <div className={styles.other}>
        <span className={styles.name}>{name}</span>{" "}
        <span>
          {rating}
          <FaStar size="13" color="yellow" />
        </span>
      </div>

      <div className={styles.price}>
        <span>GH₵{price}</span>
      </div>
    </div>
  );
};

export default FoodCard;
