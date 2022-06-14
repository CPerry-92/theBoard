import "./App.css";
import { useAuthContext } from "./hooks/useAuthContext";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import OnlineUsers from "./Components/OnlineUsers";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              ></Route>
              <Route
                path="/create"
                element={user ? <Create /> : <Navigate to="/login" />}
              ></Route>
              <Route
                path="/projects/:id"
                element={user ? <Project /> : <Navigate to="/login" />}
              ></Route>
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              ></Route>
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              ></Route>
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
