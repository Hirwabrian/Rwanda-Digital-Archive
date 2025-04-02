import React, { useState } from "react";

const FeedbackHistorySimulation = () => {
  const [feedbackHistory, setFeedbackHistory] = useState([
    {
      id: 1,
      title: "Sunset Over the Horizon",
      artist: "Jane Doe",
      category: "Painting",
      feedback: "Beautiful composition, but consider refining the details.",
      date: "2025-03-25",
    },
    {
      id: 2,
      title: "Abstract Reality",
      artist: "John Smith",
      category: "Abstract",
      feedback: "Great concept, but lacks balance in the color palette.",
      date: "2025-03-20",
    },
  ]);
  const [editId, setEditId] = useState(null);
  const [retractId, setRetractId] = useState(null);
  const [newFeedback, setNewFeedback] = useState("");
  const [retractReason, setRetractReason] = useState("");

  const handleEditFeedback = (id) => {
    const updatedFeedback = feedbackHistory.map((item) =>
      item.id === id ? { ...item, feedback: newFeedback } : item
    );
    setFeedbackHistory(updatedFeedback);
    setEditId(null);
    setNewFeedback("");
  };

  const handleRetractFeedback = (id) => {
    const updatedFeedback = feedbackHistory.filter((item) => item.id !== id);
    setFeedbackHistory(updatedFeedback);
    setRetractId(null);
    setRetractReason("");
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Feedback History Simulation</h2>
      <ul className="space-y-4">
        {feedbackHistory.map((item) => (
          <li key={item.id} className="border p-4 rounded shadow-sm">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">
              <strong>Artist:</strong> {item.artist} |{" "}
              <strong>Category:</strong> {item.category} |{" "}
              <strong>Date:</strong> {item.date}
            </p>
            <p className="mt-2 text-gray-700">{item.feedback}</p>

            <div className="mt-2 flex gap-2">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => setEditId(item.id)}
              >
                Edit Feedback
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => setRetractId(item.id)}
              >
                Retract Feedback
              </button>
            </div>

            {editId === item.id && (
              <div className="mt-4">
                <textarea
                  className="w-full border p-2 rounded"
                  placeholder="Update feedback..."
                  value={newFeedback}
                  onChange={(e) => setNewFeedback(e.target.value)}
                />
                <button
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => handleEditFeedback(item.id)}
                >
                  Save Changes
                </button>
              </div>
            )}

            {retractId === item.id && (
              <div className="mt-4">
                <textarea
                  className="w-full border p-2 rounded"
                  placeholder="Reason for retracting feedback..."
                  value={retractReason}
                  onChange={(e) => setRetractReason(e.target.value)}
                />
                <button
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleRetractFeedback(item.id)}
                >
                  Confirm Retraction
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackHistorySimulation;
