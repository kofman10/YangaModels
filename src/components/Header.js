import Menu from "./Menu";
import { MenuIcon } from '@heroicons/react/outline'
import {useState} from 'react'
import yangalogopng from './assets/yanga logo png.png'


const Header = () => {

  const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

    return (
          <header> 
  <nav className="flex justify-between md:items-center mr-4">
             <a href ='/' className ="ml-3 relative mt-1"><img className="h-10 w-32" src={yangalogopng} alt="logo" /></a>
             <div>
              <MenuIcon onClick={showMenu} className = " h-6 w-6 cursor-pointer md:hidden mt-3"/>
                        <ul className="hidden md:flex flex-row md:space-x-3 md:mr-4 uppercase items-center">
                        <li className="hover:border border-black rounded-full hover:bg-black hover:text-[#F8DBCB] hover:p-2 transition ease-in duration-300"><a href='/Women'>Women</a></li>
                    <li  className="hover:border border-black rounded-full hover:bg-black hover:text-[#F8DBCB] hover:p-2 transition ease-in duration-300"><a href='/Men'>Men</a></li>
                    <li  className="hover:border border-black rounded-full hover:bg-black hover:text-[#F8DBCB] hover:p-2 transition ease-in duration-300"><a href='/Scouting'>Become a Model</a></li>
                    <li  className="hover:border border-black rounded-full hover:bg-black hover:text-[#F8DBCB] hover:p-2 transition ease-in duration-300"><a href= '/About'>About us</a></li>
                    <li  className="hover:border border-black rounded-full hover:bg-black hover:text-[#F8DBCB] hover:p-2 transition ease-in duration-300"><a href='/Contact'>Contact</a></li>
                        </ul>  
                 
                  
                </div>
                < Menu showMenu={showMenu} active = {active} />
                </nav>
          </header>
          
        
    );                              

}

export default Header;