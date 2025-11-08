// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BugTracker from "./components/BugTracker"; // ✅ Added

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        {/* Header / Navbar */}
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">MERN Testing Project</h1>
          <nav className="space-x-4">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/dashboard">
              <Button>Dashboard</Button>
            </Link>
            <Link to="/bugs">
              <Button variant="secondary">Bug Tracker</Button>
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-6 w-full">
            <Routes>
              <Route
                path="/"
                element={
                  <p className="text-gray-700 text-lg">
                    Welcome to the <span className="font-semibold">MERN Testing Project</span>!  
                    <br />
                    Use the navigation buttons above to explore.
                  </p>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/bugs" element={<BugTracker />} /> {/* ✅ Added route */}
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 text-center py-3 text-sm text-gray-600">
          © {new Date().getFullYear()} MERN Testing Project. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
