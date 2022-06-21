import Footer from "../Footer";
import Header from "../Header";


const Contact = () => {
    return (
        <div className="bg-[rgb(248,219,203)] min-h-screen w-full">
        <Header />
         <h1 className="uppercase text-4xl text-center mt-10"> Contact </h1>
         <hr className="border-1 border-black mt-4"/>
         <section className="flex flex-col space-y-10 justify-center mt-10 items-center uppercase pb-[125px]">
             <div>
                 <p className="text-center">Mail</p>
                 <a href="mailto:info@yangamodels.com" className="text-center font-semibold"> info@yangamodels.com</a>
             </div>
             <div>
             <p className="text-center ">Phone</p>
                 <p className="text-center font-semibold"> +2348137071908</p>
             </div>
             <div>
             <p className="text-center ">Follow us on</p>
                 <p href="/" className="text-center font-semibold"> Instagram</p>
                 <p href="/" className="text-center font-semibold"> twitter</p>
                 <p href="/" className="text-center font-semibold"> facebook</p>
             </div>
             <div>
                 <p className="text-center ">Message us on</p>
             <p href="/" className="text-center font-semibold">whatsapp</p >
             </div>
         </section>
         <Footer />
         </div>
      );
}
 
export default Contact;