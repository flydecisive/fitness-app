/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./progress-form.module.css";
import Button from "../button/button";
import Input from "../input/input";
import { useEffect, useRef } from "react";

const values = [];

function ProgressForm({ show, setShow, setProgress }) {
  const modalRefProgress = useRef();

  const inputHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    values[id] = value;
  };

  //   Скрытие модального окна по клику вне области окна
  const closeModalOnClickOut = (e) => {
    if (
      show &&
      e.target &&
      modalRefProgress.current &&
      !modalRefProgress.current.contains(e.target)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("mousedown", closeModalOnClickOut);

    return () => {
      document.body.removeEventListener("mousedown", closeModalOnClickOut);
    };
  }, [show]);

  if (show) {
    return (
      <div ref={modalRefProgress} className={styles.wrapper}>
        <h2 className={styles.heading}>Мой прогресс</h2>
        <form className={styles.form}>
          <label htmlFor="#1">Сколько раз вы сделали наклоны вперед?</label>
          <Input
            type={"text"}
            placeholder={"Введите значение"}
            id="1"
            onInput={(e) => inputHandler(e)}            
          />
        </form>
        <form className={styles.form}>
          <label htmlFor="#2">Сколько раз вы сделали наклоны назад?</label>
          <Input
            type={"text"}
            placeholder={"Введите значение"}
            id="2"
            onInput={(e) => inputHandler(e)}
          />
        </form>
        <form className={styles.form}>
          <label htmlFor="#3">
            Сколько раз вы сделали поднятие ног, согнутых в коленях?
          </label>
          <Input
            type={"text"}
            placeholder={"Введите значение"}
            id="3"
            onInput={(e) => inputHandler(e)}
          />
        </form>
        <Button
          text={"Отправить"}
          color={"purple"}
          onClick={() => {
            setShow(false);
            setProgress(values);
          }}
        />
      </div>
    );
  }
}

export default ProgressForm;
