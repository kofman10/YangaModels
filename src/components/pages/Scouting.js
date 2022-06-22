import Header from "../Header";
import Form from "./Form";

const Scouting = () => {
    return (
        <div className="bg-[#F8DBCB] h-full  w-full">
            <Header />
       <h1 className="ml-5 text-[22px] font-semibold font-fraunces mt-3 mb-4 uppercase ">Become a yangamodel </h1>
       <p className="mx-5 mb-5  tracking-widest leading-relaxed">There is a story behind every face at Yanga Models.
Do you have a story to tell? Please complete all the sections below and we will get in contact with you
if we believe that you have the right characteristics to become a Yanga Model.  </p>

<p  className="ml-5 mb-5 font-semibold">INFO</p >
       <Form />
        </div>
      );
}
 
export default Scouting;