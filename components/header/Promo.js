import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

function Promo() {
  return (
    <>
      <Link href="/browse">
        <div className={styles.ad}>Promo Section</div>
      </Link>
    </>
  );
}

export default Promo;
