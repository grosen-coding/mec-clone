import Link from "next/link";
import styles from "./styles.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import Image from "next/image";
import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useRouter } from "next/router";

export default function Main() {
  //   const router = useRouter();
  //   const [query, setQuery] = useState(router.query.search || "");
  const { cart } = useSelector((state) => ({ ...state }));

  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     if (router.pathname !== "/browse") {
  //       if (query.length > 1) {
  //         router.push(`/browse?search=${query}`);
  //       }
  //     } else {
  //       searchHandler(query);
  //     }
  //   };
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              width={100}
              height={100}
              src="/../public/images/can-icon.jpg"
              alt="MEC Logo"
            />
          </div>
        </Link>
        <form className={styles.search}>
          <input type="text" placeholder="Search..." />
          <button type="submit" className={styles.search__icon}>
            <RiSearch2Line />
          </button>
        </form>
        <Link href="/cart">
          <div className={styles.cart}>
            <FaOpencart />
            <span style={{ color: "white" }}>{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
