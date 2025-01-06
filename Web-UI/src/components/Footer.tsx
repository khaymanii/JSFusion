import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-3xl font-semibold text-white">JsF</h2>
            <p className="mt-2 text-gray-400">
              Empowering developers with open-source projects and a thriving
              community.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex">
            <a
              href="https://github.com/khaymanii/jsfusion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-customPurple"
              title="GitHub Profile"
            >
              <FaGithub size={24} className="text-white" />
            </a>
            <span className="font-medium text-md ml-2 text-white">3 ⭐</span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} JSFusion. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
