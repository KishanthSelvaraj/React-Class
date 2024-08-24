import React, { useState } from "react";

const UserForm = () => {
  const [user, setUser] = useState({
    name: "Kishanth",
    age: 20,
    gender: "Male",
    isMarried: true,
    country: "India",
    bio: "Welcome",
  });

  function handledata(e) {
    // console.log(e.target.value);
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({ ...user, [name]: value });
  }
  // [...arr1,...arr2]
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <table className="w-full text-left mb-6">
        <tbody>
          <tr>
            <td className="font-semibold py-2">Name:</td>
            <td className="py-2">{user.name}</td>
          </tr>
          <tr>
            <td className="font-semibold py-2">Age:</td>
            <td className="py-2">{user.age}</td>
          </tr>
          <tr>
            <td className="font-semibold py-2">Gender:</td>
            <td className="py-2">{user.gender}</td>
          </tr>
          <tr>
            <td className="font-semibold py-2">Marital Status:</td>
            <td className="py-2">{user.isMarried ? "Married" : "Unmarried"}</td>
          </tr>
          <tr>
            <td className="font-semibold py-2">Country:</td>
            <td className="py-2">{user.country}</td>
          </tr>
          <tr>
            <td className="font-semibold py-2">Bio:</td>
            <td className="py-2">{user.bio}</td>
          </tr>
        </tbody>
      </table>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          onChange={handledata}
          value={user.name}
          name="name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          onChange={handledata}
          value={user.age}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center space-x-4">
          <label htmlFor="male" className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="Male"
              className="mr-2"
              onChange={handledata}
              checked={user.gender === "Male"}
            />
            Male
          </label>
          <label htmlFor="female" className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="Female"
              className="mr-2"
              onChange={handledata}
              checked={user.gender === "Female"}
            />
            Female
          </label>
        </div>
        <label htmlFor="isMarried" className="flex items-center">
          <input
            type="checkbox"
            name="isMarried"
            className="mr-2"
            onChange={handledata}
            checked={user.isMarried}
          />
          Is Married
        </label>
        <div>
          <label htmlFor="country" className="block mb-2 font-semibold">
            Select Country:
          </label>
          <select
            name="country"
            onChange={handledata}
            value={user.country}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <textarea
          name="bio"
          id="bio"
          cols="30"
          onChange={handledata}
          value={user.bio}
          rows="5"
          placeholder="Write about You"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
    </div>
  );
};

export default UserForm;
