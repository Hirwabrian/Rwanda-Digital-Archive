import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

const PendingVerification = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [requestedRole] = useState(location.state?.requestedRole || "artist");
  const [verificationStatus, setVerificationStatus] = useState("pending");

  // Single source of truth: Firestore listener
  useEffect(() => {
    if (!currentUser?.uid) return;

    const userDocRef = doc(db, "users", currentUser.uid);
    const unsubscribe = onSnapshot(userDocRef, (doc) => {
      if (doc.exists()) {
        const { role, status } = doc.data();

        // Update local status for UI
        setVerificationStatus(status);

        // Redirect only when fully verified
        if (status === "verified" && role !== "general") {
          navigate(`/${role}`);
        }
      }
    });

    return unsubscribe;
  }, [currentUser, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {verificationStatus === "pending"
            ? "Verification Pending"
            : "Verification Approved!"}
        </h1>

        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div
              className={`h-4 rounded-full ${
                verificationStatus === "pending"
                  ? "bg-blue-500 animate-pulse"
                  : "bg-green-500"
              }`}
              style={{
                width: verificationStatus === "pending" ? "70%" : "100%",
              }}
            />
          </div>
          <p className="text-sm text-gray-600 text-center">
            {verificationStatus === "pending"
              ? `Processing your ${requestedRole} application...`
              : "Your credentials have been approved!"}
          </p>
        </div>

        <p className="mb-6 text-gray-700">
          {verificationStatus === "pending"
            ? `Your ${requestedRole} verification is under review. 
               This usually takes 24-48 hours.`
            : `You've been verified as a ${requestedRole}! 
               Redirecting you to your dashboard...`}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/home")}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
            disabled={verificationStatus === "verified"}
          >
            {verificationStatus === "pending"
              ? "Continue as General User"
              : "Go to Dashboard"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingVerification;
