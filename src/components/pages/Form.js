import { useForm } from "react-hook-form";
import Footer from "../Footer";
import Imgupload from "./Imgupload";

const Form = () => {
  const { register, watch, handleSubmit} = useForm();
   
  const sex = watch('sex')

  const onSubmit = (data) => {
     console.log(data)
  }

    return (   
      <> 
    <form  onSubmit = {handleSubmit(onSubmit)}>
    <div className="flex flex-col justify-center space-y-3 mx-5 "> 
    <input  required name="firstname" placeholder="FIRSTNAME" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input  required name="lastname" placeholder="LASTNAME" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input  required name="date of birth" placeholder="DATE OF BIRTH" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input  required name="email" placeholder="EMAIL" type="email" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input  required name="Mobile Number" placeholder="MOBILE NUMBER" type='number' className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input  required name="address" placeholder="ADDRESS" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input  required name="city" placeholder="CITY" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input  required name="Instagram" placeholder="INSTAGRAM" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input  required name="Talent/Hobbies" placeholder="TALENT/HOBBIES" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    
         </div>
  <div className="flex items-center ml-5 mt-5 mb-5"> 
      <span className="mr-5  font-semibold">SEX :</span>
      <span >FEMALE</span>
      <input  required className="mr-2 ml-1 h-4 w-4" value='female' type="radio" name="sex" id="female-radio" {...register("sex", { required: 'sex is required' })} />
      <span>MALE</span>
      <input  required className="ml-1 h-4 w-4" value='male' type="radio" name="sex" id="male-radio" {...register("sex", { required: 'sex is required' })} />
  </div>

    <span className=" ml-5 font-semibold">MEASUREMENT</span>
    <div>
      { sex === 'female' && (  <div className="grid grid-cols-2 gap-2 w-full mt-5 mb-5">
    <input  required name="Height" placeholder="HEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5"/>
    <input  required name="Weight" placeholder="WEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5"/>
    <input  required name="Bust" placeholder="BUST" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5"/>
    <input  required name="Waist" placeholder="WAIST" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5"/>
    <input  required name="Hips" placeholder="HIPS" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5"/>
    <input  required name="Dress Size" placeholder="DRESS SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5"/>
    <input  required name="Eye colour" placeholder="EYE COLOUR" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5"/>
    <input  required name="Shoe Size" placeholder="SHOE SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5"/>
     </div>
) }
   
    </div>
   
   <div>
    {sex === 'male' && ( <div className="grid grid-cols-2 gap-2 w-full mt-5 mb-5">
    <input  required name="Height" placeholder="HEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5"/>
    <input  required name="Weight" placeholder="WEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5"/>
    <input  required name="Chest" placeholder="CHEST" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5"/>
    <input  required name="Waist" placeholder="WAIST" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5"/>
    <input  required name="Suit Size" placeholder="SUIT SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5"/>
    <input  required name="INSEAM" placeholder="INSEAM" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5"/>
    <input  required name="Eye colour" placeholder="EYE COLOUR" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5"/>
    <input  required name="Shoe Size" placeholder="SHOE SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5"/>
     </div>)}

  
   </div>
    
    

     <span className="ml-5 font-semibold">PHOTO & VIDEO SUBMISSION </span>
           <Imgupload />
   <p className="mx-5 mt-5 font-barlow tracking-wide">We want to know more about you as a person,a funny story  or something most people
dont know about you. Get creative and show us who you are.   [sample vide link]</p>
<input  required name="Instagram" placeholder="UPLOAD VIDEO HERE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mx-5"/>
 
 <section className=" mt-5  mx-5">
   <span className="font-semibold">TIPS</span>
   <ul className="flex flex-col gap-2 font-barlow tracking-wide">
   <li>  Ensure that all fields are filled correctly</li>
   <li>While taking polaroids:</li>
   <li>Use natural light(outdoor) no studio lighting or flash photography</li>
   <li>Do not wear makeup and hair should be in its natural state, tied up or pulled back into 
a pony tail</li>
<li>The background should be a plain wall without any distractions(preferably white)</li>
<li>Be yourself; do not be afraid to incorporate your personality or personal style</li>
<li>Do not retouch or edit the images i anyway, blemishes are natural</li>
<li>Avoid flash clothing and earrings, it should be more like a passport photograph than a
fashion shoot.</li>
<li>Be natural, no crazy poses or wild smiles</li>
<li>On no occasion should you upload selfies or nudes</li>
</ul>
 </section>

 <button type="submit" className="border bg-[#B4917E] uppercase font-bold rounded-md ml-5 py-3 px-5 mt-5 mb-10"> Submit application</button>
</form>
<Footer />
</>
 );
}
 
export default Form;