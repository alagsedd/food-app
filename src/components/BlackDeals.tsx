import styles from "../styles/BlackDeals.module.css";
import hotdog1 from "../assets/Images/hot-dog1.avif";
import burger1 from "../assets/Images/burger1.jpg";
import pizza from "../assets/Images/pizza.jpeg";
import wings from "../assets/Images/chickenwings.jpg";
import tilapia from "../assets/Images/grilled-tilapia-fish-recipe-main-photo.jpg";

import FoodCard from "../cards/FoodCard";
import { Link } from "react-router-dom";

const BlackDeals = () => {
  const meals = [
    { id: 1, name: "Alags Hotdogs", price: 30, image: hotdog1, rating: 5.3 },
    { id: 2, name: "Kings Burger", price: 60, image: burger1, rating: 3.3 },
    { id: 3, name: "Davids Pizza", price: 45, image: pizza, rating: 4.8 },
    { id: 4, name: "Fried wings", price: 30, image: wings, rating: 3.3 },
    { id: 5, name: "Daddy Tilapia", price: 30, image: tilapia, rating: 4.3 },
  ];

  return (
    <section className={styles.blackDealsSection}>
      {" "}
      {/* Changed div to section */}
      <h2 className={styles.sectionTitle}>
        <span>Exclusive Black Deals!</span> {/* More engaging title */}
      </h2>
      <div className={styles.dealsGrid}>
        {" "}
        {/* Changed foodDisplay to dealsGrid */}
        {meals.map(
          (
            item // Use item.id directly as key
          ) => (
            <Link
              className={styles.dealCardLink} // Changed link to dealCardLink
              key={item.id}
              to={`/food-details/${item.name.replace(/\s+/g, "-")}`} // Better URL slug
            >
              <FoodCard
                price={item.price}
                rating={item.rating}
                image={item.image}
                name={item.name}
              />
            </Link>
          )
        )}
      </div>
      {/* Optional: Add a "View All Deals" button */}
      <div className={styles.viewAllContainer}>
        <Link to="/deals" className={styles.viewAllButton}>
          View All Deals
        </Link>
      </div>
    </section>
  );
};

export default BlackDeals;
