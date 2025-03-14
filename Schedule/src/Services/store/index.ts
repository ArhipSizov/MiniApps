import firebaseConfig from "../../../firebaseConfige";
import firebase from "firebase/compat/app";

import "firebase/compat/database";

export const database = firebase.initializeApp(firebaseConfig).database();
