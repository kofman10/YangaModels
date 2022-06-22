import { Icon } from '@iconify/react';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import twitterFill from '@iconify/icons-akar-icons/twitter-fill';
import whatsappFill from '@iconify/icons-akar-icons/whatsapp-fill';
import './marquee.css'



const Footer = () => {
    return ( <section className=''>
    <hr className="border-1 border-black w-full mb-4 mt-10"/>

<footer className=" mt-4 pb-5 flex  space-x-8 justify-center ">
   <a href="https://instagram.com/yangamodel?igshid=YmMyMTA2M2Y="><Icon className="h-6 w-6" icon={instagramFill} height="6" /></a> 
   <a href="https://twitter.com/yangamodels?t=vDxIWdX7oCZpFKoj5o8Lzg&s=09"><Icon className="h-6 w-6" icon={twitterFill} height="6" /></a>  
   <a href="https://api.whatsapp.com/send?phone=+2348137071908"><Icon className="h-6 w-6" icon={whatsappFill} height="6" /></a> 
</footer>

<div className='marquee-container'>
        <p className='marquee '>
       © 2022 YANGA MODEL MANAGEMENT. ALL RIGHTS RESERVED.
    
      </p>
         </div>
    </section> )
}
 
export default Footer;