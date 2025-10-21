import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p>Email: info@codekids.com</p>
          <p>Phone: +880 123 456 789</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                alt="Instagram"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
          </div>
        </div>

        {/* Privacy Policy */}
        <div>
          <h3 className="font-bold text-lg mb-2">Legal</h3>
          <ul>
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm">
        © {new Date().getFullYear()} CodeKids. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
