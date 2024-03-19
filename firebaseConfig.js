import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgSC0dpk1w0fVFhL9PE2gejxDUiLLh8hU",
  authDomain: "teste-fb-66cbb.firebaseapp.com",
  projectId: "teste-fb-66cbb",
  storageBucket: "teste-fb-66cbb.appspot.com",
  messagingSenderId: "1093789252279",
  appId: "1:1093789252279:web:d6a74a6f3f4bd797caab32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);