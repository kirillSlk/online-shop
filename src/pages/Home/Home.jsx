import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";

const dataFridge = [
  {
    id: 0,
    image: "../images/холодильник.png",
    name: "Haier CEF",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/холодильник.png",
    name: "Haier BOB",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/холодильник.png",
    name: "Haier TROMB",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/холодильник.png",
    name: "Haier REF",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/холодильник.png",
    name: "Haier CEF",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/холодильник.png",
    name: "Haier GROB",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/холодильник.png",
    name: "Haier PROB",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/холодильник.png",
    name: "Haier CEF",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/холодильник.png",
    name: "Haier CEF",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/холодильник.png",
    name: "Haier CEF",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/холодильник.png",
    name: "Haier CEF",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/холодильник.png",
    name: "Haier CEF",
    stars: 5,
  },
];

const dataPhone = [
  {
    id: 0,
    image: "../images/phone.jpg",
    name: "Aiphone 12 pro max",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/phone.jpg",
    name: "Galaxy a51",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/phone.jpg",
    name: "Galaxy a51",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/phone.jpg",
    name: "Galaxy a51",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/phone.jpg",
    name: "Galaxy a51",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/phone.jpg",
    name: "Galaxy a51",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/phone.jpg",
    name: "Galaxy a51",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/phone.jpg",
    name: "Galaxy a51",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/phone.jpg",
    name: "Galaxy a51",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/phone.jpg",
    name: "Galaxy a51",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/phone.jpg",
    name: "Galaxy a51",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/phone.jpg",
    name: "Galaxy a51",
    stars: 5,
  },
];

const dataWashing = [
  {
    id: 0,
    image: "../images/washing.jpg",
    name: "Candy Rapid",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/washing.jpg",
    name: "Candy Rapid",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/washing.jpg",
    name: "Candy Rapid",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/washing.jpg",
    name: "Candy Rapid",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/washing.jpg",
    name: "Candy Rapid",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/washing.jpg",
    name: "Candy Rapid",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/washing.jpg",
    name: "Candy Rapid",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/washing.jpg",
    name: "Candy Rapid",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/washing.jpg",
    name: "Candy Rapid",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/washing.jpg",
    name: "Candy Rapid",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/washing.jpg",
    name: "Candy Rapid",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/washing.jpg",
    name: "Candy Rapid",
    stars: 5,
  },
];

const dataLaptops = [
  {
    id: 0,
    image: "../images/laptop.jpg",
    name: "DELL Vostro 5502",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/laptop.jpg",
    name: "DELL Vostro 5502",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/laptop.jpg",
    name: "DELL Vostro 5502",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/laptop.jpg",
    name: "DELL Vostro 5502",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/laptop.jpg",
    name: "DELL Vostro 5502",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/laptop.jpg",
    name: "DELL Vostro 5502",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/laptop.jpg",
    name: "DELL Vostro 5502",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/laptop.jpg",
    name: "DELL Vostro 5502",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/laptop.jpg",
    name: "DELL Vostro 5502",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/laptop.jpg",
    name: "DELL Vostro 5502",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/laptop.jpg",
    name: "DELL Vostro 5502",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/laptop.jpg",
    name: "DELL Vostro 5502",
    stars: 5,
  },
];

const dataComputers = [
  {
    id: 0,
    image: "../images/computer.jpg",
    name: "iRU Home 520B4GE",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/computer.jpg",
    name: "iRU Home 520B4GE",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/computer.jpg",
    name: "iRU Home 520B4GE",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/computer.jpg",
    name: "iRU Home 520B4GE",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/computer.jpg",
    name: "iRU Home 520B4GE",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/computer.jpg",
    name: "iRU Home 520B4GE",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/computer.jpg",
    name: "iRU Home 520B4GE",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/computer.jpg",
    name: "iRU Home 520B4GE",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/computer.jpg",
    name: "iRU Home 520B4GE",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/computer.jpg",
    name: "iRU Home 520B4GE",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/computer.jpg",
    name: "iRU Home 520B4GE",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/computer.jpg",
    name: "iRU Home 520B4GE",
    stars: 5,
  },
];

const dataTablets = [
  {
    id: 0,
    image: "../images/tablet.jpg",
    name: "Apple iPad 2021",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/tablet.jpg",
    name: "Apple iPad 2021",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/tablet.jpg",
    name: "Apple iPad 2021",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/tablet.jpg",
    name: "Apple iPad 2021",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/tablet.jpg",
    name: "Apple iPad 2021",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/tablet.jpg",
    name: "Apple iPad 2021",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/tablet.jpg",
    name: "Apple iPad 2021",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/tablet.jpg",
    name: "Apple iPad 2021",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/tablet.jpg",
    name: "Apple iPad 2021",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/tablet.jpg",
    name: "Apple iPad 2021",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/tablet.jpg",
    name: "Apple iPad 2021",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/tablet.jpg",
    name: "Apple iPad 2021",
    stars: 5,
  },
];

const Home = () => {
  const [tongler, setTongler] = useState("fridge");

  return (
    <div>
      <Header />
      <ul className={styles.navigation}>
        <li
          className={
            tongler === "phone"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("phone")}
        >
          <p className={styles.navigationName}>Телефоны</p>
        </li>
        <li
          className={
            tongler === "fridge"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("fridge")}
        >
          <p className={styles.navigationName}>Холодильники</p>
        </li>
        <li
          className={
            tongler === "washing"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("washing")}
        >
          <p className={styles.navigationName}>Стиральные машины</p>
        </li>
        <li
          className={
            tongler === "laptops"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("laptops")}
        >
          <p className={styles.navigationName}>Ноутбуки</p>
        </li>
        <li
          className={
            tongler === "computers"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("computers")}
        >
          <p className={styles.navigationName}>Компьютеры</p>
        </li>
        <li
          className={
            tongler === "tablets"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("tablets")}
        >
          <p className={styles.navigationName}>Планшеты</p>
        </li>
      </ul>
      <section className={styles.products}>
        {(tongler === "fridge"
          ? dataFridge
          : tongler === "phone"
          ? dataPhone
          : tongler === "washing"
          ? dataWashing
          : tongler === "laptops"
          ? dataLaptops
          : tongler === "computers"
          ? dataComputers
          : tongler === "tablets"
          ? dataTablets
          : ""
        ).map((el) => (
          <Link
            to={
              tongler === "fridge"
                ? "/fridge"
                : tongler === "phone"
                ? "/phone"
                : tongler === "computers"
                ? "/computer"
                : "/"
            }
            className={styles.product}
            key={el.id}
          >
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={el.image}
                alt=""
                width="195"
                height="135"
              />
            </div>
            <div className={styles.cardInformation}>
              <p className={styles.cardTitle}>{el.name}</p>
              <div className={styles.cardCount}>
                <p className={styles.count}>{el.stars}</p>
                <div className={styles.cardImage}>
                  <img
                    src="../images/star-outlined.svg"
                    width="20"
                    height="14"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
      <ul className={styles.pageNavigation}>
        <li className={styles.pageItemNav}>
          <p className={styles.pageItemText}>1</p>
        </li>
        <li className={styles.pageItemNav}>
          <p className={styles.pageItemText}>2</p>
        </li>
        <li className={styles.pageItemNav}>
          <p className={styles.pageItemText}>3</p>
        </li>
        <li className={styles.pageItemPoints}>
          <p className={styles.pageItemText}>...</p>
        </li>
        <li className={styles.pageItemNav}>
          <p className={styles.pageItemText}>7</p>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Home;
