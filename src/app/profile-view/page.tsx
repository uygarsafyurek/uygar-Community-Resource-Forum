import React from "react";

const UserProfile: React.FC = () => {
  const name = "Bob Joe";
  const bio = "Just a simple guy exploring the world of coding.";
  const profileImage = "https://via.placeholder.com/150";
  const activityFeed = [
    "Posted about React basics",
    "Attended the Web Dev conference",
    "Started learning TypeScript",
  ];

  return (
    <div className="border p-4 rounded-md shadow-md w-full max-w-md">
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold text-center mt-2">{name}</h2>
      <p className="text-center text-gray-600 mt-1">{bio}</p>

      <h3 className="mt-4 font-semibold">Activity Feed</h3>
      <ul className="list-disc pl-5 mt-2">
        {activityFeed.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
