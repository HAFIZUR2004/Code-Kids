import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen -mb-10 bg-gradient-to-b from-[#1B3C53] via-[#234C6A] to-[#456882] text-white flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-8 text-gray-800">
        <h2 className="text-3xl font-extrabold mb-6 text-[#1B3C53]">
          Contact Us
        </h2>
        <p className="mb-6 text-gray-600">
          Have questions or want to get in touch? Fill out the form below or reach us through our contact info.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#234C6A]">Email</h3>
              <p>info@codekids.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#234C6A]">Phone</h3>
              <p>+880 123 456 789</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#234C6A]">Address</h3>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D2C1B6]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D2C1B6]"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D2C1B6]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#D2C1B6] text-[#1B3C53] font-bold py-3 rounded-xl hover:bg-[#234C6A] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
