/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./progress-form.module.css";
import Button from "../button/button";
import Input from "../input/input";
import { useEffect, useRef, useState } from "react";
import PushNotice from "../push-notice/push-notice";

let values = [];

function ProgressForm({
  show,
  setShow,
  setProgress,
  exercisesNames,
  setShowCongrat,
}) {
  const modalRefProgress = useRef();
  const [formItems, setFormItems] = useState([]);
  const [showNotice, setShowNotice] = useState(false);
  const [noticeText, setNoticeText] = useState("");

  const hideNotice = () => {
    setShowNotice(false);
  };

  const toggleNotice = (text) => {
    setNoticeText(text);
    setShowNotice(true);
    setTimeout(hideNotice, 3000);
  };

  useEffect(() => {
    if (exercisesNames) {
      const data = exercisesNames.map((elem) => {
        return elem.slice(0, elem.indexOf("(")).trim().toLowerCase();
      });

      const forms = data.map((elem, index) => {
        return (
          <form className={styles.form} key={index}>
            <label htmlFor={`#${index + 1}`}>
              Сколько раз вы сделали {elem}?
            </label>
            <Input
              type={"text"}
              placeholder={"Введите значение"}
              id={index + 1}
              onInput={(e) => inputHandler(e)}
            />
          </form>
        );
      });

      setFormItems(forms);
    }
  }, [exercisesNames]);

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
      <>
        {showNotice ? (
          <PushNotice text={noticeText} setShowNotice={setShowNotice} />
        ) : (
          ""
        )}
        <div ref={modalRefProgress} className={styles.wrapper}>
          <h2 className={styles.heading}>Мой прогресс</h2>
          {formItems}

          <Button
            text={"Отправить"}
            color={"purple"}
            onClick={() => {
              const data = values.filter(function (el) {
                return el !== "";
              });
              if (data.length === formItems.length) {
                setShow(false);
                setProgress(values);
                values = [];
                setShowCongrat(true);
              } else {
                toggleNotice("Заполните все поля");
              }
            }}
          />
        </div>
      </>
    );
  }
}

export default ProgressForm;
