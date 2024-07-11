import { PlusCircle,} from 'lucide-react';
import { TaskItem } from './components/taskItem';
import { Empty } from './components/empty';

export function App(){
  return (
    <div className='md:text-[87.5%]'>
      <header className="bg-gray-700 flex items-center justify-center py-20">
        <img src="logo.svg" alt="" />
      </header>
      <div className='max-w-3xl w-full px-3 mx-auto mt-[-29px]'>
        <div className='space-y-16'>
          <div>
            <form className='flex gap-2'>
              <input 
                type="text" 
                className="p-4 text-gray-100 border border-gray-700 bg-gray-500 flex-1 placeholder:text-gray-300 rounded-lg outline-none focus:border-purple-dark" 
                placeholder="Adicione uma nova tarefa" 
              />
              <button className='flex items-center gap-2 p-4 justify-center rounded-lg bg-blue-dark font-bold text-sm text-gray-100 hover:bg-blue transition' type="submit">
                Criar
                <PlusCircle className='size-4' />
              </button>
            </form>
          </div>

          <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
              <p className='text-blue text-sm font-bold'>Tarefas criadas</p>
              <span className='py-0.5 text-gray-200 px-2 font-bold text-xs bg-gray-400 rounded-full'>0</span>
            </div>
            <div className='flex gap-2 items-center'>
              <p className='text-purple text-sm font-bold'>Concluídas</p>
              <span className='py-0.5 text-gray-200 px-2 font-bold text-xs bg-gray-400 rounded-full'>0 de 0</span>
            </div>
          </div>
        </div>
        <main className='flex flex-col items-center pt-6'>
          <TaskItem />
          <Empty  />
        </main>
      </div>
    </div>
  )
}