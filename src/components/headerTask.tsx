interface PropsListHeader {
  tasksCounter: number
  checkedTasksCounter: number
}

export function HeaderTask({checkedTasksCounter, tasksCounter}: PropsListHeader){
  return(
    <div className='flex justify-between'>
      <div className='flex gap-2 items-center'>
        <p className='text-blue text-sm font-bold'>Tarefas criadas</p>
        <span className='py-0.5 text-gray-200 px-2 font-bold text-xs bg-gray-400 rounded-full'>{tasksCounter}</span>
      </div>
      <div className='flex gap-2 items-center'>
        <p className='text-purple text-sm font-bold'>Concluídas</p>
        <span className='py-0.5 text-gray-200 px-2 font-bold text-xs bg-gray-400 rounded-full'>
          {tasksCounter === 0 ? tasksCounter : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </div>
  </div>

  )
}