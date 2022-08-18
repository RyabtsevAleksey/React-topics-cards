
import './App.css';
import AllTasks from './components/AllTasks';
import React from 'react';
import FormInputs from './components/FormInputs';


function App() {

  // 1. У нас есть карточки в массиве объектов
  const [tasks, setTasks] = React.useState([
    { id: 1, title: "Create React App", time: "01.08.2022", another: "import, export files" },
    { id: 2, title: "React JSX", time: "02.08.2022", another: "React theory" },
    { id: 3, title: "Components", time: "03.08.2022", another: "class, functional" },
    { id: 4, title: "CSS Modules", time: "04.08.2022", another: "import css styles" },
    { id: 5, title: "React Props", time: "23.08.2022", another: "State" },
    { id: 6, title: "React Hooks", time: "23.08.2022", another: "Component Life cycle" },
    { id: 7, title: "Hooks: useState, Effect", time: "23.08.2022", another: "Component Life cycle" },
    { id: 8, title: "Условный рендеринг", time: "23.08.2022", another: "Операторы && ||" },
    { id: 9, title: "Передача данных между компонентами", time: "01.09.2022", another: "props" },
  ]);

  // 9.Создаем функцию добавления в массив новый объект, используя внутри функцию хука useState 
  // и поступивший новый объект из инпутов
  function createTask(newTask) {
    setTasks([...tasks, newTask])
  }

// 11 функция удаления карточки (удалит карточку переданную аргументом)
  function removeTask(task) {
    setTasks(tasks.filter((t)=> t.id !== task.id))
  }



  // 2. компонент AllTasks получит в пропсы переменную состояния из хука usestate 
  return (
    <div className="App">
      {/* передаем функцию в качестве пропса в форму инпутов */}
      <FormInputs create={createTask} />
      
      {/*12. условная отрисовка - тернарный оператор. если массив таскс не равен нулю, то отрисуем их
      в противном случае отрисовать новый текст */}
      {tasks.length !== 0 ? 
      <AllTasks tasks={tasks} theme = 'Список тем по REACT' remove={removeTask} />
      : <h1 style={{textAlign:'center', fontSize: '60px', }}>Задания не найдены</h1>
      }
    </div>
  );
}

export default App;
