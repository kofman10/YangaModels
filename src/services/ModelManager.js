

import { doc, setDoc} from "firebase/firestore";
import { db, storage } from "../firebase--Config";
import { ref, uploadBytes } from "firebase/storage";

// const MenCollectionRef = collection(db, "male");
// const WomenCollectionRef = collection(db, "female");


class ModelManager {

  createMale = async (maleModel,fullname) => {

    console.log("male called ")
    await setDoc(doc(db, "male", fullname), maleModel);
    console.log(maleModel);
  }

  createFemale = async (femaleModel,fullname) => {
    console.log("female called " + fullname )
    await setDoc(doc(db, "female", fullname), femaleModel);
    console.log(femaleModel);
  }

  //picture upload
  handleUpload = (fullname, images,sex) => {
    let no = 0;
    let pictureType = ["Full lenght", "Profile", "Close up", "Waist up"]
    images.map((image) => {
      console.log("Uploading "+fullname + pictureType[no] )

      const imageRef = ref(storage, `${sex}/${pictureType[no]}/${fullname}`);
      no++;
      uploadBytes(imageRef, image)
        .catch((error) => {
          console.log(error.message);
        });
    });
  }
}

export default new ModelManager();
