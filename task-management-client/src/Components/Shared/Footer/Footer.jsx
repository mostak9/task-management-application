import { Typography } from "@material-tailwind/react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram , FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-4 lg:mb-0">
          <Typography
              variant="h5"
              className="mr-4 cursor-pointer py-1.5 flex items-center font-bold"
            >
              Task
              <Typography className="text-white bg-black rounded-sm font-bold italic px-2 ">
                Forge
              </Typography>
            </Typography>
            <p className="text-sm">Your go-to task management platform</p>
          </div>

          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Features</a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>

        <hr className="my-4 border-gray-600" />

        <div className="flex items-center justify-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
          <FaSquareXTwitter className="text-2xl" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
          <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
          <FaLinkedin className="text-2xl" />
          </a>
         
        </div>

        <div className="text-center text-sm mt-4">
          <p>&copy; {new Date().getFullYear()} Task Forge. All Rights Reserved.</p>
          <p>Designed and developed with React.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
