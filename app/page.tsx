import React from 'react';
import styles from '@/styles/home.module.css';

export default function Home() {

  return (
    <section>
      <div className="text-center">
        <div className={["text-3xl", styles.headerTitle].join(" ")}>VOD</div>
      </div>
    </section>
  );
}
