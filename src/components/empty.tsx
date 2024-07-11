import clipboard from '../assets/clipboard.svg'

export function Empty(){
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='h-4 border-t border-gray-400 rounded-lg w-full' />
      <div className='flex flex-col items-center pt-16 gap-4'>
        <img src={clipboard} alt="Lista vazia icone" />
        <div className='text-gray-300'>
          <h2 className='font-bold'>Você ainda não tem tarefas cadastradas</h2>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  )
}