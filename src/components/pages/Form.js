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
    const [url, setUrl] = useState();
    const [urll, setUrll] = useState();
    const [urlll, setUrlll] = useState();
    const [urllll, setUrllll] = useState();


    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState('');
  const { register, watch, handleSubmit, formState: { errors  }, reset} = useForm();
   
  const sex = watch('sex')

  const onSubmit = async  (data) => {
       const storageRef = ref(storage, image.name);
       const uploadTask = uploadBytesResumable(storageRef, image)

       uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress) ;
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
           setUrl(downloadURL)
          console.log(url)
        })
       }, 
       ); 

       const storageRe = ref(storage, imagee.name);
       const uploadTas = uploadBytesResumable(storageRe, imagee)

       uploadTas.on('state_changed', (snapshot) => {
       
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
      getDownloadURL(uploadTas.snapshot.ref).then((downloadURL) => {
           setUrll(downloadURL)
          console.log(urll)
        })
       }, 
       );

       const storageR = ref(storage, imageee.name);
       const uploadTa = uploadBytesResumable(storageR, imageee)

       uploadTa.on('state_changed', (snapshot) => {
       
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
      getDownloadURL(uploadTa.snapshot.ref).then((downloadURL) => {
           setUrlll(downloadURL)
          console.log(urlll)
        })
       }, 
       );

       const storag = ref(storage, imageeee.name);
       const uploadT = uploadBytesResumable(storag, imageeee)

       uploadT.on('state_changed', (snapshot) => {
       
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
      getDownloadURL(uploadT.snapshot.ref).then((downloadURL) => {
           setUrllll(downloadURL)
          console.log(urllll)
        })
       }, 
       );


        
       
    addDoc(collection(db, 'applicants'), {
    ...data,
    timestamp: serverTimestamp(),
    img1: url,
    img2: urll,
    img3: urlll,
    img4 : urllll
   })
   

     console.log(data);
     setMessage('Thank you, your application has been successfully submitted')
     
     reset(
     
     )

     setImage(null);
     setImagee(null);
     setImageee(null);
     setImageeee(null);
     
  }
   

 
    return (   
      <> 
    <form  onSubmit = {handleSubmit(onSubmit)} className = 'md:w-3/4'>
    <div className="flex flex-col justify-center  mx-5 md:grid md:grid-cols-2 md:gap-5  md:mt-5 md:mb-5"> 
    <input required   name="firstName" placeholder="FIRSTNAME" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0"  {...register("firstName", { required: true })}/>

    <input  required name="lastName" placeholder="LASTNAME" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" {...register('lastName')} />
    <input  required name="dateofbirth" placeholder="DATE OF BIRTH" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0"{...register('dateofbirth')}  />
    <input  {...register("email", { required: true, pattern:{value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/} })} name="email" placeholder="EMAIL" type="email" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" /><div className="lg:hidden">{errors.email && <span className="text-red-800">please enter a valid email</span>}
</div>
    <input  required name="phone" placeholder="MOBILE NUMBER" type='' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" {...register('phone')}/>
    <input  required name="address" placeholder="ADDRESS" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" {...register('address')} />
    <input  required name="city" placeholder="CITY" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0"{...register('city')}/>
    <input  required name="instagram" placeholder="INSTAGRAM" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" {...register('instagram')} />
    <input  required name="talent" placeholder="TALENT/HOBBIES" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mt-2 md:mt-0" {...register('talent')}/>
    
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
    <input  required name="height" placeholder="HEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" {...register('height')}/>
    <input  required name="weight" placeholder="WEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5 md:mr-0" {...register('weight')}/>
    <input  required name="bust" placeholder="BUST" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5 md:ml-0" {...register('bust')}/>
    <input  required name="waist" placeholder="WAIST" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" {...register('waist')}/>
    <input  required name="hips" placeholder="HIPS" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" {...register('hips')}/>
    <input  required name="dressSize" placeholder="DRESS SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5 md:mr-0" {...register('dressSize')}/>
    <input  required name="eyeColour" placeholder="EYE COLOUR" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5 md:ml-0" {...register('eyeColour')}/>
    <input  required name="shoeSize" placeholder="SHOE SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5"
    {...register('shoeSize')} />
     </div>
) }
   
    </div>
   
   <div>
    {sex === 'male' && ( <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 w-full md:w-3/4 mt-5 mb-5">
    <input  required name="height" placeholder="HEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" {...register('height')}/>
    <input  required name="weight" placeholder="WEIGHT" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5 md:mr-0" {...register('weight')}/>
    <input  required name="chest" placeholder="CHEST" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5 md:ml-0" {...register('chest')}/>
    <input  required name="waist" placeholder="WAIST" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" {...register('waist')}/>
    <input  required name="suitSize" placeholder="SUIT SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5" {...register('suitSize')}/>
    <input  required name="inseam" placeholder="INSEAM" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5 md:mr-0" {...register('inseam')}/>
    <input  required name="eyeColour" placeholder="EYE COLOUR" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5 md:ml-0" {...register('eyeColour')}/>
    <input  required name="shoeSize" placeholder="SHOE SIZE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5" {...register('shoeSize')}/>
     </div>)}

  
   </div>
    
    

     <span className="ml-5 font-semibold">PHOTO & VIDEO SUBMISSION </span>
     <div className="flex flex-col space-y-3 mx-5 mt-2">

      <InnerUpload1 image = {image} setImage = {setImage} props  />
      <InnerUpload2 imagee = {imagee} setImagee = {setImagee} />
      <InnerUpload3 imageee = {imageee} setImageee = {setImageee} />
      <InnerUpload4 imageeee = {imageeee} setImageeee = {setImageeee} />
       </div>
   <p className="mx-5 mt-5  tracking-wide">We want to know more about you as a person,a funny story  or something most people
dont know about you. Get creative and show us who you are.   [sample vide link]</p>
<input  required name="video" placeholder="UPLOAD VIDEO HERE" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mx-5" {...register('video')}/>
 <section className=" mt-5  mx-5">
   <span className="font-semibold">TIPS</span>
   <ul className="flex flex-col gap-2  tracking-wide list-disc list-outside ml-4">
<li>  Ensure that all fields are filled correctly.</li>
<li>While taking polaroids:</li>
<li>Use natural light(outdoor) no studio lighting or flash photography</li>
<li>Do not wear makeup and hair should be in its natural state, tied up or pulled back into 
 a pony tail.</li>
<li>The background should be a plain wall without any distractions(preferably white).</li>
<li>Be yourself; do not be afraid to incorporate your personality or personal style.</li>
<li>Do not retouch or edit the images in anyway, blemishes are natural.</li>
<li>Avoid flashy clothings and earrings, it should be more like a passport photograph than a
fashion shoot.</li>
<li>Be natural, no crazy poses or wild smiles.</li>
<li>On no occasion should you upload selfies or nudes.</li>
<li className="font-bold">click the submit button again when your file upload is 100% till you see a message stating the success of your application.</li>
</ul>
 </section>


 <button  type="submit" className="border bg-[#B4917E] uppercase font-bold rounded-md ml-5 py-3 px-5 mt-5" > Submit application</button>
 <p className="ml-4 mt-3">file upload {progress}%</p>
</form>
     <div className="ml-4 mt-5 font-semibold text-green-900 font-fraunces">{message}</div>
<Footer />
</>
 );
}
 
export default Form;