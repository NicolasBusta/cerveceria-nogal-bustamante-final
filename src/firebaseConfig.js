import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBkXJa_7UH6op2LT3W68JA5ebOMwgP2QVg",
  authDomain: "proyecto-react-cerveza-nogal.firebaseapp.com",
  projectId: "proyecto-react-cerveza-nogal",
  storageBucket: "proyecto-react-cerveza-nogal.appspot.com",
  messagingSenderId: "377877962487",
  appId: "1:377877962487:web:9bb8e9058981f2f235bdf2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const collectionProd = collection(db, 'productos');
/*import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
//import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAe5VdiOzdkpmVDOOVikYJoM_urJBx0WmU',
    authDomain: 'after-419ba.firebaseapp.com',
    projectId: 'after-419ba',
    storageBucket: 'after-419ba.appspot.com',
    messagingSenderId: '1036730899871',
    appId: '1:1036730899871:web:6b2f4065de890428fb31aa',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const collectionProd = collection(db, 'products');*/
