import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ_gS0MF602MYrC_4Wx2bSZ87L6jnFtYk",
  authDomain: "dm-clothingadvisor.firebaseapp.com",
  projectId: "dm-clothingadvisor",
  storageBucket: "dm-clothingadvisor.appspot.com",
  messagingSenderId: "396547949219",
  appId: "1:396547949219:web:325b66c062d517bd207516"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth,db,storage};