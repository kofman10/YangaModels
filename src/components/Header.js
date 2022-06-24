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
  <nav className="flex justify-between md:items-center md:mr-5">
             <a href ='/' className ="ml-3 relative mt-1"><img className="h-10 w-32" src={yangalogopng} alt="logo" /></a>
             <div>
              <MenuIcon onClick={showMenu} className = " h-6 w-6 cursor-pointer md:hidden mt-3 mr-3"/>
                          
                 <ul className="hidden md:flex md:space-x-5">
                    <li><a href='/Women'>Women</a></li>
                    <li><a href='/Men'>Men</a></li>
                    <li><a href='/Scouting'>Become a Model</a></li>
                    <li><a href= '/About'>About us</a></li>
                    <li><a href='/Contact'>Contact</a></li>
                 </ul>
                  
                </div>
                < Menu showMenu={showMenu} active = {active} />
                </nav>
          </header>
          
        
    );                              

}

export default Header;