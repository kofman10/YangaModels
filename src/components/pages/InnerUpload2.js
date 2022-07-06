import { useState } from "react";
import { useEffect } from "react";


const InnerUpload2 = ({imagee, setImagee}) => {
    const [preview, setPreview] = useState();
     
      const fileHandler = (event) => { 
           const file = event.target.files[0]
    
           if (file && file.type.substr(0,5) === 'image') {
               setImagee(file)
           }
           else {
               setImagee (null)
            }
           
      }
       useEffect(() => {
        
        if (imagee) {
          const reader = new FileReader()
          reader.onloadend = () => {
           setPreview(reader.result)
          }
          reader.readAsDataURL(imagee);
          
        } 
        else {
             setPreview(null)
        }
       }, [imagee]);

    return ( <>  {preview ? (<img onClick={() => {setImagee(null)}} className ="border border-dashed object-cover border-black h-[275px] w-3/4 md:w-1/4" src = {preview} alt = 'preview'/>) : ( <label className="border border-dashed border-black h-[275px] w-3/4 md:w-1/4">
    <div>
    <span className="p-3">#Profile</span>
    <input required  className="hidden"  accept="image/*" type="file" name="pic" id="pic" onChange={fileHandler}/>
    </div> 
  </label>  )} </>);
}
 
export default InnerUpload2;

