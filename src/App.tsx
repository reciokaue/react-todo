import { useState } from 'react'
import styles from './App.module.css'
import Logo from './assets/Logo.png'
import { NoTasks } from './components/NoTasks'
import { SearchBar } from './components/SearchBar'
import { Task } from './components/Task'
import { TaskHeader } from './components/TaskHeader'

export interface ITask {
  id: number;
  paragraph: string
  checked: boolean
}

function App() {
  const [ tasks, setTasks ] = useState<ITask[]>([])

  function handleAddTask(paragraph: string){
    const newTask = {
      paragraph,
      checked: false,
      id:Math.floor(Math.random() * 1000)
    }

    setTasks([...tasks, newTask])
  }
  function handleRemoveTask(id: number){
    const newTasks = tasks.filter((task) => task.id == id)
    setTasks(newTasks)
  }
  function handleToggleCheck(id: number){
    const newTasks = tasks.map((task: ITask) => {
      if(id == task.id) return {...task, checked: !task.checked}
      else return task
    })
    setTasks(newTasks)
  }

  return (
    <main>
      <header className={styles.heading}>
        <img src={Logo}/>
      </header>
      <section className={styles.section}>
        <SearchBar addTask={handleAddTask}/>
        <TaskHeader/>
        {tasks.length == 0?
          <NoTasks/>
          :
          tasks.map((task) => (
            <Task 
              key={task.id}
              data={task} 
              removeTask={handleRemoveTask}
              toggleTaskStatus={handleToggleCheck}
            />
          ))
        }
      </section>
    </main>
  )
}

export default App
