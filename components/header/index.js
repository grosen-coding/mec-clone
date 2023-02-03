import React from "react";
import Promo from "./promo";
import styles from "./styles.module.scss";
import Top from "./Top";

function Header() {
  return (
    <header className={styles.header}>
      <Promo />
      <Top />
      {/* <h1>Header</h1> */}
    </header>
  );
}

export default Header;
