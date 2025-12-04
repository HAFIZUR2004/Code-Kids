import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen -mb-10 flex flex-col items-center justify-center bg-gradient-to-r from-[#1B3C53] via-[#234C6A] to-[#456882] text-white px-4">
      <h1 className="text-4xl font-extrabold mb-4">Support Center</h1>
      <p className="text-lg text-center mb-6">
        Need help? We're here to assist you. Reach out to us anytime!
      </p>

      <div className="bg-[#D2C1B6] rounded-lg p-6 w-full max-w-md shadow-lg text-gray-800">
        <h2 className="text-2xl font-bold mb-3">Contact Support</h2>
        <p className="mb-2">Email: support@codekids.com</p>
        <p className="mb-2">Phone: +880 123 456 789</p>
        <p>Dhaka, Bangladesh</p>
      </div>
    </div>
  );
};

export default Support;
