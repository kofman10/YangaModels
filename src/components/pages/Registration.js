import { useState } from "react";
import ModelManager from "../../services/ModelManager";
import Header from "../Header";


const Registration = () => {

  const [ id , setModelId ] = useState("")
    const [ firstname , setFirstname ] = useState("")
    const [ lastname , setlastname ] = useState("")
    const [ email , setEmail ] = useState("")
    const [ mobileNumber , setMobileNumber ] = useState("")
    const [ address , setAddress ] = useState("")
    const [ city , setCity ] = useState("")
    const [ instagram , setInstagram ] = useState("")
    const [ Talent , setTalent ] = useState("")
    const [ sex , setSex ] = useState("")
    const [message, setMessage] = useState({ error: false, msg: "" });


    
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (firstname === "" || lastname === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newModel = {
      id,
     firstname,
     lastname,
     email,
     mobileNumber,
     address,
     city,
     instagram,
     Talent,
     sex
    };
    console.log(newModel);

    try {
      if (id !== undefined && id !== "") {
        await ModelManager.updateModel(id, newModel);
        setModelId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await ModelManager.addModels(newModel);
        setMessage({ error: false, msg: "New Model added successfully!" });
      }
    } catch (err) { 
      setMessage({ error: true, msg: err.message });
    }

   
    setFirstname("");
    setlastname("");
    setEmail("");
    setMobileNumber("");
    setAddress("");
    setCity("");
    setInstagram("");
    setTalent("");
    setSex("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ModelManager.getModel(id);
      console.log("the record is :", docSnap.data());
      setFirstname(docSnap.data().firstname);
      setlastname(docSnap.data().lastname);
      setEmail(docSnap.data().email);
      setMobileNumber(docSnap.data().mobileNumber);
      setAddress(docSnap.data().address);
      setCity(docSnap.data().city);
      setInstagram(docSnap.data().instagram);
      setTalent(docSnap.data().Talent);
      setSex(docSnap.data().sex);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

    
    return (

      
        <div className="bg-[#F8DBCB] h-screen w-full">
            <Header />
       <h1>Become a yangamodel </h1>
       <p>There is a story behind every face at Yanga Models.
Do you have a story to tell? Please complete all the sections below and we will get in contact with you
if we believe a that you have the right characteristics to become a Yanga Model.  </p>

<span>INFO</span>
         <form action="" onClick={handleSubmit()} >
             <div className="flex flex-col justify-center gap-3 mx-5 "> 
             <input name="firstname" placeholder="FIRSTNAME" type="text" value={firstname} className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             <input name="lastname" placeholder="LASTNAME" type="text" value={lastname} className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             
             {/* <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
    <input type="date"
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" data-mdb-toggle="datepicker" />
    <label for="floatingInput" class="text-gray-700">Select a date</label>
  </div> */}
             <input name="email" placeholder="EMAIL" type="email" value={email} className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             <input name="Mobile Number" placeholder="MOBILE NUMBER" type="number" value={mobileNumber} className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             <input name="address" placeholder="ADDRESS" type="text"  value={address} className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             <input name="city" placeholder="CITY" type='text' value={city}  className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             <input name="Instagram" placeholder="INSTAGRAM" type="text" value={instagram}  className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             <input name="Talent/Hobbies" placeholder="TALENT/HOBBIES" type="text" value={Talent}  className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>

                  </div>
           <div className="flex items-center ml-5 mt-5"> 
               <span className="mr-5">SEX :</span>
               <span >FEMALE</span>
               <input className="mr-2 ml-1 h-4 w-4" type="radio" name="sex" value={sex}  id="female-radio" />
               <span>MALE</span>
               <input className="ml-1 h-4 w-4" type="radio" name="sex" value={sex}  id="male-radio" />
           </div>
             {/* <span className="mt-10">MEASUREMEN</span>
             <div className="">
             </div> */}
             <input type="submit" value="submit" />
             <button color="blue"> submit</button>
         </form>
        </div>
      );
}
 
export default Registration;