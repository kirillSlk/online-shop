import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";

const PhonePage = () => {
  return (
    <div>
      <Header />
      <section className={styles.body}>
        <article className={styles.information}>
          <div className={styles.titleAndImage}>
            <img
              className={styles.image}
              src="../images/phone.jpg"
              alt="phone"
              width="250"
              height="250"
            />
            <div className={styles.titleAndPrice}>
              <h2 className={styles.title}>Iphone 12 pro max</h2>
              <p className={styles.price}>Цена: 100 000 рублей</p>
              <h3 className={styles.descriptionTitle}>Описание</h3>
              <p className={styles.description}>
                Apple iPhone 12 Pro Max выглядит привлекательно несмотря на то,
                что производитель оставил достаточно большой вырез в верхней
                части экрана. Зато рамки у него тонкие, что сразу бросается в
                глаза. Задняя стеклянная панель дарит приятные тактильные
                ощущения, однако прямые углы корпуса немного врезаются в ладонь.
              </p>
            </div>
          </div>
          <div className={styles.optionsWrapper}>
            <h3 className={styles.optionsTitle}>Характеристики:</h3>
            <ul className={styles.options}>
              <li className={styles.option}>Оперативная память: 5гб</li>
              <li className={styles.option}>Камера: 12мп</li>
              <li className={styles.option}>Процессор: пентиум 5</li>
              <li className={styles.option}>Объем памяти: 256гб</li>

              <li className={styles.option}>Оперативная память: 5гб</li>
              <li className={styles.option}>Камера: 12мп</li>
              <li className={styles.option}>Процессор: пентиум 5</li>
              <li className={styles.option}>Объем памяти: 256гб</li>
              <li className={styles.option}>Оперативная память: 5гб</li>
              <li className={styles.option}>Камера: 12мп</li>
              <li className={styles.option}>Процессор: пентиум 5</li>
              <li className={styles.option}>Объем памяти: 256гб</li>
            </ul>
          </div>
        </article>
        <article className={styles.subbar}>
          <h3 className={styles.subbarTitle}>Рейтинг</h3>
          <div className={styles.imageWrapper}>
            <p className={styles.rating}>4.5</p>
          </div>
          <div className={styles.addBag}>
            <p className={styles.addBagText}>Добавить в корзину</p>
            <div className={styles.addBagImage}>
              <img src="../images/bag.svg" alt="bag" width="76" height="48" />
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default PhonePage;
