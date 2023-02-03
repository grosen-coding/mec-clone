import styles from "./styles.module.scss";
import React from "react";
import Promo from "./promo";
import Main from "./Main";
import Top from "./Top";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Promo />
        <Top />
        <Main />
        {/* <h1>Header</h1> */}
      </header>
    </>
  );
}

export default Header;
