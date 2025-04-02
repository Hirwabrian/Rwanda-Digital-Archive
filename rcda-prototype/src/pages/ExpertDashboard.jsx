import React, { useEffect, useState } from "react";
import {
  fetchPendingSubmissions,
  submitReview, // New function for handling reviews
} from "../firebase/firestore";
import Card, { CardContent } from "../Components/ui/Card";
import ViewArtworkModal from "../components/ViewArtworkModal";
import FeedbackHistorySimulation from "../pages/FeedbackHistory";
import ExpertInsightsSimulation from "../pages/ExpertInsights";

const ExpertDashboard = () => {
  const [pendingSubmissions, setPendingSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const submissions = await fetchPendingSubmissions();
      setPendingSubmissions(submissions);
    };
    fetchSubmissions();
  }, []);

  const handleSubmitReview = async ({
    submissionId,
    ratings,
    feedback,
    status,
  }) => {
    try {
      await submitReview(submissionId, { ratings, feedback, status });
      setPendingSubmissions((prev) =>
        prev.filter((sub) => sub.id !== submissionId)
      );
      setIsModalOpen(false);
      setSelectedSubmission(null);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const handleView = (submission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSubmission(null);
  };

  return (
    <div className="p-6 bg-[#DDDBDE] text-[#3B373B] min-h-screen font-mono">
      <h1 className="text-3xl font-bold mb-6 uppercase">Expert Dashboard</h1>

      {/* Pending Submissions Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 uppercase">
          Pending Submissions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pendingSubmissions.length > 0 ? (
            pendingSubmissions.map((submission) => (
              <Card
                key={submission.id}
                className="p-5 bg-[#CAD4DF] border border-[#3B373B] shadow-md rounded-md"
              >
                <CardContent>
                  <h3 className="text-lg font-bold">{submission.title}</h3>
                  <div className="w-full h-40 bg-[#656E77] rounded flex items-center justify-center">
                    {submission.image ? (
                      <img
                        src={"/images/Homepage/homepage4.jpg"}
                        alt={submission.title}
                        className="object-cover h-full w-full rounded"
                      />
                    ) : (
                      <span className="text-[#DDDBDE]">No Image Available</span>
                    )}
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => handleView(submission)}
                      className="px-4 py-2 border border-[#3B373B] text-[#3B373B] hover:bg-[#DDDBDE] transition-all uppercase"
                    >
                      Review
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-[#656E77]">
              No pending submissions at the moment.
            </p>
          )}
        </div>
      </div>

      {/* Feedback History Section */}
      <div className="mb-12 bg-[#CAD4DF] p-6 border border-[#3B373B] shadow-md rounded-md">
        <FeedbackHistorySimulation />
      </div>

      {/* Insights Section */}
      <div className="mb-12 bg-[#CAD4DF] p-6 border border-[#3B373B] shadow-md rounded-md">
        <ExpertInsightsSimulation />
      </div>

      {/* View Artwork Modal with Review Form */}
      <ViewArtworkModal
        isOpen={isModalOpen}
        submission={selectedSubmission}
        onClose={handleCloseModal}
        onSubmitReview={handleSubmitReview}
      />
    </div>
  );
};

export default ExpertDashboard;
