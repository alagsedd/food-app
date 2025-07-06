import styles from "../styles/Reason.module.css";
import chef from "../assets/Images/chef.avif"; // Ensure this path is correct

const Reason = () => {
  return (
    <section className={styles.reasonSection}>
      <h2 className={styles.sectionTitle}>Why Choose Our Bakery?</h2>

      <div className={styles.contentGrid}>
        <div className={styles.textContent}>
          <p className={styles.description}>
            Experience a symphony of flavors crafted by expert bakers, prepared
            with the freshest ingredients, and tailored to satisfy every
            craving. From artisanal breads to exquisite pastries, we've curated
            a selection that promises to delight your taste buds and elevate
            your dining experience.
          </p>

          <ul className={styles.benefitsList}>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🍞</span>
              <span>
                **Delicious Variety:** Explore our diverse selection of freshly
                baked goods.
              </span>
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🌾</span>
              <span>
                **Freshness Guaranteed:** Handpicked ingredients ensuring
                top-notch quality.
              </span>
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🚚</span>
              <span>
                **Convenience Redefined:** Easy online ordering and swift
                delivery.
              </span>
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon}>❤️</span>
              <span>
                **Exceptional Service:** Customer satisfaction is our priority!
              </span>
            </li>
          </ul>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={chef}
            alt="Professional baker preparing fresh goods"
            className={styles.chefImage}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Reason;
