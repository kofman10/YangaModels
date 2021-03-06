import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyCmqXu0SfXsEkPQU6E5BkZ4985FtMiapQQ",
//     authDomain: "yangamodels-a48d6.firebaseapp.com",
//     projectId: "yangamodels-a48d6",
//     storageBucket: "yangamodels-a48d6.appspot.com",
//     messagingSenderId: "618188583133",
//     appId: "1:618188583133:web:575feba248702ba107ab34",
//     measurementId: "G-3E1VFT3JNV"
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyCdTkqkdUeqNkTO-qsic9KZ0RT_XOcJZQs",
    authDomain: "yanga-models.firebaseapp.com",
    projectId: "yanga-models",
    storageBucket: "yanga-models.appspot.com",
    messagingSenderId: "705698954305",
    appId: "1:705698954305:web:cdd527dde0605f38cfdac0",
    measurementId: "G-RMR706XX9J"
  };


  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
export const storage = getStorage(app);