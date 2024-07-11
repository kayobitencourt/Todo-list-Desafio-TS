import { PlusCircle,} from 'lucide-react';
import { TaskItem } from './components/taskItem';
import { Empty } from './components/empty';
import { HeaderTask } from './components/headerTask';
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function App(){
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask(event: FormEvent) {
    event.preventDefault()
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    setInputValue(event.target.value)
    event.target.setCustomValidity('')
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }


  return (
    <div className='md:text-[87.5%]'>
      <header className="bg-gray-700 flex items-center justify-center py-20">
        <img src="logo.svg" alt="" />
      </header>
      <div className='max-w-3xl w-full px-3 mx-auto mt-[-29px]'>
        <div className='space-y-16'>
          <div>
            <form className='flex gap-2' onSubmit={handleAddTask}>
              <input 
                type="text"
                value={inputValue}
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid} 
                className="p-4 text-gray-100 border border-gray-700 bg-gray-500 flex-1 placeholder:text-gray-300 rounded-lg outline-none focus:border-purple-dark" 
                placeholder="Adicione uma nova tarefa"
                required 
              />
              <button
                className='flex items-center gap-2 p-4 justify-center rounded-lg bg-blue-dark font-bold text-sm text-gray-100 hover:bg-blue transition' 
                type="submit">
                  Criar
                  <PlusCircle className='size-4' />
              </button>
            </form>
          </div>
          <HeaderTask 
            tasksCounter={tasks.length} 
            checkedTasksCounter={checkedTasksCounter}
          />
        </div>

        <main className='flex flex-col items-center pt-6'>
          {tasks.length > 0 ? (
            <div className='w-full'>
             {tasks.map(task => (
              <div className='mb-3' key={task.id}>
                <TaskItem 
                  data={task} 
                  removeTask={handleRemoveTask} 
                  toogleTaskStatus={handleToggleTask}        
                />
              </div>
             ))}
            </div>
          ) : (
            <Empty/>
          )}
        </main>
      </div>
    </div>
  )
}