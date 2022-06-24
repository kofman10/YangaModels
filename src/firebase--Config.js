

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdTkqkdUeqNkTO-qsic9KZ0RT_XOcJZQs",
  authDomain: "yanga-models.firebaseapp.com",
  projectId: "yanga-models",
  storageBucket: "yanga-models.appspot.com",
  messagingSenderId: "705698954305",
  appId: "1:705698954305:web:cdd527dde0605f38cfdac0",
  measurementId: "G-RMR706XX9J"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCZF_9OMjDbpZlq7slou7Gg40c2icEBKqc",
//   authDomain: "yangamodels.firebaseapp.com",
//   projectId: "yangamodels",
//   storageBucket: "yangamodels.appspot.com",
//   messagingSenderId: "973173566117",
//   appId: "1:973173566117:web:be873c061ab24c18337b4c",
//   measurementId: "G-1KMDP3PGT2"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);