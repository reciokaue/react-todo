import { Check, Trash } from '@phosphor-icons/react'
import styles from './styles.module.css'
import { ITask } from '../../App'

interface Props {
  data: ITask
  removeTask: (id: number) => void
  toggleTaskStatus: (id: number) => void
}

export function Task({ data, removeTask, toggleTaskStatus }: Props){
  const checkboxCheckedClassname = data.checked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassname = data.checked
    ? styles['paragraph-checked']
    : ''

  return (
    <div className={styles.container}>
       <div>
        <label htmlFor="checkbox" onClick={() => toggleTaskStatus(data.id)}>
          <input readOnly type="checkbox" checked={false} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.checked && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.paragraph}
          </p>
        </label>
      </div>
      <button onClick={() => removeTask(data.id)} className={styles.trash}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}