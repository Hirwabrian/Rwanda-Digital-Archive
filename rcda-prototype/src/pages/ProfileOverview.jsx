import React from "react";

const ProfileOverview = () => {
  const artistData = {
    name: "Jane Doe",
    bio: "A passionate digital artist exploring the intersection of art and technology.",
    profilePicture: "/images/Homepage/profile.jpg", // Replace with dynamic data
    stats: {
      submitted: 20,
      approved: 15,
      pending: 3,
    },
  };

  return (
    <div className="bg-[#DDDBDE] p-6 shadow-lg border border-[#656E77] rounded-lg">
      <div className="flex items-center border-b-4 border-[#656E77] pb-4 mb-4">
        <img
          src={artistData.profilePicture}
          alt="Profile"
          className="w-20 h-20 border-4 border-[#656E77] rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-bold uppercase text-[#3B373B]">
            {artistData.name}
          </h2>
          <p className="text-[#656E77] text-sm">{artistData.bio}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        {Object.entries(artistData.stats).map(([key, value]) => (
          <div key={key}>
            <h3 className="text-2xl font-extrabold text-[#3B373B]">{value}</h3>
            <p className="text-[#656E77] uppercase text-xs tracking-widest">
              {key}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileOverview;
