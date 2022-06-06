import Header from "../Header";

const About = () => {
    return ( 
        <div className="bg-[#F8DBCB] h-screen w-full "> 
        <Header />
        <h1 className="mt-10 text-4xl text-center"> ABOUT US</h1>
        <hr className="border-1 border-black mt-4"/>
        <p className="mt-10 mx-3">Yanga Model Management is a modelling agency located in Lagos, Southwest Nigeria specializing in the management and marketing of homegrown fashion, runway and commercial models with the aim of nurturing long term and lucrative careers for our models by supporting and giving them the space to grow. Our aim is to be one of the most succesful and respected modelling agencies in Nigeria. Box models prides itselft in scouting raw, unique and talented models. Excellent knowledge of the modelling industry and good understanding of clients enables us to provide and tailored service to our clients.</p>
        <hr className=" border-1 border-black mt-10"/>
         <div className="ml-2  mt-3 pb-5">
             <div> Contact : 08034567890</div>
             <div className="">Email : info@yangamodels.com</div>
         </div>
        </div>
        
     );
}
 
export default About;