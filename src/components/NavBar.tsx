import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import { FaHome } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <IoMenuSharp onClick={() => setToggleMenu(true)} size="30" />

        <div className={styles.searchBox}>
          <IoSearchOutline className={styles.searchButton} size="20" />{" "}
          <input
            placeholder="Foods and snacks"
            className={styles.input}
            type="text"
          />
        </div>
        <ul className={styles.ul1}>
          <li>
            <FaHome className={styles.icon} size="25" /> <span>Home</span>
          </li>
          <li>
            <FaRegNewspaper className={styles.icon} size="25" />
            <span>News</span>
          </li>
          <li>
            <MdEventNote className={styles.icon} size="25" />{" "}
            <span>Events</span>
          </li>
          <li>
            <Link className={styles.link} to={"sign-up"}>
              {" "}
              <IoLogIn className={styles.icon} size="25" />{" "}
              <span>Login/Sign up</span>
            </Link>
          </li>
        </ul>
      </nav>

      {toggleMenu && (
        <ul className={styles.ul2}>
          <li>
            <IoClose size="25" onClick={() => setToggleMenu(false)} />
          </li>

          <li>
            <Link className={styles.link} to={"/"}>
              {" "}
              <FaHome className={styles.icon} size="25" /> <span>Home</span>
            </Link>{" "}
          </li>

          <li>
            <FaRegNewspaper className={styles.icon} size="25" />
            <span>News</span>
          </li>

          <li>
            <MdEventNote className={styles.icon} size="25" />{" "}
            <span>Events</span>
          </li>

          <li>
            <Link className={styles.link} to={"sign-up"}>
              {" "}
              <IoLogIn className={styles.icon} size="25" />{" "}
              <span>Login/Sign up</span>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default NavBar;
