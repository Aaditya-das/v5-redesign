// ======================================
// Firebase Configuration
// ======================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Replace these with your Firebase project's settings
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Google Login
const provider = new GoogleAuthProvider();

export async function loginWithGoogle() {
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error(error);
    }
}

// Logout
export async function logout() {
    await signOut(auth);
}

// User State
onAuthStateChanged(auth, (user) => {

    if (user) {
        console.log("Logged in:", user.displayName);
    } else {
        console.log("Not logged in");
    }

});

// Save Order
export async function saveOrder(orderData) {

    await addDoc(collection(db, "orders"), {

        ...orderData,

        createdAt: serverTimestamp()

    });

}

// Get Orders
export async function getOrders() {

    const snapshot = await getDocs(collection(db, "orders"));

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

}
