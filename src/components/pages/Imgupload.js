import { useState } from "react";
import { useEffect } from "react";

const Imgupload = () => {

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


    return ( 
        <div className="flex flex-col space-y-3 mx-5 mt-2">
          {preview ? (<img className="border border-dashed border-black h-[275px] w-3/4" src = {preview} alt = 'preview'/>) : ( <label className="border border-dashed border-black h-[275px] w-3/4">
          <div className="">
          <span className="p-3">#Photo 1</span>
          <input  className="hidden"  accept="image/*" type="file" name="picture" id="picture" onChange={fileHandler}/>
          </div> 
        </label>  )}
       
        <label className="border border-dashed border-black h-[275px] w-3/4">
          <span className="p-3">#Photo 2</span>
          <input  className="hidden"  accept="image/*" type="file" name="picture" id="picture"/>
        </label>
        <label className="border border-dashed border-black h-[275px] w-3/4">
          <span className="p-3">#Photo 3</span>
          <input  className="hidden"  accept="image/*" type="file" name="picture" id="picture"/>
        </label>
        <label className="border border-dashed border-black h-[275px] w-3/4">
          <span className="p-3">#Photo 4</span>
          <input  className="hidden"  accept="image/*" type="file" name="picture" id="picture"/>
        </label>
       </div>
     );
}
 
export default Imgupload;