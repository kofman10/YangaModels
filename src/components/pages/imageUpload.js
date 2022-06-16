import React, { useEffect, useState } from "react";
// import ModelManager from "../../services/ModelManager";
// import { collection ,getDocs } from "firebase/firestore";
import { storage } from "../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid"
import {uploadString} from "firebase/storage";




function UploadImage () {

    // const [imageUpload , setImageUpload ] = useState(null)
    // const uploader = () => {
    //     if(imageUpload == null ) return;
    //     const imageRef = ref(storage , `modelImages/${imageUpload.name}jkj`);
    //     uploadString( imageRef , imageUpload).then (()=>{
    //         console.log(imageUpload.name)
    //         alert("image uploaded");
    //     })

    // }
    // onChange={ (event) => {setImageUpload(event.target.files[0]);}}

    return (
        <div>
            <input type="file" />
            <button  type= "button"> upload image </button>
        </div>

    );


}



export default UploadImage;