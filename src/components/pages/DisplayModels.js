
import React, { useEffect, useState } from "react";
import ModelManager from "../../services/ModelManager";
import { collection ,getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";


function DisplayModels(){

    const [models , setModels] = useState([])
    const ModelsCollectionRef = collection(db, "models");

    useEffect(() => {
        const getModels = async ()=> {
            const data = await getDocs(ModelsCollectionRef);
            console.log(data)
            setModels( data.docs.map((doc) => ({ ...doc.data()})));
        }
        
        getModels();
      }, [])
    return <div className="modelList"> {models.map(                                                                    
        
        (model)=>{
            return (
                <div>
                    {" "}
                    firstname : {model.firstname}<br></br>
                    lastname: {model.lastname}<br></br>
                    email : {model.email}<br></br>
                    mobileNumber: {model.mobileNumber}<br></br>
                    address : {model.address}<br></br>
                    city : {model.city}<br></br>
                    instagram: {model.instagram}<br></br>
                    talent : {model.talent}<br></br>
                    sex : {model.sex}<br></br>
                </div>
            )
        }


    )} </div>;
}

export default DisplayModels;