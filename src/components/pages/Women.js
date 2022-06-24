
import React, { useEffect, useState } from "react";
import { collection ,getDocs } from "firebase/firestore";
import { db } from "../../firebase--Config";
import Homepage from "../Homepage";

const Women = () => {

    return(
        <Homepage />
    )
    
}



export default Women;




























// const [models , setModels] = useState([])
//     const ModelsCollectionRef = collection(db, "women");

//     useEffect(() => {
//         const getModels = async ()=> {
//             const data = await getDocs(ModelsCollectionRef);
//             console.log(data)
//             setModels( data.docs.map((doc) => ({ ...doc.data()})));
//         }
        
//         getModels();
//       }, [])
//     return <div className="modelList"> {models.map(                                                                    
        
//         (model)=>{
//             return (
//                 <div>
//                     {" "}
//                     {/* Lists all the female models ===> create a table for the values ===> each value(e.g firstname) is a table data */}
//                     firstname : {model.firstname}<br></br>
//                     lastname: {model.lastname}<br></br>
//                     email : {model.email}<br></br>
//                     mobileNumber: {model.mobileNumber}<br></br>
//                     address : {model.address}<br></br>
//                     city : {model.city}<br></br>
//                     instagram: {model.instagram}<br></br>
//                     talent : {model.talent}<br></br>
//                     sex : {model.sex}<br></br>
//                     height : {model.height}<br></br>
//                     weight : {model.weight}<br></br>
//                     waist : {model.waist}<br></br>
//                     bust : {model.bust}<br></br>
//                     hips : {model.hips}<br></br>
//                     eyeColor : {model.eyeColor}<br></br>
//                     shoeSize : {model.shoeSize}<br></br>
//                     dressSize : {model.dressSize}<br></br>

//                 </div>
//             )
//         }

//     )} </div>;