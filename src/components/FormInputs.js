import React from "react";
import style from "./Style-components/FormInputs.module.css";


// принимаем функцию в качестве пропса(деструктуризация)
export default function FormInputs({create}) {
  
// 6.создаем хуки для получения данных из инпутов - управляемый компонент
  const [title, setTitle] = React.useState('');
  const [date, setDate] = React.useState('');
  const [optional, setOptional] = React.useState('');

  // 7. в функции предотвращаем дефолтное поведение браузера,получаем данные из инпутов,создаем новый объект
  function addNewTask(e) {
    e.preventDefault();

    // 8.создаем новый объект из инпутов
    const newTask = {
      title,
      date,
      optional,
    }
    // console.log(newTask);
    
    //10. в функцию полученную из пропсов закидываем новый созданный объект
    create(newTask)

    // обнуляем инпуты:
    setTitle('')
    setDate('')
    setOptional('')
  }





  return (
    <div className={style.divInput}>
      <h2 style={{ textAlign: "center" }}>Добавить задачу:</h2>
      <div className={style.inputs}>

        <form>
{/*6. Управляемый компонент с 2хсторонним связыванием с хуком useState для получения данных из инпутов*/}
{/* value получает состояние, onChange получает функцию изменения состояния */}
          <input
            className={style.taskInput}
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            type="text"
            placeholder="Название темы"
          />
          <input
            value={date}
            className={style.taskInput}
            onChange={(e)=>setDate(e.target.value)}
            type="text"
            placeholder="Дата"
          />
          <input
            value={optional}
            className={style.taskInput}
            onChange={(e)=>setOptional(e.target.value)}
            type="text"
            placeholder="Дополнительные задачи"
          />
          <button onClick={addNewTask} className={style.inputBtn} type="submit">
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
}
