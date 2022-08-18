import React from "react";
import styles from "./Style-components/Task.module.css";

export default function Task(props) {
  return (
    <>
      {/* 5. получаем свойство объекта и распыляем объет в jsx переменные */}
      <div className={styles.main}>
        <span className={styles.fat}>
          № {props.number} {props.xxx.title}
        </span>
        <br />
        <span>Дата: {props.xxx.time}</span>
        <br />
        <span>Дополнительные задачи: {props.xxx.another}</span>

        <div className={styles.deleteDiv}>
          <button
            onClick={() => props.remove(props.xxx)}
            className={styles.deleteBtn}
          >
            Удалить
          </button>
        </div>
        
      </div>
    </>
  );
}
