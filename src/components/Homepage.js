import Header from "./Header";
import { Icon } from '@iconify/react';
import instagramFill from '@iconify/icons-akar-icons/instagram-fill';
import twitterFill from '@iconify/icons-akar-icons/twitter-fill';
import facebookFill from '@iconify/icons-akar-icons/facebook-fill';
import whatsappFill from '@iconify/icons-akar-icons/whatsapp-fill';
import Marquee from "./Marquee";



const Homepage = () => {
    return ( 
        <section className="bg-[#F8DBCB] min-h-screen w-full">
  <Header />
 <main className="mx-4"> 
<h1 className="text-center font-fraunces font-bold text-3xl mt-10 mb-10 tracking-wider bg-black text-[#F8DBCB]">WE ARE COMING SOON</h1>
<p className="text-center text-xl uppercase font-medium">We are working hard to give you the best experience</p>
<p className=" mt-7 pb-5 font-barlow tracking-widest leading-relaxed">Yanga Model Management is a modelling agency located in Lagos, Southwest Nigeria specializing in the management and marketing of homegrown fashion, runway and commercial models with the aim of nurturing long term and lucrative careers for our models by supporting and giving them the space to grow.</p>
<p className=" pb-10 font-barlow tracking-widest leading-relaxed">We aim at providing expertly scouted professionally trained models who will shape the legacy of the ever evolving advertising and fashion industry for years to come while fostering the careers and maximizing the potential of every model that joins the Yanga family</p>
<a href ="/Scouting" className=" underline italic">Become a YangaModel</a>
</main>
<hr className="border-1 border-black w-full mb-4 mt-10"/>

<footer className=" mt-4 pb-5 flex  space-x-5 justify-center ">
   <a href="/"><Icon className="h-6 w-6" icon={instagramFill} height="6" /></a> 
   <a href="/"><Icon className="h-6 w-6" icon={twitterFill} height="6" /></a>  
   <a href="/"> <Icon className="h-6 w-6" icon={facebookFill} height="6" /></a> 
   <a href="/"><Icon className="h-6 w-6" icon={whatsappFill} height="6" /></a> 
</footer>
    <Marquee />
        </section>
       
        
     );
}
 
export default Homepage;