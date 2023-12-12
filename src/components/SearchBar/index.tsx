import { useState } from 'react'
import styles from './styles.module.css'
import { PlusCircle } from '@phosphor-icons/react'

interface Props {
  addTask: (paragraph: string) => void
}

export function SearchBar({ addTask }: Props){
  const [ text, setText ] = useState("")

  function handleAddTask(){
    if(text != ""){
      addTask(text)
      setText("")
    }
  }

  return (
    <div className={styles.wrapper}>
      <input
        placeholder='Adicione uma nova tarefa'
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleAddTask}
        className={styles.button}
      >
        Criar
        <PlusCircle size={22}/>
      </button>
    </div>
  )
}