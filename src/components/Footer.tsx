import { me } from "@/data";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              &copy; {new Date().getFullYear()} {me.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 dark:text-gray-300 mr-2">
              Created with
            </span>
            <FaHeart className="text-red-500 mx-1" />
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with React, Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
