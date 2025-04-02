import React, { useState } from "react";
import ProfileOverview from "./ProfileOverview";
import SubmittedArtworks from "./SubmittedArtworks";
import UploadArtworkForm from "./UploadArtworkForm";
import PerformanceAnalytics from "./PerformanceAnalytics";
import Collaborations from "./Collaborations";
import Notifications from "./Notifications";
import LearningResources from "./LearningResources";
import GalleryRepresentation from "./GalleryRepresentation";

const ArtistDashboard = () => {
  const [isMessagingOpen, setIsMessagingOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Curator",
      text: "Your artwork is under review.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "You",
      text: "Thank you for the update!",
      time: "10:35 AM",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      sender: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="grid grid-cols-12 gap-6 p-6 bg-[#DDDBDE] min-h-screen text-[#3B373B]">
      {/* Sidebar */}
      <aside className="col-span-3 bg-[#CAD4DF] p-6 rounded-lg shadow-lg h-fit space-y-6 border border-[#656E77]">
        <ProfileOverview />
        <Notifications />
        <LearningResources />

        {/* Messaging Button */}
        <button
          onClick={() => setIsMessagingOpen(true)}
          className="w-full bg-[#656E77] text-[#DDDBDE] py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-[#3B373B] transition"
        >
          Open Messaging
        </button>
      </aside>

      {/* Main Content */}
      <main className="col-span-9 space-y-6">
        <h1 className="text-4xl font-extrabold uppercase tracking-wide border-b-4 border-[#656E77] pb-2">
          Artist Dashboard
        </h1>
        <SubmittedArtworks />
        <UploadArtworkForm />
        <PerformanceAnalytics />
        <Collaborations />
        <GalleryRepresentation />
      </main>

      {/* Messaging Popup */}
      {isMessagingOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#3B373B] bg-opacity-80 z-50">
          <div className="bg-[#DDDBDE] text-[#3B373B] rounded-lg shadow-lg w-96 p-6 border border-[#656E77]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold uppercase">Messaging</h2>
              <button
                className="text-[#656E77] hover:text-[#3B373B] text-2xl"
                onClick={() => setIsMessagingOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-64 overflow-y-auto border border-[#656E77] rounded p-3 space-y-3 bg-[#CAD4DF]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "You" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg shadow-md text-sm border border-[#656E77] ${
                      msg.sender === "You"
                        ? "bg-[#3B373B] text-[#DDDBDE]"
                        : "bg-[#DDDBDE] text-[#3B373B]"
                    }`}
                  >
                    <p className="font-bold">{msg.sender}</p>
                    <p>{msg.text}</p>
                    <p className="text-xs text-[#656E77]">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Field */}
            <div className="flex items-center mt-3">
              <input
                type="text"
                className="flex-1 border border-[#656E77] px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B373B] bg-[#DDDBDE] text-[#3B373B]"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="ml-3 bg-[#3B373B] text-[#DDDBDE] px-4 py-2 rounded-lg font-bold uppercase tracking-widest hover:bg-[#656E77] transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistDashboard;
