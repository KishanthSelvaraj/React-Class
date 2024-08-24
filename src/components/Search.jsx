import React from "react";
import { Command } from "cmdk";

const Search = () => {
  return (
    <Command className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <Command.Input
        placeholder="Search..."
        className="w-full p-2 mb-4 text-gray-700 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Command.List className="divide-y divide-gray-200">
        <Command.Empty className="p-4 text-center text-gray-500">
          No result found
        </Command.Empty>
        <Command.Group className="py-2">
          <Command.Item className="p-2 text-gray-700 cursor-pointer hover:bg-blue-100 hover:text-blue-900 rounded">
            Kishanth
          </Command.Item>
          <Command.Item className="p-2 text-gray-700 cursor-pointer hover:bg-blue-100 hover:text-blue-900 rounded">
            Kavya
          </Command.Item>
          <Command.Item className="p-2 text-gray-700 cursor-pointer hover:bg-blue-100 hover:text-blue-900 rounded">
            Gavasker
          </Command.Item>
          <Command.Item className="p-2 text-gray-700 cursor-pointer hover:bg-blue-100 hover:text-blue-900 rounded">
            Kesavan
          </Command.Item>
          <Command.Item className="p-2 text-gray-700 cursor-pointer hover:bg-blue-100 hover:text-blue-900 rounded">
            Sakthivel
          </Command.Item>
          <Command.Item className="p-2 text-gray-700 cursor-pointer hover:bg-blue-100 hover:text-blue-900 rounded">
            Sabari
          </Command.Item>
          <Command.Item className="p-2 text-gray-700 cursor-pointer hover:bg-blue-100 hover:text-blue-900 rounded">
            Sharmii
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command>
  );
};

export default Search;
