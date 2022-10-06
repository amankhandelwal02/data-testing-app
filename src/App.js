import React from "react";
import "./App.css";
import Header from "./components/Header";
import UserList from "./components/UserList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/teams" element={<TeamSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
