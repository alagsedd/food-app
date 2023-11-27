import { useParams } from "react-router-dom";
import styles from "../styles/FoodDetailsPage.module.css";

const FoodDetailsPage = () => {
  const { name } = useParams();
  console.log(name);
  return <div className={styles.parent}>{}</div>;
};

export default FoodDetailsPage;
