import { ButtonCreate } from './components/ButtonCreate';
import { Header } from './components/Header';
import { InputText } from './components/InputText';
import { Empty } from './components/List/Empty';
import { HeaderList } from './components/List/HeaderList';
import { Task } from './components/List/Task';

export function App(){
  return (
    <>
      <Header/>
      <div className='h-screen'>
        <div className='flex flex-col mx-auto max-w-[46rem] px-3'>
          <form action="" className='flex gap-2 mt-[-1.68rem]'>
            <InputText/>
            <ButtonCreate/>
          </form>
          <main className='pt-16 space-y-3'>
            <HeaderList/>
            <Empty/>
            <Task/>
            <Task/>
            <Task/>
          </main>
        </div>
      </div>
    </>
  )
}