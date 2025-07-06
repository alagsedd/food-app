import styles from "../styles/SignUpPage.module.css";
import { FaUser, FaEnvelope, FaLock, FaBirthdayCake } from "react-icons/fa";
import { MdPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className={styles.welcomeText}>Welcome to A-Bakes</h1>
          <p className={styles.tagline}>
            Join our sweet community and get access to exclusive deals, early
            product launches, and personalized recommendations.
          </p>
          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <FaBirthdayCake className={styles.benefitIcon} />
              <span>10% off your first order</span>
            </div>
            <div className={styles.benefitItem}>
              <FaBirthdayCake className={styles.benefitIcon} />
              <span>Exclusive member deals</span>
            </div>
            <div className={styles.benefitItem}>
              <FaBirthdayCake className={styles.benefitIcon} />
              <span>Personalized recommendations</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <form className={styles.signupForm}>
          <h2 className={styles.formTitle}>Create Account</h2>

          <div className={styles.inputGroup}>
            <FaUser className={styles.inputIcon} />
            <input
              type="text"
              placeholder="Full Name"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.inputIcon} />
            <input
              type="email"
              placeholder="Email Address"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <FaLock className={styles.inputIcon} />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <FaLock className={styles.inputIcon} />
            <input
              type="password"
              placeholder="Confirm Password"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <MdPhone className={styles.inputIcon} />
            <input
              type="tel"
              placeholder="Phone Number"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <MdLocationOn className={styles.inputIcon} />
            <input
              type="text"
              placeholder="Delivery Address"
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.terms}>
            <input type="checkbox" id="terms" className={styles.checkbox} />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
            Sign Up
          </button>

          <p className={styles.loginText}>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
