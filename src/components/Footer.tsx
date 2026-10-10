import React from 'react';
import styles from '@/styles/home.module.css';

export default function Footer() {
  return (
    <footer className={["relative flex items-center", styles.backgroundAccent].join(" ")}>
      <div className={["left-6 md:left-24 px-4 py-4 text-sm text-muted-foreground"].join(" ")}>
        © {new Date().getFullYear()} VOD
      </div>
    </footer>
  );
}
