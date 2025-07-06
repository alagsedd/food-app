import {
  FaUser,
  FaLock,
  FaSignInAlt,
  FaClipboardList,
  FaHeart,
  FaTag,
} from "react-icons/fa"; // Added FaClipboardList, FaHeart, FaTag
import { Link } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginHero}>
        {/* The overlay is handled directly by the background property now,
            so the separate heroOverlay div might be redundant if using the corrected background in CSS.
            Keeping it here for now if there are specific styles for it not covered by background property.
        */}
        {/* <div className={styles.heroOverlay}></div> */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome Back to A-Bakes</h1>
          <p className={styles.heroText}>
            Sign in to access your personalized recommendations, saved
            favorites, and exclusive member discounts.
          </p>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <FaClipboardList className={styles.benefitIcon} />{" "}
              {/* Replaced 🍰 with FaClipboardList */}
              <span>Track your orders</span>
            </div>
            <div className={styles.benefit}>
              <FaHeart className={styles.benefitIcon} />{" "}
              {/* Replaced 🎂 with FaHeart */}
              <span>Save your favorites</span>
            </div>
            <div className={styles.benefit}>
              <FaTag className={styles.benefitIcon} />{" "}
              {/* Replaced 🥧 with FaTag */}
              <span>Exclusive member deals</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.loginFormContainer}>
        <form className={styles.loginForm}>
          <h2 className={styles.formTitle}>Sign In</h2>

          <div className={styles.inputGroup}>
            <FaUser className={styles.inputIcon} />
            <input
              type="text"
              placeholder="Username or Email"
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

          <div className={styles.formOptions}>
            <label className={styles.rememberMe}>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className={styles.forgotPassword}>
              Forgot password?
            </Link>
          </div>

          <button type="submit" className={styles.loginButton}>
            <FaSignInAlt className={styles.buttonIcon} />
            Login
          </button>

          <div className={styles.signupPrompt}>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className={styles.signupLink}>
                Sign up
              </Link>
            </p>
          </div>

          <div className={styles.socialLogin}>
            <p className={styles.socialDivider}>or continue with</p>
            <div className={styles.socialIcons}>
              <button type="button" className={styles.socialButton}>
                <FaGoogle />
              </button>
              <button type="button" className={styles.socialButton}>
                <FaFacebookSquare />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
