import { Icon } from '@iconify/react';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import twitterFill from '@iconify/icons-akar-icons/twitter-fill';
import facebookFill from '@iconify/icons-akar-icons/facebook-fill';
import whatsappFill from '@iconify/icons-akar-icons/whatsapp-fill';
import './marquee.css'



const Footer = () => {
    return ( <section className=''>
    <hr className="border-1 border-black w-full mb-4 mt-10"/>

<footer className=" mt-4 pb-5 flex  space-x-5 justify-center ">
   <a href="/"><Icon className="h-6 w-6" icon={instagramFill} height="6" /></a> 
   <a href="/"><Icon className="h-6 w-6" icon={twitterFill} height="6" /></a>  
   <a href="/"> <Icon className="h-6 w-6" icon={facebookFill} height="6" /></a> 
   <a href="/"><Icon className="h-6 w-6" icon={whatsappFill} height="6" /></a> 
</footer>

<div className='marquee-container'>
        <p className='marquee '>
       © 2022 YANGA MODEL MANAGEMENT. ALL RIGHTS RESERVED.
    
      </p>
         </div>
    </section> )
}
 
export default Footer;