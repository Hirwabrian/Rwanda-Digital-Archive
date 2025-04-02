import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

// Save user data to Firestore
export const saveUserData = async (uid, userData) => {
  try {
    await setDoc(doc(db, "users", uid), userData);
    console.log("User data saved!");
  } catch (error) {
    console.error("Error saving user data:", error.message);
    throw error;
  }
};

// Fetch user data
export const getUserData = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};

// Update user status
export const updateUserStatus = async (uid, status) => {
  try {
    await updateDoc(doc(db, "users", uid), { status });
    console.log("User status updated!");
  } catch (error) {
    console.error("Error updating user status:", error.message);
    throw error;
  }
};

// Fetch user role
export const getUserRole = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data().role : null;
  } catch (error) {
    console.error("Error fetching user role:", error.message);
    throw error;
  }
};

// src/utils/mockFirestore.js
export const mockSubmissions = [
  {
    id: "1",
    title: "Abstract Painting",
    description: "A vibrant mix of colors and patterns.",
    artist: "John Doe",
  },
  {
    id: "2",
    title: "Sculpture Design",
    description: "A minimalist sculpture of a human figure.",
    artist: "Jane Smith",
  },
  {
    id: "3",
    title: "Landscape Art",
    description: "A serene landscape of a mountain valley.",
    artist: "Alice Brown",
  },
];

// Simulate fetching pending submissions
export const fetchPendingSubmissions = async () => {
  console.log("Fetching pending submissions...");
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockSubmissions), 1000); // Simulate 1s delay
  });
};

// Simulate approving an artwork
export const approveArtwork = async (id) => {
  console.log(`Approving artwork with ID: ${id}`);
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Artwork with ID: ${id} approved.`), 500); // Simulate 0.5s delay
  });
};

// Simulate rejecting an artwork
export const rejectArtwork = async (id) => {
  console.log(`Rejecting artwork with ID: ${id}`);
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Artwork with ID: ${id} rejected.`), 500); // Simulate 0.5s delay
  });
};

export const submitReview = async ({
  submissionId,
  ratings,
  feedback,
  status,
}) => {
  const submissionRef = doc(db, "submissions", submissionId);

  await addDoc(collection(db, "reviews"), {
    submissionId,
    ratings,
    feedback,
    status,
    reviewedAt: new Date(),
  });

  if (status === "approved" || status === "rejected") {
    await deleteDoc(submissionRef);
  } else {
    await updateDoc(submissionRef, { status: "revision_requested" });
  }
};
