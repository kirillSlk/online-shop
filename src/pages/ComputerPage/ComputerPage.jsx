import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";

const ComputerPage = () => {
  return (
    <div>
      <Header />
      <section className={styles.body}>
        <article className={styles.information}>
          <div className={styles.titleAndImage}>
            <img
              className={styles.image}
              src="../images/computer.jpg"
              alt="computer"
              width="250"
              height="250"
            />
            <div className={styles.titleAndPrice}>
              <h2 className={styles.title}>ПК MSI MEG Trident X</h2>
              <p className={styles.price}>Цена: 80 000 рублей</p>
              <h3 className={styles.descriptionTitle}>Описание</h3>
              <p className={styles.description}>
                Серия MEG включает в себя флагманские продукты, которые
                превосходят по своим возможностям нынешний уровень технологий.
                Реализованные в них инновации обеспечивают повышенную
                эффективность и функциональность, которые дополняются широкими
                возможностями по настройке и персонализации – это придется по
                вкусу энтузиастам, которые желают иметь в своем распоряжении
                только самое лучшее! Созданные для самых увлеченных любителей
                компьютерных игр, которые желают играть только по своим
                правилам, компьютеры серии Trident отличаются мощной
                конфигурацией и оригинальным дизайном с гибко настраиваемой
                подсветкой. Игровые компьютеры серии Trident – мощное оружие для
                жарких виртуальных сражений.
              </p>
            </div>
          </div>
          <div className={styles.optionsWrapper}>
            <h3 className={styles.optionsTitle}>Характеристики:</h3>
            <ul className={styles.options}>
              <li className={styles.option}>
                Модель процессора Core i7-11700K
              </li>
              <li className={styles.option}>Количество ядер процессора 8</li>
              <li className={styles.option}>
                {" "}
                Мин. температура морозильный камеры / НТО: -24 температуры
              </li>
              <li className={styles.option}>
                {" "}
                Количество энергоэффективных ядер нет
              </li>
              <li className={styles.option}>Количество потоков 16</li>
              <li className={styles.option}>Частота процессора 3.6 ГГц</li>
              <li className={styles.option}>
                Автоматическоеувеличениеастоты 5 ГГц
              </li>
              <li className={styles.option}>
                Модель дискретной видеокарты GeForce RTX 3080
              </li>
              <li className={styles.option}>
                Проводной интерфейс (Ethernet LAN) LAN 2.5 Гбит/с
              </li>
              <li className={styles.option}>
                Аудиоразъемы на корпусе 3.5 мм jack
              </li>
              <li className={styles.option}>Объем видеопамяти 10 ГБ</li>
              <li className={styles.option}>Основной цвет: чёрный</li>
            </ul>
          </div>
        </article>
        <article className={styles.subbar}>
          <h3 className={styles.subbarTitle}>Рейтинг</h3>
          <div className={styles.imageWrapper}>
            <p className={styles.rating}>3.5</p>
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

export default ComputerPage;
