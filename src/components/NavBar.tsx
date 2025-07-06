import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import { FaHome, FaRegNewspaper } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { IoLogIn, IoMenuSharp, IoClose, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.brandName}>
          A-Bakes
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.navListDesktop}>
          <li>
            <Link to="/" className={styles.navLink}>
              <FaHome className={styles.icon} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/news" className={styles.navLink}>
              <FaRegNewspaper className={styles.icon} />
              <span>News</span>
            </Link>
          </li>
          <li>
            <Link to="/events" className={styles.navLink}>
              <MdEventNote className={styles.icon} />
              <span>Events</span>
            </Link>
          </li>
          <li>
            <Link to="/sign-up" className={styles.navLink}>
              <IoLogIn className={styles.icon} />
              <span>Sign Up</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu and Search Icons */}
        <div className={styles.mobileActions}>
          <IoSearch
            className={styles.searchIconMobile}
            onClick={toggleSearch}
            size="25"
            aria-label="Toggle Search"
          />
          <IoMenuSharp
            className={styles.menuIcon}
            onClick={toggleMenu}
            size="30"
            aria-label="Open Menu"
          />
        </div>

        {/* Mobile Search Input */}
        {isSearchOpen && (
          <div className={styles.searchBoxMobile}>
            <input
              placeholder="Search foods and snacks"
              className={styles.searchInput}
              type="text"
            />
            <IoClose
              className={styles.closeSearch}
              onClick={toggleSearch}
              size="25"
              aria-label="Close Search"
            />
          </div>
        )}
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <IoClose
            className={styles.closeMenu}
            onClick={toggleMenu}
            size="30"
            aria-label="Close Menu"
          />
          <ul className={styles.navListMobile}>
            <li>
              <Link to="/" className={styles.navLink} onClick={toggleMenu}>
                <FaHome className={styles.icon} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/news" className={styles.navLink} onClick={toggleMenu}>
                <FaRegNewspaper className={styles.icon} />
                <span>News</span>
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className={styles.navLink}
                onClick={toggleMenu}
              >
                <MdEventNote className={styles.icon} />
                <span>Events</span>
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className={styles.navLink}
                onClick={toggleMenu}
              >
                <IoLogIn className={styles.icon} />
                <span>Login/Sign Up</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
