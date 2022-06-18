
import React, { useEffect, useState } from "react";
import { collection ,getDocs } from "firebase/firestore";
import { db } from "../../firebase--Config";

const Men = () => {

    const [models , setModels] = useState([])
    const ModelsCollectionRef = collection(db, "men");

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
                    height : {model.height}<br></br>
                    weight : {model.weight}<br></br>
                    waist : {model.waist}<br></br>
                    chest : {model.chest}<br></br>
                    inSeam : {model.inSeam}<br></br>
                    eyeColor : {model.eyeColor}<br></br>
                    shoeSize : {model.shoeSize}<br></br>
                    suitSize : {model.suitSize}<br></br>

                </div>
            )
        }

    )} </div>;
}



export default Men;