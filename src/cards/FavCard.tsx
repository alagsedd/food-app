import styles from "../styles/FavCard.module.css";
import { FaStar } from "react-icons/fa";

interface Props {
  name: string;
  price: number;
  image: string;
  rating: number;
}

const FavCard = ({ name, image, price, rating }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.productImage}
          src={image}
          alt={name}
          loading="lazy"
        />
      </div>

      <div className={styles.details}>
        <div className={styles.topRow}>
          <h3 className={styles.productName}>{name}</h3>
          <div className={styles.ratingContainer}>
            <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
            <FaStar className={styles.starIcon} />
          </div>
        </div>

        <div className={styles.priceContainer}>
          <span className={styles.price}>GH₵{price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default FavCard;
