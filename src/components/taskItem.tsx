import { Trash2 } from "lucide-react"
import { ITask } from "../App"

interface TaskProps {
  data: ITask;
  removeTask: (id: number) => void;
  toogleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

export function TaskItem({data, removeTask, toogleTaskStatus}: TaskProps){

  function handleTaskToggle() {
    toogleTaskStatus({ id: data.id, value: !data.isChecked })
  }

  function handleRemoveTask(){
    removeTask(data.id)
  }

  return (
    <div className='w-full gap-3 p-4 flex rounded-lg bg-gray-500 border border-gray-400 justify-between'>
      <div className="flex gap-3 max-w-2xl">
        <label className='pt-0.5 cursor-pointer min-w-5 min-h-5 relative'>
          <input 
            type="checkbox" 
            className='w-5 h-5' 
            checked={data.isChecked} 
            onChange={handleTaskToggle} 
          />
          <span className="absolute w-full h-full left-0 top-0">
            {data.isChecked}
          </span>
        </label>
        <p className={`text-gray-100 leading-normal break-words ${data.isChecked ? 'italic line-through text-gray-300' : ''}`}>
          {data.text}
        </p>
      </div>
      <div>
        <button title="Deletar Tarefa" onClick={handleRemoveTask}>
          <Trash2 className='size-6 text-gray-300' />
        </button>
      </div>  
    </div>
  )
}
