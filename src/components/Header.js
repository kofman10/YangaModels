import Menu from "./Menu";
import { Link } from 'react-router-dom';
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
  <nav className="flex justify-between">
             <a href ='/' className ="ml-3 relative mt-1"><img className="h-10 w-32" src={yangalogopng} alt="" /></a>
             <div>
              <MenuIcon onClick={showMenu} className = " h-6 w-6 cursor-pointer md:hidden mt-3 mr-3"/>
                          
                    <div className="hidden md:flex " ><Link to='/' className="underline">Menu</Link></div>
                  
                </div>
                < Menu showMenu={showMenu} active = {active} />
                </nav>
          </header>
          
        
    );                              

}

export default Header;