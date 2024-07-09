import { PlusCircle } from '@phosphor-icons/react'

export function ButtonCreate(){
  return(
    <button className='text-gray-100 text-sm font-bold max-h-[3.25rem] gap-2 flex rounded-lg items-center p-4 bg-blue-dark'>
      Criar <PlusCircle color='#F2F2F2'size={20}/>
    </button>
  )
}