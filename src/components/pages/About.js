import Footer from "../Footer";
import Header from "../Header";

const About = () => {
  return (
    <div className="bg-[#F8DBCB] w-full min-h-screen ">
      <Header />
      <h1 className="mt-10 text-4xl text-center font-fraunces"> ABOUT US</h1>
      <hr className="border-1 border-black mt-4" />
      <p className=" mt-7 pb-5 font-barlow tracking-widest leading-relaxed mx-5">
        Yanga Model Management is a modelling agency located in Lagos, Southwest
        Nigeria specializing in the management and marketing of homegrown
        fashion, runway and commercial models with the aim of nurturing long
        term and lucrative careers for our models by supporting and giving them
        the space to grow.
      </p>
      <p className=" pb-[125px] font-barlow tracking-widest leading-relaxed mx-5">
        We aim at providing expertly scouted professionally trained models who
        will shape the legacy of the ever evolving advertising and fashion
        industry for years to come while fostering the careers and maximizing
        the potential of every model that joins the Yanga family
      </p>

      <Footer />
    </div>
  );
};

export default About;
