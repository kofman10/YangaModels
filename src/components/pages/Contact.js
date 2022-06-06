import Header from "../Header";


const Contact = () => {
    return (
        <div className="bg-[rgb(248,219,203)] h-screen w-full">
        <Header />
         <h1 className="uppercase "> Contact </h1>
         <hr className="border-1 border-black"/>
         <section className="flex flex-col gap-10 justify-center my-20 items-center">
             <div>
                 <div className="text-center">Mail</div>
                 <div className="text-center"> info@yangamodels.com</div>
             </div>
             <div>
             <div className="text-center">Phone</div>
                 <div className="text-center"> +2348145896745</div>
             </div>
             <div>
             <div className="text-center">Follow us on</div>
                 <div className="text-center"> Instagram</div>
                 <div className="text-center"> twitter</div>
                 <div className="text-center"> facebook</div>
             </div>
             <div>
             <div className="text-center">whatsapp</div>
             </div>
         </section>
         </div>
      );
}
 
export default Contact;