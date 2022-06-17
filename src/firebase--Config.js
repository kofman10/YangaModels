

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);