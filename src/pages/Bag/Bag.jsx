import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";

const Bag = () => {
  return (
    <div>
      <Header />
      <section className={styles.bag}>
        <h1 className={styles.title}>Корзина</h1>
        <div className={styles.body}>
          <p className={styles.text}>Пустая</p>
          <img
            className={styles.image}
            src="../images/bag.svg"
            alt="bag"
            width="40"
            height="29"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Bag;
