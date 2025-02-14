export default function NavBar() {
  return (
    <div className="w-[83%] mx-auto border border-deepgreen flex justify-between items-center p-4 mt-6 rounded-3xl">
      <div className="flex gap-2">
        <img src="./Vector.png" alt="logo"></img>
        <img src="./ticz.png" alt="logo"></img>
      </div>
      <nav className="flex w-[29%] justify-between">
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
