import styles from './styles.module.css'
import Clipboard from '../../assets/Clipboard.svg'

export function NoTasks(){
  return (
    <div className={styles.container}>
      <img alt="Tarefas" src={Clipboard}/>
      <strong className={styles.title}>Você ainda não tem tarefas cadastradas</strong>
      <p className={styles.subtitle}>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}