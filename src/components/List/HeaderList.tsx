export function HeaderList(){
  return(
    <div className='flex justify-between text-sm mb-6 '>
      <div className="flex gap-2 items-center">
        <p className="text-blue font-bold">Tarefas criadas</p> 
        <span className="py-[2px] px-2 bg-gray-400 rounded-full flex gap-[10px] items-center text-xs text-gray-200 font-bold">5</span>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-purple font-bold">Concluídas</p>
        <span className="py-[2px] px-2 bg-gray-400 rounded-full flex gap-[10px] items-center text-xs font-bold text-gray-200">1 de 5</span>
      </div>
    </div>
  )
}