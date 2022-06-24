import Header from "../Header";
import Form from "./Form";

const Scouting = () => {
    return (
        <div className="bg-[#F8DBCB] h-full  w-full">
            <Header />
       <h1 className="ml-5 text-[22px] font-semibold font-fraunces mt-3 mb-4 uppercase lg:text-3xl">Become a Yanga model </h1>
       <p className="mx-5 mb-5  tracking-widest leading-relaxed">Think Yanga Model is a family you want to be part of?
Kindly complete all the sections below and we will get in contact with you if we believe that you have the right characteristics to part of the family. </p>

<p  className="ml-5 mb-5 font-semibold">INFO</p >
       <Form />
        </div>
      );
}
 
export default Scouting;