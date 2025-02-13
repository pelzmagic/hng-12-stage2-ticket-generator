import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Card from "./Card";
import AttendeeDetails from "./AttendeeDetails";

function App() {
  return (
    <div className="max-w-[1440px] border border-red-500 mx-auto">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/step-2" element={<AttendeeDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
