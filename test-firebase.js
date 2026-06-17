import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp4tVRRd6n0QOH66heDOz0pKbhvu8ohkQ",
  authDomain: "web-dkm.firebaseapp.com",
  projectId: "web-dkm",
  storageBucket: "web-dkm.firebasestorage.app",
  messagingSenderId: "282562799158",
  appId: "1:282562799158:web:e3cc80a87161423f769a97"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testFirebase() {
  console.log("Testing connection...");
  try {
    const col = collection(db, 'artifacts', 'web-dkm', 'public', 'data', 'kajian');
    const snap = await getDocs(col);
    console.log("Success! Found", snap.docs.length, "documents.");
  } catch (err) {
    console.error("Error connecting:", err);
  }
}

testFirebase();
