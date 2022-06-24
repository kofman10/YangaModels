

import { collection, addDoc ,doc, setDoc} from "firebase/firestore";
import { db, storage } from "../firebase--Config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const MenCollectionRef = collection(db, "male");
const WomenCollectionRef = collection(db, "female");


// Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });

class ModelManager {
  // createMale = async (maleModel) => {

  //   console.log("male called ")
  //   await addDoc(MenCollectionRef, maleModel)
  //   console.log(maleModel);
  // }

  createMale = async (maleModel,fullname) => {

    console.log("male called ")
    await setDoc(doc(db, "male", fullname), maleModel);
    console.log(maleModel);
  }

  createFemale = async (femaleModel,fullname) => {
    console.log("female called " + fullname )
    await setDoc(doc(db, "female", fullname), femaleModel);
    // await addDoc(WomenCollectionRef, )
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
