import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                  ProShop V2
                </h1>
                <div className="text-center">
                  <p className="text-lg text-gray-600 mb-4">
                    Welcome to ProShop V2 - Built with React + TypeScript +
                    Tailwind
                  </p>
                  <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
                    <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                    <ul className="text-left space-y-1">
                      <li>• React + TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• Zustand (State Management)</li>
                      <li>• Zod (Validation)</li>
                      <li>• React Router</li>
                      <li>• React Toastify</li>
                    </ul>
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
