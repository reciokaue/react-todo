import { Trash } from '@phosphor-icons/react'
import styles from './styles.module.css'

interface Props {
  // data: ITask
  // removeTask: (id: number) => void
  // toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Task({ }: Props){
  return (
    <div className={styles.container}>
       <div>
        <label htmlFor="checkbox" onClick={() => {}}>
          <input readOnly type="checkbox" checked={false} />
          <span className={`${styles.checkbox} `}>
            {/* {data.isChecked && <Check size={12} />} */}
          </span>

          <p className={`${styles.paragraph}`}>
            {/* {data.text} */}
          </p>
        </label>
      </div>
      <button onClick={() => {}} className={styles.trash}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}