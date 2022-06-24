
import React, { useEffect, useState } from "react";
import { collection ,getDocs } from "firebase/firestore";
import { storage } from "../../firebase--Config";
import Homepage from "../Homepage";

const Men = () => {

//     var storageRef = storage().ref("images");
//     // return (<Homepage />)
    
//     useEffect(() => {
//         const fetchImages = async () => {
    
//         let result = await storageRef.child('female/Close up').listAll();
//             let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());
        
//             return Promise.all(urlPromises);
    
//         }
        
//         const loadImages = async () => {
//             const urls = await fetchImages();
//             setFiles(urls);
//         }
//         loadImages();
//         }, []);
}



export default Men;