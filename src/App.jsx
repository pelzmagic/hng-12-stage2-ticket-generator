import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Card from "./Card";
import AttendeeDetails from "./AttendeeDetails";
import ReadyPage from "./ReadyPage";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [avartar, setAvartar] = useState(null);
  const [option, setOption] = useState("");
  const [selectedType, setSelectedType] = useState("");
  return (
    <div className="max-w-[1440px] mx-auto">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Card option={option} setOption={setOption} selectedType={selectedType} setSelectedType={setSelectedType} />} />
          <Route path="/step-2" element={<AttendeeDetails name={name} setName={setName} email={email} setEmail={setEmail} text={text} setText={setText} avartar={avartar} setAvartar={setAvartar} />} />
          <Route path="/step-3" element={<ReadyPage name={name} email={email} text={text} avartar={avartar} option={option} selectedType={selectedType} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
