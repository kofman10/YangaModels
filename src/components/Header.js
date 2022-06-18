import Menu from "./Menu";
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline'
import {useState} from 'react'
import yangabg from './assets/yangabg.png'

const Header = () => {

  const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

    return (
          <header> 
  <nav className="flex justify-between ">
             <a href ='/' className ="flex mt-2 ml-4 font-fraunces uppercase font-semibold text-sm md:text-xl italic items-center">Yanga ModelManagement <img className="h-8 w-8 inline-block" src={yangabg} alt="" /></a>
             <div>
              <MenuIcon onClick={showMenu} className = " h-6 w-6 cursor-pointer md:hidden mt-2 mr-4"/>
                          
                    <div className="hidden md:flex " ><Link to='/' className="underline">Menu</Link></div>
                  
                </div>
                < Menu showMenu={showMenu} active = {active} />
                </nav>
          </header>
          
        
    );                              

}

export default Header;