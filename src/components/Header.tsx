import Logo from '../assets/Logo.svg'

export function Header(){
  return (
    <header className="bg-gray-700 py-20 box-border">
      <img className='m-auto' src={Logo} alt="" />
    </header>
  )
}