import Header from "../Header";


const Scouting = () => {
    return (
        <div className="bg-[#F8DBCB] h-screen w-full">
            <Header />
       <h1>Become a yangamodel </h1>
       <p>There is a story behind every face at Yanga Models.
Do you have a story to tell? Please complete all the sections below and we will get in contact with you
if we believe that you have the right characteristics to become a Yanga Model.  </p>

<span>INFO</span>
         <form action="" >
             <div className="flex flex-col justify-center gap-3 mx-5 "> 
             <input name="firstname" placeholder="FIRSTNAME" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             <input name="firstname" placeholder="LASTNAME" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             
             <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
    <input type="date"
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" data-mdb-toggle="datepicker" />
    <label for="floatingInput" class="text-gray-700">Select a date</label>
  </div>
             <input name="email" placeholder="EMAIL" type="email" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             <input name="Mobile Number" placeholder="MOBILE NUMBER" type="number" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             <input name="address" placeholder="ADDRESS" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             <input name="city" placeholder="CITY" type='text' className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             <input name="Instagram" placeholder="INSTAGRAM" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>
             <input name="Talent/Hobbies" placeholder="TALENT/HOBBIES" type="text" className="placeholder-black bg-inherit border border-black focus:outline-none p-2"/>

                  </div>
           <div className="flex items-center ml-5 mt-5"> 
               <span className="mr-5">SEX :</span>
               <span >FEMALE</span>
               <input className="mr-2 ml-1 h-4 w-4" type="radio" name="sex" id="female-radio" />
               <span>MALE</span>
               <input className="ml-1 h-4 w-4" type="radio" name="sex" id="male-radio" />
           </div>
             <span className="mt-10">MEASUREMEN</span>
             <div className="">
             </div>
         </form>
        </div>
      );
}
 
export default Scouting;