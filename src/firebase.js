
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
apiKey: "AIzaSyCgnTpWRswtbY1Y8tfPqJUUIT6MkRPOLkE",
authDomain: "skincare-recom-webapp.firebaseapp.com",
projectId: "skincare-recom-webapp",
storageBucket: "skincare-recom-webapp.firebasestorage.app",
messagingSenderId: "1011439327814",
appId: "1:1011439327814:web:da2268972b77bbadb18847",
measurementId: "G-2468L4YVF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



// for deploying the app to firebase hosting
//npm install -g firebase-tools
//firebase login
//firebase init
//firebase deploy