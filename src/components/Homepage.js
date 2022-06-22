import Footer from "./Footer";
import Header from "./Header";



const Homepage = () => {
    return ( 
        <section className="bg-[#F8DBCB] min-h-screen w-full relative ">
  <Header />
 <main className="mx-4 pb-[125px]"> 
<h1 className="text-center font-fraunces font-bold text-3xl mt-10 mb-10 tracking-wider bg-black text-[#F8DBCB]">WE ARE COMING SOON</h1>
<p className="text-center text-xl font-fraunces uppercase font-medium">We are working hard to give you the best experience</p>
<p className=" mt-7 pb-5 tracking-widest leading-relaxed">Yanga Model Management is a modelling agency located in Lagos, Southwest Nigeria specializing in the management and marketing of homegrown fashion, runway and commercial models with the aim of nurturing long term and lucrative careers for our models by supporting and giving them the space to grow.</p>
<p className=" pb-10 tracking-widest leading-relaxed">We aim at providing expertly scouted professionally trained models who will shape the legacy of the ever evolving advertising and fashion industry for years to come while fostering the careers and maximizing the potential of every model that joins the Yanga family</p>
<a href ="/Scouting" className=" underline italic ">Become a Yanga Model</a>
</main>

< Footer />
        </section>
       
        
     );
}
 
export default Homepage;