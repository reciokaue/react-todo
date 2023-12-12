import styles from './styles.module.css'

// interface TaskHeaderProps {

// }

export function TaskHeader(){
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2 className={styles.created}>Concluídas</h2>
        <span className={styles.badge}>0</span>
      </div>
      <div className={styles.title}>
        <h2 className={styles.concluded}>Concluídas</h2>
        <span className={styles.badge}>0</span>
      </div>
    </div>
  )
}