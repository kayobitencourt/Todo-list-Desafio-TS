import Clipboard from '../../assets/Clipboard.svg'

export function Empty(){
  return(
    <>
      <div className="border-t rounded-lg border-gray-400 flex flex-col items-center gap-4 justify-center pt-16 text-gray-300">
        <img src={Clipboard} alt="" className='w-14'/>
        <div>
          <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </>
  )
}