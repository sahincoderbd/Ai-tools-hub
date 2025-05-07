/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.html", // Scans all HTML files in the project root
      "./js/**/*.js" // Scans all JavaScript files in the js folder (if you have any)
    ],
    darkMode: 'class', // Enables dark mode with the 'dark' class
    theme: {
      extend: {
        colors: {
          // Custom colors matching your project
          blue: {
            600: '#2563eb', // dark:bg-blue-600
            700: '#1d4ed8', // bg-blue-700
            800: '#1e40af' // hover:bg-blue-800
          },
          red: {
            700: '#DC3545', // bg-[#DC3545], hover:bg-red-700
          },
          gray: {
            100: '#f3f4f6', // bg-gray-100
            200: '#e5e7eb', // border-gray-200
            400: '#9ca3af', // text-gray-400
            500: '#6b7280', // text-gray-500
            700: '#374151', // text-gray-700, dark:bg-gray-700
            800: '#1f2937', // dark:bg-gray-800
            900: '#111827' // dark:bg-gray-900
          }
        }
      }
    },
    plugins: []
  }