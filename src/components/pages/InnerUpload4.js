import { useState } from "react";
import { useEffect } from "react";


const InnerUpload4 = ({imageeee, setImageeee}) => {
    const [preview, setPreview] = useState();
    
      const fileHandler = (event) => { 
           const file = event.target.files[0]
    
           if (file && file.type.substr(0,5) === 'image') {
               setImageeee(file)
           }
           else {
               setImageeee(null)
            }
      }
       useEffect(() => {
         
        if (imageeee) {
          const reader = new FileReader()
          reader.onloadend = () => {
           setPreview(reader.result)
          }
          reader.readAsDataURL(imageeee);
        } 
        else {
             setPreview(null)
        }
    
       }, [imageeee]);

    return ( <>  {preview ? (<img onClick={() => {setImageeee(null)}} className ="border border-dashed object-cover border-black h-[275px] w-3/4 md:w-1/4" src = {preview} alt = 'preview'/>) : ( <label className="border border-dashed border-black h-[275px] w-3/4 md:w-1/4">
    <div>
    <span className="p-3">#Full Length</span>
    <input required  className="hidden"  accept="image/*" type="file" name="pic" id="pic" onChange={fileHandler}/>
    </div> 
  </label>  )} </>);
}
 
export default InnerUpload4;

