import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ArtistHomepage from "./components/ArtistHomepage";
import ArtistDashboard from "./pages/ArtistDashboard";
import ExpertHomepage from "./components/ExpertHomepage";
import PendingVerification from "./pages/PendingVerification";
import ExpertDashboard from "./pages/ExpertDashboard";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />

          {/* Protected routes */}
          <Route
            element={
              <ProtectedRoute allowedRoles={["general", "artist", "expert"]} />
            }
          >
            <Route path="/home" element={<HomePage />} />
          </Route>

          <Route
            element={
              <ProtectedRoute allowedRoles={["artist"]} needsVerification />
            }
          >
            <Route path="/artist" element={<ArtistHomepage />} />
            <Route path="/artist/dashboard" element={<ArtistDashboard />} />
          </Route>

          <Route
            element={
              <ProtectedRoute allowedRoles={["expert"]} needsVerification />
            }
          >
            <Route path="/expert" element={<ExpertHomepage />} />
            <Route path="/expert/dashboard" element={<ExpertDashboard />} />
          </Route>

          {/* Verification page */}
          <Route
            path="/pending-verification"
            element={<PendingVerification />}
          />

          {/* Catch invalid paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
