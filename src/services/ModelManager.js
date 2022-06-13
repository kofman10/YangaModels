import { db } from "../firebase-config";

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";


const ModelsCollectionRef = collection(db, "models");
class ModelManager {
  addModels = (newModel) => {
    return addDoc(ModelsCollectionRef, newModel);
  };

  updateModel = (id, updatedModel) => {
    const modelDoc = doc(db, "models", id);
    return updateDoc(modelDoc, updatedModel);
  };

  deleteModel = (id) => {
    const modelDoc = doc(db, "models", id);
    return deleteDoc(modelDoc);
  };

  getAllModel = () => {
    return getDocs(ModelsCollectionRef);
  };

  getModel = (id) => {
    const modelDoc = doc(db, "models", id);
    return getDoc(modelDoc);
  };
}

export default new ModelManager();