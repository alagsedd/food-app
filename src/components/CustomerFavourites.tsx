import styles from "../styles/CustomerFavourites.module.css";
import rice from "../assets/Images/fried-rice-menu-food.jpg";
import jollof from "../assets/Images/jollof-rice.jpg";
import sandwich from "../assets/Images/homemade-sandwich-with-lettuce-ham-black-background-close-up_77190-102.avif";
import wings from "../assets/Images/chickenwings.jpg";
import tilapia from "../assets/Images/grilled-tilapia-fish-recipe-main-photo.jpg";

import FavCard from "../cards/FavCard";
import { Link } from "react-router-dom";

const CustomerFavourites = () => {
  const meals = [
    { id: 1, name: "Mummies Fried Rice", price: 66, image: rice, rating: 5.3 },
    { id: 2, name: "Pizzaman Jollof", price: 60, image: jollof, rating: 3.3 },
    { id: 3, name: "Alags Sandwich", price: 45, image: sandwich, rating: 4.8 },
    { id: 4, name: "Fried wings", price: 30, image: wings, rating: 3.3 },
    { id: 5, name: "Daddy Tilapia", price: 30, image: tilapia, rating: 4.3 },
  ];

  return (
    <>
      {" "}
      <h2 className={styles.header}>
        <span>Your local favorites</span>
      </h2>
      <div className={styles.parent}>
        {meals.map((i, index) => (
          <Link
            key={index}
            className={styles.link}
            to={`/food-details/${i.name}`}
          >
            {" "}
            <FavCard
              key={i.id}
              image={i.image}
              name={i.name}
              price={i.price}
              rating={i.rating}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default CustomerFavourites;
