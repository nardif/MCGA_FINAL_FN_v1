import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.h2_header}>CRUD Products App</h2>
      <p className={styles.p_header}>
        En algún lugar de la mancha cuyo nombre no quiero recordar -
        Con la Scaloneta hasta el final
      </p>

      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <ul className={styles.navbar_items}>
            <li className={styles.nav_buttons}>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;