import styles from "../styles/Reason.module.css";
import chef from "../assets/Images/chef.avif";

const Reason = () => {
  return (
    <>
      <h1 className={styles.header}>
        <span>Why purchase our food?</span>
      </h1>
      <div className={styles.parent}>
        <p className={styles.desc}>
          Experience a symphony of tastes crafted by expert chefs, prepared with
          the freshest ingredients, and tailored to satisfy every craving. From
          sizzling burgers to exquisite sushi rolls, we've curated a menu that
          promises to tantalize your taste buds and elevate your dining
          experience.
        </p>

        <img
          src={chef}
          alt="Your browser doesn't support this image"
          className={styles.image}
        />

        <ol className={styles.ol}>
          <li>
            Delicious Variety: Explore a diverse menu featuring your favorite
            cuisines.
          </li>
          <li>
            Freshness Guaranteed: Handpicked ingredients ensuring top-notch
            quality.
          </li>
          <li>
            Convenience Redefined: Effortless online ordering and swift doorstep
            delivery.
          </li>
          <li>Exceptional Service: Customer satisfaction is our priority!</li>
        </ol>
      </div>
    </>
  );
};

export default Reason;
