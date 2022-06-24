import { useState } from "react";
import { useEffect } from "react";

const InnerUpload = () => {

    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    
      const fileHandler = (event) => { 
           const file = event.target.files[0]
    
           if (file && file.type.substr(0,5) === 'image') {
               setImage(file)
           }
           else {
               setImage (null)
            }
      }
            
       useEffect(() => {
         
        if (image) {
          const reader = new FileReader()
          reader.onloadend = () => {
           setPreview(reader.result)
          }
          reader.readAsDataURL(image);
        } 
        else {
             setPreview(null)
        }
    
       }, [image]);

    return ( <>  {preview ? (<img onClick={() => {setImage(null)}} className ="border border-dashed object-cover border-black h-[275px] w-3/4" src = {preview} alt = 'preview'/>) : ( <label className="border border-dashed border-black h-[275px] w-3/4">
    <div required >
    <span className="p-3">#Photo *</span>
    <input  required  className="hidden"  accept="image/*" type="file" name="pic" id="pic" onChange={fileHandler}/>
    </div> 
  </label>  )} </>);
}
 
export default InnerUpload;