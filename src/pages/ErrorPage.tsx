import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css"; // We'll create this CSS module

const ErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.errorMessage}>Page Not Found</h2>
      <p className={styles.errorDescription}>
        Oops! It looks like you've taken a wrong turn. The page you're looking
        for might have been moved or doesn't exist.
      </p>
      <Link to="/" className={styles.homeButton}>
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
