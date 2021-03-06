import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Search from "./components/Search/Search";
import LoginPage from "./components/Login/LoginPage";
import Register from "./components/Login/Register/Register";
import { auth } from "./helpers/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import UserPage from "./components/UserPage/UserPage";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<UserPage loggedIn={loggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
