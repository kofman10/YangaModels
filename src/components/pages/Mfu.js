import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "../../firebase--Config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const MultiUpload = () => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);



  const handleChange = (e) => {
    const newImage = e.target.files[0];
    setImages((prevState) => [...prevState, newImage]);
  };

  const handleUpload = (e) => {
    for (let i = 0; i < 4; i++) {
      console.log(images[i].name)
    }
    let no = 0;
    let pictureType = ["Full lenght", "Profile", "Close up", "Waist up"]
    images.map((image) => {
      console.log("called" + image.name)
      const imageRef = ref(storage, `images/${pictureType[no]}/image${no}`);
      no++;
      uploadBytes(imageRef, image)
        .then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              setUrls((prevState) => [...prevState, urls]);
            })
            .catch((error) => {
              console.log(error.message, "error getting the image url");
            });
          //   setImage(null);
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  }


  console.log("images: ", images);
  console.log("urls", urls);
  //   const handleSubmit = () => {

  // };

  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <br />
      <span className="p-3">#Photo 1*</span>
      <input required className="" accept="image/*" type="file" name="pic1" onChange={handleChange} /><br></br>
      <span className="p-3">#Photo 2*</span>
      <input required className="" accept="image/*" type="file" name="pic2" onChange={handleChange} /><br></br>
      <span className="p-3">#Photo 3*</span>
      <input required className="" accept="image/*" type="file" name="pic3" onChange={handleChange} /><br></br>
      <span className="p-3">#Photo 4*</span>
      <input required className="" accept="image/*" type="file" name="pic4" onChange={handleChange} /><br></br>
      {/* <input  required  className="hidden"  accept="image/*" type="file" name="pic" id="pic" onChange={fileHandler}/> */}


      {/* <>  {preview ? (<img onClick={() => {setImage(null)}} className ="border border-dashed object-cover border-black h-[275px] w-3/4" src = {preview} alt = 'preview'/>) : ( <label className="border border-dashed border-black h-[275px] w-3/4">
    <div className="">
    <span className="p-3">#Photo *</span>
    <input  required  className="hidden"  accept="image/*" type="file" name="pic" id="pic" onChange={fileHandler}/>
    </div> 
  </label>  )} </> */}

      <button onClick={handleUpload}>Upload</button>
      <br />
    </div>
  )
}

export default MultiUpload