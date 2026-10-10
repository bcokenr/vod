import React from 'react';
import styles from '@/styles/home.module.css';

export default function Header() {
  return (
    <header className={["relative flex-row text-center"].join(" ")}>
      <h1 className={["mx-auto mt-8 mb-4", styles.headerTitle].join(" ")}>VOD</h1>
      <nav className={["space-x-4 px-4 pt-2 pb-2", styles.backgroundMain].join(" ")}> 
      </nav>
    </header>
  );
}
