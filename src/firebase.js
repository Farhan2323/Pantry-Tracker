import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
 apiKey: "AIzaSyA2z-IerxNZ94QeAEJnavriCF0I1LZx6i0",
 authDomain: "fa-pantry-tracker.firebaseapp.com",
 projectId: "fa-pantry-tracker",
 storageBucket: "fa-pantry-tracker.appspot.com",
 messagingSenderId: "18418152009",
 appId: "1:18418152009:web:0c46d3b922053d6079c598"
 
 };
//const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };