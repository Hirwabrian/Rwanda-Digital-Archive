// src/components/ui/Card.jsx
import React from "react";

// Card component
const Card = ({ children, className }) => {
  return (
    <div className={`rounded-2xl shadow-md bg-white p-4 ${className}`}>
      {children || <div className="text-gray-500">Placeholder Card</div>}
    </div>
  );
};

// CardContent component
const CardContent = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children || <div className="text-gray-400">Placeholder Content</div>}
    </div>
  );
};

// Export Card as default and CardContent as named export
export { CardContent };
export default Card;
