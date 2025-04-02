import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Your artwork 'Abstract Dreams' has been approved.",
      read: false,
    },
    {
      id: 2,
      message: "New collaboration opportunity available.",
      read: false,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="bg-[#DDDBDE] p-6 shadow-lg border border-[#656E77] rounded-lg">
      <h2 className="text-2xl font-bold uppercase tracking-wider text-[#3B373B] border-b-4 border-[#656E77] pb-3 mb-4">
        Notifications
      </h2>
      <ul>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={`border-b border-[#656E77] pb-3 mb-3 ${
              notification.read ? "text-[#656E77]" : "font-bold text-[#3B373B]"
            }`}
          >
            {notification.message}
            {!notification.read && (
              <button
                onClick={() => markAsRead(notification.id)}
                className="ml-4 text-[#C83F5F] font-semibold hover:text-[#DF5587] underline transition"
              >
                Mark as Read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
