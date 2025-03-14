import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App.tsx";

import firebase from "firebase/compat/app";
import firebaseConfig from "../firebaseConfige.js";
const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {});

firebase.initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StrictMode>
);
