import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAo6LmLt3JQeyCaEju23NXsftWiCHqbXDE",
  authDomain: "blog-589d6.firebaseapp.com",
  projectId: "blog-589d6",
  storageBucket: "blog-589d6.appspot.com",
  messagingSenderId: "944624813428",
  appId: "1:944624813428:web:e427052a6384e0ecd8d821"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
