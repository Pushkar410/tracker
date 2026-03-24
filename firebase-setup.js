
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getFirestore, doc, setDoc, getDoc, collection, query, orderBy, limit, getDocs, onSnapshot, serverTimestamp, startAfter } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, linkWithCredential, EmailAuthProvider } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBr4a5ZY5r6kmA65gZH_7bhyPLEylcSok0",
  authDomain: "tracker-1ca4a.firebaseapp.com",
  projectId: "tracker-1ca4a",
  storageBucket: "tracker-1ca4a.firebasestorage.app",
  messagingSenderId: "619266706060",
  appId: "1:619266706060:web:6d06918df93bde6879c9a9",
  measurementId: "G-RJH2VGDNGG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { 
  db, auth, analytics, 
  doc, setDoc, getDoc, collection, query, orderBy, limit, getDocs, onSnapshot, serverTimestamp, startAfter,
  signInAnonymously, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, linkWithCredential, EmailAuthProvider 
};

/**
 * Calculates separate LeetCode and OS points, plus total.
 */
export function calculatePoints(data) {
    let lc_points = 0;
    let os_points = 0;
    
    // LeetCode Progress: 10 points per problem solved
    if (data.faangProgress) {
        lc_points += Object.values(data.faangProgress).filter(v => v === true).length * 10;
    }
    
    // OS Days: 5 pts for 'done', 2 pts for 'rev'
    if (data.os_days) {
        Object.values(data.os_days).forEach(status => {
            if (status === 'done') os_points += 5;
            else if (status === 'rev') os_points += 2;
        });
    }
    
    // OS Mock Test: 1 pt per correct answer
    if (data.os_mock) {
        Object.values(data.os_mock).forEach(score => {
            os_points += score;
        });
    }
    
    return { lc_points, os_points, totalPoints: lc_points + os_points };
}

/**
 * Global sync function to update Firestore with current state.
 */
export async function syncUserData(uid, updateData) {
    if (!uid) return;
    const userRef = doc(db, 'users', uid);
    
    // Fetch current data to preserve fields
    const docSnap = await getDoc(userRef);
    const existingData = docSnap.exists() ? docSnap.data() : {};
    
    const mergedData = {
        ...existingData,
        ...updateData,
        lastUpdated: serverTimestamp()
    };
    
    // Recalculate all points
    const pts = calculatePoints(mergedData);
    mergedData.lc_points = pts.lc_points;
    mergedData.os_points = pts.os_points;
    mergedData.totalPoints = pts.totalPoints;
    
    await setDoc(userRef, mergedData);
}
