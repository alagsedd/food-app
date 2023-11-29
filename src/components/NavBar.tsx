import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import { FaHome } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <IoMenuSharp
          className={styles.menu}
          onClick={() => setToggleMenu(true)}
          size="30"
        />

        {/* <div className={styles.searchBox}>
          <input
            placeholder=" Search Foods and snacks"
            className={styles.input}
            type="text"
          />
        </div> */}
        <span className={styles.brandName}>A-Bakes</span>

        <ul className={styles.ul1}>
          <li>
            <Link className={styles.link} to={"/"}>
              {" "}
              <FaHome className={styles.icon} size="23" /> <span>Home</span>
            </Link>{" "}
          </li>

          <li>
            {" "}
            <Link className={styles.link} to={"#"}>
              {" "}
              <FaRegNewspaper className={styles.icon} size="23" />
              <span>News</span>
            </Link>
          </li>

          <li>
            {" "}
            <Link className={styles.link} to={"#"}>
              <MdEventNote className={styles.icon} size="23" />{" "}
              <span>Events</span>
            </Link>
          </li>

          <li>
            <Link className={styles.link} to={"sign-up"}>
              {" "}
              <IoLogIn className={styles.icon} size="23" /> <span>Sign up</span>
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
