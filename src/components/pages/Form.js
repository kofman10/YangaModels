import { useForm } from "react-hook-form";
import modelyang from '../assets/modelyang.jpg'
import Imgupload from "./Imgupload";
import { collection ,addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import React, { useEffect, useState } from "react";




const Form = () => {

  const [ id , setModelId ] = useState("")
  const [ firstname , setFirstname ] = useState("")
  const [ lastname , setlastname ] = useState("")
  const [ dateOfBirth , setDateOfBirth ] = useState("")
  const [ email , setEmail ] = useState("")
  const [ mobileNumber , setMobileNumber ] = useState(0)
  const [ address , setAddress ] = useState("")
  const [ city , setCity ] = useState("")
  const [ instagram , setInstagram ] = useState("")
  const [ Talent , setTalent ] = useState("")
  const [ sex , setSex ] = useState("")
  const [ height , setHeight ] = useState("")
  const [ weight , setWeight ] = useState("")
  const [ waist , setWaist ] = useState("")
  const [ chest , setChest ] = useState("")
  const [ bust , setBust ] = useState("")
  const [ eyeColor , setEyeColor ] = useState("")
  const [ shoeSize , setShoeSize ] = useState("")
  const [ inSeam , setInSeam ] = useState("")
  const [ hips , setHips ] = useState("")
  const [ dressSize , setDressSize ] = useState("")
  const [ suitSize , setSuitSize ] = useState("")
  const [message, setMessage] = useState({ error: false, msg: "" });
  
  
  const newModel = { id,firstname,lastname,dateOfBirth,email,mobileNumber,address,city,instagram,Talent,sex,height,weight,waist,bust,chest,eyeColor,shoeSize,suitSize,dressSize,inSeam,hips };
  const maleModel = { id,firstname,lastname,dateOfBirth,email,mobileNumber,address,city,instagram,Talent,sex,height,weight,waist,chest,eyeColor,shoeSize,suitSize,inSeam };
  const femaleModel = { id,firstname,lastname,dateOfBirth,email,mobileNumber,address,city,instagram,Talent,sex,height,weight,waist,bust,eyeColor,shoeSize,dressSize,hips };
  // console.log(newModel);
  
  const ModelsCollectionRef = collection(db, "models");
  const MenCollectionRef = collection(db, "men");
  const WomenCollectionRef = collection(db, "women");
  
  const createNewModel = async () => {

    if( sex === "male"){
      
console.log("male called ")
    }else {
      console.log("female called")
    }

  }


  const createModel = async () => {
    // setModelId("");
    
    await addDoc(ModelsCollectionRef,newModel)
    console.log(newModel);
  }

  const createMale = async () => {
    // setModelId("");
    
    await addDoc(MenCollectionRef,newModel)
    console.log(newModel);
  }

  const createFemale = async () => {
    // setModelId("");
    
    await addDoc(WomenCollectionRef,newModel)
    console.log(newModel);
  }


  const { register, watch} = useForm();
   
  const sexValue = watch('sex')


    return (   
      
    <form  action="">
    <div className="flex flex-col justify-center space-y-3 mx-5 "> 
    <input required name="firstname" placeholder="FIRSTNAME" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2" onChange={ (event) => {setFirstname(event.target.value);}} />
    <input required name="lastname" placeholder="LASTNAME" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2" onChange={ (event) => {setlastname(event.target.value);}} />
    <input required name="date of birth" placeholder="DATE OF BIRTH" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2" onChange={ (event) => {setDateOfBirth(event.target.value);}} />
    <input required name="email" placeholder="EMAIL" type="email" className="placeholder-black bg-inherit border border-black focus:outline-none p-2" onChange={ (event) => {setEmail(event.target.value);}} />
    <input required name="Mobile Number" placeholder="MOBILE NUMBER" type='number' className="placeholder-black bg-inherit border border-black focus:outline-none p-2" onChange={ (event) => {setMobileNumber(event.target.value);}} />
    <input required name="address" placeholder="ADDRESS" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2" onChange={ (event) => {setAddress(event.target.value);}} />
    <input required name="city" placeholder="CITY" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2" onChange={ (event) => {setCity(event.target.value);}} />
    <input required name="Instagram" placeholder="INSTAGRAM" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2" onChange={ (event) => {setInstagram(event.target.value);}} />
    <input required name="Talent/Hobbies" placeholder="TALENT/HOBBIES" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2" onChange={ (event) => {setTalent(event.target.value);}} />
    
         </div>
  <div className="flex items-center ml-5 mt-5 mb-5"> 
      <span className="mr-5">SEX :</span>
      <span >FEMALE</span>
      <input required className="mr-2 ml-1 h-4 w-4" value='female' type="radio" name="sex" id="female-radio" {...register("sex", { required: 'sex is required' })} onChange={ (event) => {setSex(event.target.value);}}  />
      <span>MALE</span>
      <input required className="ml-1 h-4 w-4" value='male' type="radio" name="sex" id="male-radio" {...register("sex", { required: 'sex is required' })}  onChange={ (event) => {setSex(event.target.value);}} />
  </div>

    <span className=" ml-5">MEASUREMENT</span>
    <div>
      { sexValue === 'female' && (  <div className="grid grid-cols-2 gap-2 w-full mt-5 mb-5">
    <input required name="Height" placeholder="HEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" onChange={ (event) => {setHeight(event.target.value);}} />
    <input required name="Weight" placeholder="WEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" onChange={ (event) => {setWeight(event.target.value);}} />
    <input required name="Bust" placeholder="BUST" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" onChange={ (event) => {setBust(event.target.value);}} />
    <input required name="Waist" placeholder="WAIST" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" onChange={ (event) => {setWaist(event.target.value);}} />
    <input required name="Hips" placeholder="HIPS" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" onChange={ (event) => {setHips(event.target.value);}} />
    <input required name="Dress Size" placeholder="DRESS SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" onChange={ (event) => {setDressSize(event.target.value);}} />
    <input required name="Eye colour" placeholder="EYE COLOUR" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" onChange={ (event) => {setEyeColor(event.target.value);}} />
    <input required name="Shoe Size" placeholder="SHOE SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" onChange={ (event) => {setShoeSize(event.target.value);}} />
     </div>
) }
   
    </div>
   
   <div>
    {sexValue === 'male' && ( <div className="grid grid-cols-2 gap-2 w-full mt-5 mb-5">
    <input required name="Height" placeholder="HEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" onChange={ (event) => {setHeight(event.target.value);}} />
    <input required name="Weight" placeholder="WEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" onChange={ (event) => {setWeight(event.target.value);}} />
    <input required name="Chest" placeholder="CHEST" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" onChange={ (event) => {setChest(event.target.value);}} />
    <input required name="Waist" placeholder="WAIST" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" onChange={ (event) => {setWaist(event.target.value);}} />
    <input required name="Suit Size" placeholder="SUIT SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" onChange={ (event) => {setSuitSize(event.target.value);}} />
    <input required name="INSEAM" placeholder="INSEAM" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" onChange={ (event) => {setInSeam(event.target.value);}} />
    <input required name="Eye colour" placeholder="EYE COLOUR" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" onChange={ (event) => {setEyeColor(event.target.value);}} />
    <input required name="Shoe Size" placeholder="SHOE SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" onChange={ (event) => {setShoeSize(event.target.value);}} />
     </div>)}

  
   </div>
    
    

     <span className="ml-5">PHOTO & VIDEO SUBMISSION </span>
           <Imgupload />
   <p className="mx-5 mt-5">We want to know more about you as a porson,a funny story  or something most people
dont know about you. Get creative and show us who you are.   [sample vide link]</p>
<input name="Instagram" placeholder="UPLOAD VIDEO HERE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mx-5" />
 
 <section className=" mt-5  mx-5">
   <span>TIPS</span>
   <ul className="flex flex-col gap-2">
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

 <button onClick={createNewModel} type="submit" className="border bg-[#B4917E] uppercase font-bold rounded-md ml-5 py-3 px-5 mt-5 mb-10"> Submit application</button>
</form> );
}
 
export default Form;