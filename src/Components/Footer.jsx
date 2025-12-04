import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 bg-gradient-to-br from-[#1B3C53] via-[#234C6A] to-[#456882] text-[#D2C1B6]">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-3xl font-extrabold mb-3 text-[#D2C1B6]">
            CodeKids
          </h2>

          <p className="text-sm opacity-90">
            Learn, Code & Create with Fun! Empowering kids through technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/items" className="hover:underline">All Items</a></li>
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/support" className="hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p>Email: info@codekids.com</p>
          <p>Phone: +880 123 456 789</p>
          <p>Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/ha.fi.z.216606"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-7 h-7 hover:opacity-70 transition"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/hafizur-mern"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-7 h-7 hover:opacity-70 transition"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D2C1B6]/40 mt-6 py-4 text-center text-sm">
        <div className="flex justify-center gap-6 mb-2">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
        </div>

        © {new Date().getFullYear()} CodeKids. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
