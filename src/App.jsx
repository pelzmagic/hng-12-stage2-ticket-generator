import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

function NavBar() {
  return (
    <div className="w-[83%] mx-auto border border-blue-500 flex justify-between items-center p-4 mt-6">
      <div className="flex gap-2">
        <img src="./Vector.png" alt="logo"></img>
        <img src="./ticz.png" alt="logo"></img>
      </div>
      <nav className="flex border border-blue-500 w-[29%] justify-between">
        <p className="text-lg text-white font-jeju">Events</p>
        <p className="text-lg text-white font-jeju">My Tickets</p>
        <p className="text-lg text-white font-jeju">About Project</p>
      </nav>
      <div className="bg-white flex gap-2 rounded-xl px-6 py-4">
        <p>MY TICKETS</p>
        <button>
          <img src="./Line 5.png" alt="arrow"></img>
        </button>
      </div>
    </div>
  );
}

function Card() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[700px] mx-auto bg-cardColor mt-[46px] rounded-[40px] px-12 py-12">
      <div className="flex justify-between items-center">
        <p className="font-jeju text-[32px] text-white">Ticket Selection</p>
        <p className="font-roboto text-base leading-[150%] text-grey">Step 1/3</p>
      </div>
      <hr className="border border-deepgreen mt-3" />
      <div className="bg-secondary px-6 py-6 rounded-[32px] space-y-8 mt-8">
        <div className="bg-[radial-gradient(circle,#0A0C11, #07373F)] space-y-2 px-6 py-6 border border-deepgreen rounded-3xl">
          <h1 className="font-rage text-[62px] leading-[100%] text-grey text-center">Techember Fest &quot;25</h1>
          <p className="font-roboto text-base leading-[150%] text-grey w-[61%] mx-auto text-center">Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
          <p className="font-roboto text-base leading-[150%] text-grey text-center">📍 [Event Location] || March 15, 2025 | 7:00PM</p>
        </div>
        <hr className="border border-deepgreen" />
        <div>
          <p className="text-base text-grey leading-[150%] font-roboto">Select Ticket Type:</p>
          <div className="p-4 border border-deepgreen rounded-3xl flex justify-between mt-2">
            <TicketType price="Free" type="REGULAR ACCESS" date="20/52" />
            <TicketType price="$150" type="VIP ACCESS" date="20/52" />
            <TicketType price="$150" type="VVIP ACCESS" date="20/52" />
          </div>
        </div>
        <div>
          <form>
            <label className="block text-base text-grey leading-[150%] font-roboto">Number of Tickets</label>
            <select className="w-full mt-2 p-3  bg-deepergreen border border-deepgreen text-white rounded-xl outline-none">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
        </div>
        <div className="flex justify-between">
          <Button className="w-[47%] text-button border border-deepgreen rounded-xl">Cancel</Button>
          <Button className="w-[47%] text-white bg-button rounded-xl" onClick={() => navigate("/step-2")}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function TicketType({ price, type, date }) {
  return (
    <div className="p-3 bg-darkgreen rounded-xl flex flex-col gap-3 w-[161px] border-2 border-deepgreen">
      <p className="text-white font-roboto text-2xl leading-[110%]">{price}</p>
      <div>
        <p className="font-roboto leading-[150%] text-base text-grey">{type}</p>
        <p className="font-roboto leading-[150%] text-base text-grey">{date}</p>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Button({ children, className = "", onClick }) {
  return (
    <button className={`px-6 py-3 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

function AttendeeDetails() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[700px] mx-auto bg-cardColor mt-[46px] rounded-[40px] px-12 py-12">
      <div className="flex justify-between items-center">
        <p className="font-jeju text-[32px] text-white">Attendee Details</p>
        <p className="font-roboto text-base leading-[150%] text-grey">Step 2/3</p>
      </div>
      <hr className="border border-deepgreen mt-3" />
      <div className="bg-secondary px-6 py-6 rounded-[32px] space-y-8 mt-8">
        <div className="px-6 pt-6 pb-12 rounded-3xl bg-darkgreen border border-deepergreen  space-y-8 relative">
          <p className="font-roboto text-base leading-[150%] text-grey">Upload Profile Photo</p>
          <div className="bg-deepergreen h-48 border border-red-500"></div>
          <div className="px-6 py-6 w-[240px] h-60 border-4 border-button bg-black flex items-center rounded-[32px] absolute top-5 left-1/2 -translate-x-1/2">
            <div className="border border-red-500 space-y-4">
              <img src="./icon.png" alt="download icon" className="border border-blue-500 mx-auto"></img>
              <p className="font-roboto text-base leading-[150%] text-grey text-center">Drag & drop or click to upload</p>
            </div>
          </div>
        </div>
        <hr className="border border-deepgreen" />
        <form className="border border-red-500 space-y-8">
          <div className="border border-blue-500 space-y-2">
            <label className="block font-roboto text-base leading-[150%] text-grey">Enter your name</label>
            <input type="text" className="w-full px-3 py-3 bg-deepergreen rounded-xl text-grey font-jeju outline-none border border-deepgreen"></input>
          </div>
          <div className="border border-blue-500 space-y-2">
            <label className="block font-roboto text-base leading-[150%] text-grey">Enter your email *</label>
            <input type="email" className="w-full px-3 py-3 bg-deepergreen rounded-xl text-grey font-jeju outline-none border border-deepgreen"></input>
          </div>
          <div className="border border-blue-500 space-y-2">
            <label className="block font-roboto text-base leading-[150%] text-grey">Special request?</label>
            <textarea placeholder="Textarea" className="w-full px-3 py-3 bg-deepergreen rounded-xl text-grey font-jeju outline-none border border-deepgreen h-[127px]"></textarea>
          </div>
        </form>
        <div className="border border-red-500 flex justify-between">
          <Button className="w-[47%] text-button border border-deepgreen rounded-xl">Back</Button>
          <Button className="w-[47%] text-white bg-button rounded-xl" onClick={() => navigate("/step-3")}>
            Get My Free Ticket
          </Button>
        </div>
      </div>
    </div>
  );
}
export default App;
