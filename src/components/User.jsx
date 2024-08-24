import React from "react";
const userdata = [
  {
    name: "Kishanth",
    city: "Namakkal",
    description: "Full stack developer",
    skills: [
      "UI / UX",
      "Front End Development",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
    ],
    online: true,
    profile: "/user1.jpeg",
  },
  {
    name: "Gavas",
    city: "London",
    description: "Full stack developer",
    skills: [
      "UI / UX",
      "Front End Development",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
    ],
    online: false,
    profile: "/user1.jpeg",
  },

];
const User = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {userdata.map((user, index) => (
        <div key={index} className="bg-white rounded-lg">
          <div className="relative">
            <img
              src="/user1.jpeg"
              alt="img"
              className="w-full h-48 object-cover"
            />
            <span className={`absolute top-4 left-4 py-1 px-3 text-white text-sm  rounded-full ${user.online ? "bg-green-500":"bg-red-500"}`}>
             {user.online ? "Online" : "Offline"}
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-black">{user.name}</h3>
            <h4 className="text-md text-gray-500 mb-2">{user.city}</h4>
            <p className="text-gray-600 mb-4">{user.description}</p>
            <div className="flex gap-4 mb-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                Message
              </button>
              <button className=" border border-blue-500 text-blue-500 py-2 px-4 rounded-lg">
                Following
              </button>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Skills</h4>
              <ul className="text-gray-600 list-disc list-inside">
                {user.skills.map((skills, skillsindex) => {
                  return <li key={skillsindex}>{skills}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
