import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
        {/* Website Name */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Visa Navigate</h2>
        </div>
        {/* Contact Info */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm">Contact Us: info@yourwebsite.com</p>
          <p className="text-sm">Phone: +1(234) 543577899</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-sm mt-4">
        <p>&copy; 2025 Your Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
