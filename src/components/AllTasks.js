import React from "react";
import Task from "./Task";

import styles from "./Style-components/AllTasks.module.css";


// 3. Принимаем в качестве переменной массив с объектами tasks (деструктуризация)
export default function AllTasks({tasks, theme, remove}) {
  return (
    <>

      <h2 style={{textAlign:'center', fontSize:42}}>{theme}</h2>
      <div className={styles.conteiner}>
{/* 4. Так как tasks это массив с объектами мы можем его перебрать циклом и разобрать на свойства */}
        {tasks.map((onetask,index) => (
          <Task number={index+1}  xxx={onetask} key={onetask.id} remove={remove} />
        ))}


      {/* если прокидывать пропсы вручную
      <Task task={{id:1, title:'React routing', time:'20.08.2022', another:'async'}}  />
      <Task task={{id:2, title:'Async', time:'21.08.2022', another:'promise'}}  />
      <Task task={{id:3, title:'Promise', time:'21.08.2022', another:'Fetch'}}  /> */}
      </div>
    </>
  );
}
