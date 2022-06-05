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
             <div className="flex">YangaModelManagement <img className="h-6 w-6" src={yangabg} alt="" /></div>
             <div>
              <MenuIcon onClick={showMenu} className = " h-6 w-6 cursor-pointer md:hidden"/>
                          
                    <div className=" hidden md:flex " ><Link to='/' className="underline">Menu</Link></div>
                  
                </div>
                < Menu showMenu={showMenu} active = {active} />
                </nav>
          </header>
          
        
    );                              

}

export default Header;