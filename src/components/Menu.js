import { XIcon } from '@heroicons/react/outline';
import React from 'react';
const Menu = ({showMenu,active}) => {
  return ( 
           
              <div className={active ? 'fixed transition animate-slide-in  uppercase bg-[#F8DBCB] backdrop-blur-lg md:hidden' : 'hidden'}>
                  <div className='flex justify-end'> <XIcon onClick={showMenu} className='cursor-pointer w-6 h-6 mt-2 mr-5'/> </div> 
                  <ul className='flex-col flex items-center space-y-8 p-8 h-screen w-screen text-4xl mt-16'> 
                    <li><a href='/Women'>women</a></li>
                    <li><a href='/Men'>men</a></li>
                    <li><a href='/Scouting'>scouting</a></li>
                    <li><a href= '/About'>About us</a></li>
                    <li><a href='/Contact'>Contact</a></li>
                    </ul>  
                  
                </div>
            
            
  );
};

export default Menu;