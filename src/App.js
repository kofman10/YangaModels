import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Men from "./components/pages/Men";
import Scouting from "./components/pages/Scouting";
import Women from "./components/pages/Women";
import Photos from "./components/pages/Photos";




function App() {
  return (
     <div>
       <Routes> 
         <Route path = '/' element = {<Homepage/>} />
         <Route path="/Women"   element = {<Women />}/>
          
         <Route path="/Men" element = {<Men />} />
         
         <Route path="/Scouting" element = {<Scouting />} />
        
         <Route path="/About" element = {<About/>} />

         <Route path="/Photos" element = {<Photos/>} />

         <Route path="/Contact" element = {<Contact />} />
       
        </Routes>
     </div>
  );
}


export default App;
