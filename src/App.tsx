import { useState } from 'react'
import styles from './App.module.css'
import Logo from './assets/Logo.png'
import { NoTasks } from './components/NoTasks'
import { SearchBar } from './components/SearchBar'
import { Task } from './components/Task'
import { TaskHeader } from './components/TaskHeader'
import { Check } from '@phosphor-icons/react'

interface ITask {
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

  return (
    <main>
      <header className={styles.heading}>
        <img src={Logo}/>
      </header>
      <section className={styles.section}>
        <SearchBar/>
        <TaskHeader/>
        <NoTasks/>
        <Task/>
      </section>
    </main>
  )
}

export default App
