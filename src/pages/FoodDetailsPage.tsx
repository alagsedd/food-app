import { useParams } from "react-router-dom";
import styles from "../styles/FoodDetailsPage.module.css";

const FoodDetailsPage = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <>
      <h2 className={styles.header2}>Sorry this page is under development</h2>
    </>
  );
};

export default FoodDetailsPage;
