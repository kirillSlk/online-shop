import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderRegAuth from "../../components/HeaderRegAuth/HeaderRegAuth";
import styles from "./styles.module.scss";

const Auth = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderRegAuth />
      <section className={styles.registration}>
        <h1 className={styles.title}>Авторизация</h1>
        <input
          className={styles.email}
          type="text"
          placeholder="Введите ваш email..."
        />
        <input
          className={styles.password}
          type="text"
          placeholder="Введите ваш пароль..."
        />
        <article className={styles.text}>
          <p className={styles.registr}>
            Нет аккаунта?{" "}
            <Link className={styles.link} to="/registration">
              Регистрация
            </Link>
          </p>
          <input className={styles.submit} type="submit" value="Войти" />
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Auth;
