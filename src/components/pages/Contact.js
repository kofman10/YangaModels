import Footer from "../Footer";
import Header from "../Header";


const Contact = () => {
    return (
        <div className="bg-[rgb(248,219,203)] min-h-screen w-full">
        <Header />
         <h1 className="uppercase text-4xl text-center mt-10"> Contact </h1>
         <hr className="border-1 border-black mt-4"/>
         <section className="flex flex-col space-y-10 justify-center pt-16 items-center uppercase pb-[125px] text-xl">
             <div>
                 <p className="text-center">Mail</p>
                 <a href="mailto:info@yangamodels.com" className="text-center font-semibold"> info@yangamodels.com</a>
             </div>
             <div>
             <p className="text-center ">Phone</p>
                 <p className="text-center font-semibold"> +2348137071908</p>
             </div>
             <div className="flex flex-col ">
             <p className="text-center ">Follow us on</p>
                 <a href="https://instagram.com/yangamodel?igshid=YmMyMTA2M2Y=" className="text-center font-semibold"> Instagram</a>
                 <a href="https://twitter.com/yangamodels?t=vDxIWdX7oCZpFKoj5o8Lzg&s=09" className="text-center font-semibold"> twitter</a>
             </div>
             <div className="flex flex-col">
                 <p className="text-center ">Message us on</p>
             <a href="https://api.whatsapp.com/send?phone=+2348137071908" className="text-center font-semibold">whatsapp</a >
             </div>
         </section>
         <Footer />
         </div>
      );
}
 
export default Contact;