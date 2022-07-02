import { useForm } from "react-hook-form";
import Footer from "../Footer";
import InnerUpload1 from "./InnerUpload1"
import InnerUpload2 from "./InnerUpload2"
import InnerUpload3 from "./InnerUpload3"
import InnerUpload4 from "./InnerUpload4"
import { db } from "../../firebase-config";
import { storage } from "../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { useState } from "react"

const Form = () => {
    const [image, setImage] = useState();
    const [imagee, setImagee] = useState();
    const [imageee, setImageee] = useState();
    const [imageeee, setImageeee] = useState();
    const [progress, setProgress] = useState();
 const [message, setMessage] = useState('');

  const { register, watch, handleSubmit, formState: { errors,  }, reset} = useForm();
   
  const sex = watch('sex')

  const onSubmit = async (data) => {
       const name =new Date().getTime + image.name;
       const storageRef = ref(storage, image.name);
       const uploadTask = uploadBytesResumable(storageRef, image)

       uploadTask.on('state_changed', (snapshot) => {
        const progress =(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        switch(snapshot.state) {
          case 'paused':
          console.log('upload is paused');
          break;
          case 'running':
            console.log('upload is running');
            break;
            default:
              break;
        }
       }, (error) => {
        console.log(error)
       }, 
       () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUserData((prev) => ({...prev,img: downloadURL}))
        })
       }
       );

       await addDoc(collection(db, 'applicants'),{
        ...userData, 
        timestamp: serverTimestamp()
       })     

     console.log(data);
     setMessage('Thank you, your application has been successfully submitted')

     reset(userData.firstName = '', 
     userData.lastName = '',
     userData.phone = '',
     userData.email = '',
     userData.address = '',
     userData.city = '',
     userData.dateofbirth  = '',
     userData.instagram = '',
     userData.talent = '',
     userData.height = '',
     userData.mheight = '',
     userData.weight = '',
     userData.mweight = '',
     userData.waist = '',
     userData.dressSize = '',
     userData.eyeColour = '',
     userData.shoeSize = '',
     userData.inseam = '',
     userData.suitSize = '',
     userData.hips = '',
     userData.bust = ''
     )

     setImage(null);
     setImagee(null);
     setImageee(null);
     setImageeee(null);
     console.log('image: ', image);
  }
   
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    dateofbirth: '',
    instagram: '',
    talent: '',
    height: '',
    mheight: '',
    weight:'',
    mweight:'',
    bust: '',
    waist: '',
    mwaist: '',
    hips: '',
    dressSize: '',
    eyeColour: '',
    meyeColour: '',
    shoeSize: '',
    mshoeSize: '',
    chest: '',
    suitSize: '',
    inseam: '',

  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({...userData, [name]: value});
  };

    return (   
      <> 
    <form  onSubmit = {handleSubmit(onSubmit)} className = 'md:w-3/4'>
    <div className="flex flex-col justify-center  mx-5 md:grid md:grid-cols-2 md:gap-5  md:mt-5 md:mb-5"> 
    <input required   name="firstName" placeholder="FIRSTNAME" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" value = {userData.firstName} onChange = { postUserData}/>

    <input  required name="lastName" placeholder="LASTNAME" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" value = {userData.lastName} onChange = { postUserData}/>
    <input  required name="dateofbirth" placeholder="DATE OF BIRTH" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" value = {userData.dateofbirth} onChange = { postUserData}/>
    <input  {...register("email", { required: true, pattern:{value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/} })} name="email" placeholder="EMAIL" type="email" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" value = {userData.email} onChange = { postUserData}/><div className="lg:hidden">{errors.email && <span className="text-red-800">please enter a valid email</span>}
</div>
    <input  required name="phone" placeholder="MOBILE NUMBER" type='' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" value = {userData.phone} onChange = { postUserData}/>
    <input  required name="address" placeholder="ADDRESS" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" value = {userData.address} onChange = { postUserData}/>
    <input  required name="city" placeholder="CITY" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" value ={userData.city} onChange = {postUserData}/>
    <input  required name="instagram" placeholder="INSTAGRAM" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" value = {userData.instagram} onChange = { postUserData}/>
    <input  required name="talent" placeholder="TALENT/HOBBIES" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" value = {userData.talent} onChange = { postUserData}/>
    
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
      { sex === 'female' && (  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 w-full md:w-3/4 mt-5 mb-5">
    <input  required name="height" placeholder="HEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" value = {userData.height}   onChange = { postUserData}/>
    <input  required name="weight" placeholder="WEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5 md:mr-0" value = {userData.weight} onChange = { postUserData}/>
    <input  required name="bust" placeholder="BUST" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5 md:ml-0" value = {userData.bust} onChange = { postUserData}/>
    <input  required name="waist" placeholder="WAIST" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" value = {userData.waist} onChange = { postUserData}/>
    <input  required name="hips" placeholder="HIPS" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" value = {userData.hips} onChange = { postUserData}/>
    <input  required name="dressSize" placeholder="DRESS SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5 md:mr-0" value = {userData.dressSize} onChange = { postUserData}/>
    <input  required name="eyeColour" placeholder="EYE COLOUR" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5 md:ml-0" value = {userData.eyeColour} onChange = { postUserData}/>
    <input  required name="shoeSize" placeholder="SHOE SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" value = {userData.shoeSize} onChange = { postUserData}/>
     </div>
) }
   
    </div>
   
   <div>
    {sex === 'male' && ( <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 w-full md:w-3/4 mt-5 mb-5">
    <input  required name="height" placeholder="HEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" value = {userData.mheight} onChange = { postUserData}/>
    <input  required name="weight" placeholder="WEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5 md:mr-0" value = {userData.mweight} onChange = { postUserData}/>
    <input  required name="chest" placeholder="CHEST" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5 md:ml-0" value = {userData.chest} onChange = { postUserData}/>
    <input  required name="waist" placeholder="WAIST" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" value = {userData.mwaist} onChange = { postUserData}/>
    <input  required name="suitSize" placeholder="SUIT SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" value = {userData.suitSize} onChange = { postUserData}/>
    <input  required name="inseam" placeholder="INSEAM" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5 md:mr-0" value = {userData.inseam} onChange = { postUserData}/>
    <input  required name="eyeColour" placeholder="EYE COLOUR" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5 md:ml-0" value = {userData.meyeColour} onChange = { postUserData}/>
    <input  required name="shoeSize" placeholder="SHOE SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" value = {userData.mshoeSize} onChange = { postUserData}/>
     </div>)}

  
   </div>
    
    

     <span className="ml-5 font-semibold">PHOTO & VIDEO SUBMISSION </span>
     <div className="flex flex-col space-y-3 mx-5 mt-2">

      <InnerUpload1 image = {image} setImage = {setImage} />
      <InnerUpload2 imagee = {imagee} setImagee = {setImagee} />
      <InnerUpload3 imageee = {imageee} setImageee = {setImageee} />
      <InnerUpload4 imageeee = {imageeee} setImageeee = {setImageeee} />

       </div>
   <p className="mx-5 mt-5  tracking-wide">We want to know more about you as a person,a funny story  or something most people
dont know about you. Get creative and show us who you are.   [sample vide link]</p>
<input  required name="Instagram" placeholder="UPLOAD VIDEO HERE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mx-5"/>
 <section className=" mt-5  mx-5">
   <span className="font-semibold">TIPS</span>
   <ul className="flex flex-col gap-2  tracking-wide">
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

 <button  type="submit" className="border bg-[#B4917E] uppercase font-bold rounded-md ml-5 py-3 px-5 mt-5"> Submit application</button>
</form>
     <div className="ml-4 mt-5 font-semibold text-green-900 font-fraunces">{message}</div>
<Footer />
</>
 );
}
 
export default Form;