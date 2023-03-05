"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

import { FaPlayCircle } from "react-icons/fa";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length > 2) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };
  const searchFuncIcon = () => {
    if (keyword.length > 2) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          <FaPlayCircle />
          NEXTFILM
        </Link>

        <nav className={styles.navigationMenu}>
          <Link href="/">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/">Kids</Link>
        </nav>
      </div>
      <div className={styles.baseInput}>
        <input
          value={keyword}
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          id="text"
          className={styles.input}
          placeholder="Film Ara    ! ! !"
        />
        <BiSearch
          onChange={(e) => setKeyword(e.target.value)}
          onClick={searchFuncIcon}
          size={25}
        />
      </div>
    </header>
  );
};

export default Header;
