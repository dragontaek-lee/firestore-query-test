import admin from "firebase-admin";
import yourCertification from "./cert/your-certificate.json";

const {firestore} = admin;
const credential = admin.credential.cert(yourCertification);
admin.initializeApp({ credential });

const getDocData = (doc) => {return (doc.exists ? { id: doc.id, ...doc.data() } : null)};
const getCollectionData = (collection) => collection.docs.map(getDocData);