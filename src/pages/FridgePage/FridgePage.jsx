import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";

const FridgePage = () => {
  return (
    <div>
      <Header />
      <section className={styles.body}>
        <article className={styles.information}>
          <div className={styles.titleAndImage}>
            <img
              className={styles.image}
              src="../images/холодильник.png"
              alt="fridge"
              width="250"
              height="250"
            />
            <div className={styles.titleAndPrice}>
              <h2 className={styles.title}>Haer CEF535ASD</h2>
              <p className={styles.price}>Цена: 40 000 рублей</p>
              <h3 className={styles.descriptionTitle}>Описание</h3>
              <p className={styles.description}>
                Двухкамерный холодильник CEF535ASD объемом 346 литров.
                Преимущества модели: технология охлаждения морозильной и
                холодильной камеры No Frost, электронная система управления,
                яркая LED подсветка, складная полка и перенавешиваемые двери.
              </p>
            </div>
          </div>
          <div className={styles.optionsWrapper}>
            <h3 className={styles.optionsTitle}>Характеристики:</h3>
            <ul className={styles.options}>
              <li className={styles.option}>Энергопотребление: 360 кВтч/год</li>
              <li className={styles.option}>
                Мощность замораживания: 12 кг / сутки
              </li>
              <li className={styles.option}>
                Мин. температура морозильный камеры / НТО: -24 температуры
              </li>
              <li className={styles.option}>Уровень шума 39 дБ</li>

              <li className={styles.option}>Общий полезный объем 346 л</li>
              <li className={styles.option}>
                Полезный объем морозильной камеры / НТО : 105 л
              </li>
              <li className={styles.option}>Хладагент R600a</li>
              <li className={styles.option}>
                Полезный объем холодильной камеры 241 л
              </li>
              <li className={styles.option}>Количество камер 2</li>
              <li className={styles.option}>Количество дверей: 2</li>
              <li className={styles.option}>
                Напряжение питания 220В-240В/50Гц
              </li>
            </ul>
          </div>
        </article>
        <article className={styles.subbar}>
          <h3 className={styles.subbarTitle}>Рейтинг</h3>
          <div className={styles.imageWrapper}>
            <p className={styles.rating}>4.0</p>
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

export default FridgePage;
