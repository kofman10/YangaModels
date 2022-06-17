// import React, { useEffect, useState } from "react";
// // import ModelManager from "../../services/ModelManager";
// // import { collection ,getDocs } from "firebase/firestore";
// import { storage } from "../../firebase--Config";
// // import { ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uuid"
// import {uploadString} from "firebase/storage";

// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


// // function UploadImage () {

// //     // const [imageUpload , setImageUpload ] = useState(null)
// //     // const uploader = () => {
// //     //     if(imageUpload == null ) return;
// //     //     const imageRef = ref(storage , `modelImages/${imageUpload.name}jkj`);
// //     //     uploadString( imageRef , imageUpload).then (()=>{
// //     //         console.log(imageUpload.name)
// //     //         alert("image uploaded");
// //     //     })

// //     // }
// //     // onChange={ (event) => {setImageUpload(event.target.files[0]);}}

// //     return (
// //         <div>
// //             <input type="file" />
// //             <button color="black" type= "button"> upload image </button>
// //         </div>

// //     );


// // }

// // export default UploadImage;

// function UploadImage() {
//     const [image, setImage] = useState(null);
//     const [url, setUrl] = useState(null);
  
//     const handleImageChange = (e) => {
//       if (e.target.files[0]) {
//         setImage(e.target.files[0]);
//       }
//     };
  
//     const handleSubmit = () => {
//         console.log("called" + image.name )
//       const imageRef = ref(storage, `images/${image.name}`);
//       uploadBytes(imageRef, image)
//         .then(() => {
//           getDownloadURL(imageRef)
//             .then((url) => {
//               setUrl(url);
//             })
//             .catch((error) => {
//               console.log(error.message, "error getting the image url");
//             });
//           setImage(null);
//         })
//         .catch((error) => {
//           console.log(error.message);
//         });
//     };
  
//     return (
//       <div className="App">
//         {/* <Avatar src={url} sx={{ width: 150, height: 150 }} /> */}
//         {url}
//         <input type="file" onChange={handleImageChange} />
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     );
//   }
  
//   export default UploadImage;