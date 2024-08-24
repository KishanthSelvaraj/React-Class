import React, { useState } from "react";

const QrGenerator = () => {
  const [data, setData] = useState("");
  const [size, setSize] = useState();
  const [qrCodeUrl, setQrCodeUrl] = useState("");


  function handledata(e) {
    console.log(e.target.value);
    setData(e.target.value);
   
    
  }

  function handlesize(e) {
    setSize(e.target.value);
  }
  const generateQr = () => {
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`;
    setQrCodeUrl(url);
  };
  // console.log(size);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <label
            htmlFor="dataInput"
            className="block text-gray-700 font-semibold mb-2"
          >
            Data for QR code:
          </label>
          <input
            type="text"
            id="dataInput"
            value={data}
            onChange={handledata}
            placeholder="Enter data for QR code"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="sizeInput"
            className="block text-gray-700 font-semibold mb-2"
          >
            Image size (e.g., 150):
          </label>
          <input
            type="number"
            id="sizeInput"
            value={size}
            onChange={handlesize}
            placeholder="Enter image size"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={generateQr}
        >
          Generate QR code
        </button>
        <div className="mt-6 flex justify-center">
          {qrCodeUrl ? (
            <img
              src={qrCodeUrl}
              alt="Qrcode"
              className="max-w-full h-auto rounded-lg shodow-md"
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QrGenerator;

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=kishanth
//encodeURIComponent
