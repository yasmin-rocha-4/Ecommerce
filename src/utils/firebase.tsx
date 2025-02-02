// src/firebase.ts

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
//import { getAnalytics } from 'firebase/analytics';

// Sua configuração do Firebase (configuração que você recebeu)
const firebaseConfig = {
  apiKey: "AIzaSyBkmGjigk0sLZFfpvWcfnlZ3q-WQGLXoR0",
  authDomain: "ecommerce-2a7ab.firebaseapp.com",
  projectId: "ecommerce-2a7ab",
  storageBucket: "ecommerce-2a7ab.firebasestorage.app",
  messagingSenderId: "236298123483",
  appId: "1:236298123483:web:5e8d927c1600ba100134fe",
  measurementId: "G-VP8KZ6D1ZV"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Analytics (opcional, se você quiser usar)
//const analytics = getAnalytics(app);

export { auth, googleProvider };
