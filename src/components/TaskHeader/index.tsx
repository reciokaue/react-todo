import { ITask } from '../../App'
import styles from './styles.module.css'

interface Props {
  tasks: ITask[]
}

export function TaskHeader({tasks}: Props){
  const checkedTasks = tasks.reduce((accumulator, task) => accumulator + (task.checked? 1:0), 0)

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2 className={styles.created}>Tarefas criadas</h2>
        <span className={styles.badge}>{tasks.length}</span>
      </div>
      <div className={styles.title}>
        <h2 className={styles.concluded}>Concluídas</h2>
        <span className={styles.badge}>
          {checkedTasks}
          {tasks.length > 0 && ` de ${tasks.length}`}
        </span>
      </div>
    </div>
  )
}