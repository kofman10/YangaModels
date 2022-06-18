

import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase--Config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const MenCollectionRef = collection(db, "men");
const WomenCollectionRef = collection(db, "women");


class ModelManager {
  createMale = async (maleModel) => {

    console.log("male called ")
    await addDoc(MenCollectionRef, maleModel)
    console.log(maleModel);
  }

  createFemale = async (femaleModel) => {
    console.log("female called ")
    await addDoc(WomenCollectionRef, femaleModel)
    console.log(femaleModel);
  }

  handleUpload = (fullname, images,sex) => {
    for (let i = 0; i < 4; i++) {
      console.log(images[i].name)
    }

    let no = 0;
    let pictureType = ["Full lenght", "Profile", "Close up", "Waist up"]
    images.map((image, pis) => {
      console.log("called" + image.name + fullname)

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
