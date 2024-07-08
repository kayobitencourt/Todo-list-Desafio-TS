import { Header } from './components/Header';
import { InputText } from './components/InputText';

export function App(){
  return (
    <main>
    <Header/>
      <div className='bg-gray-600 h-screen'>
        <div className='max-w-[46rem] mx-auto'>
          <form action="">
            <header className=''>
              <InputText/>
            </header>
          </form>
        </div>
      </div>
    </main>
  )
}