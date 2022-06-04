import Menu from "./Menu";
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline'
import {useState} from 'react'


const Header = () => {

  const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

    return (
          <header> 
  <nav className="flex justify-between ">
             <div>YangaModelManagement</div>
             <div>
              <MenuIcon onClick={showMenu} className = "h-6 w-6 cursor-pointer md:hidden"/>
                          
                    <div className=" hidden md:flex " ><Link to='/' className="underline">Menu</Link></div>
                  
                </div>
                < Menu showMenu={showMenu} active = {active}/>
                </nav>
          </header>
          
        
    );                              

}

export default Header;