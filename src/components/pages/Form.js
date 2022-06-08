const Form = () => {
    return (   <form action="" >
    <div className="flex flex-col justify-center gap-3 mx-5 "> 
    <input name="firstname" placeholder="FIRSTNAME" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input name="lastname" placeholder="LASTNAME" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input name="date of birth" placeholder="DATE OF BIRTH" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input name="email" placeholder="EMAIL" type="email" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input name="Mobile Number" placeholder="MOBILE NUMBER" type="number" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input name="address" placeholder="ADDRESS" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input name="city" placeholder="CITY" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input name="Instagram" placeholder="INSTAGRAM" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
    <input name="Talent/Hobbies" placeholder="TALENT/HOBBIES" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>

         </div>
  <div className="flex items-center ml-5 mt-5 mb-5"> 
      <span className="mr-5">SEX :</span>
      <span >FEMALE</span>
      <input className="mr-2 ml-1 h-4 w-4" type="radio" name="sex" id="female-radio" />
      <span>MALE</span>
      <input className="ml-1 h-4 w-4" type="radio" name="sex" id="male-radio" />
  </div>

    <span className=" ml-5">MEASUREMENT</span>

    <div className="grid grid-cols-2 gap-2 w-full mt-5 mb-5">
    <input name="Mobile Number" placeholder="MOBILE NUMBER" type="number" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5"/>
    <input name="address" placeholder="ADDRESS" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5"/>
    <input name="city" placeholder="CITY" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5"/>
    <input name="Instagram" placeholder="INSTAGRAM" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5"/>
    <input name="Mobile Number" placeholder="MOBILE NUMBER" type="number" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5"/>
    <input name="address" placeholder="ADDRESS" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5"/>
    <input name="city" placeholder="CITY" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2 ml-5"/>
    <input name="Instagram" placeholder="INSTAGRAM" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2 mr-5"/>
     </div>

     <span className="ml-5">PHOTO & VIDEO SUBMISSION </span>
   <div className="flex flex-col gap-2 mx-5 mt-2">
    <div className="border border-black h-[250px] w-3/4"></div>
   </div>
</form> );
}
 
export default Form;