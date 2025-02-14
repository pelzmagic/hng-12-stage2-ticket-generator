import { useNavigate } from "react-router-dom";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function ReadyPage({ name, email, text, avartar, option, selectedType }) {
  const navigate = useNavigate();

  return (
    <div className="max-w-[700px] mx-auto bg-cardColor mt-[46px] rounded-[40px] px-12 py-12">
      <div className="flex justify-between items-center">
        <p className="font-jeju text-[32px] text-white">Ready!</p>
        <p className="font-roboto text-base leading-[150%] text-grey">Step 3/3</p>
      </div>
      <hr className="border border-deepgreen mt-3" />
      <h1 className="font-alatsi text-[32px] text-white text-center mt-[27.5px]">Your Ticket is Booked!</h1>
      <p className="font-roboto text-base leading-[150%] text-grey text-center mt-4">Check your email for a copy or you can download</p>
      <div className="py-8 mt-8">
        <div className="bg-[url('./Subtract.png')] bg-no-repeat max-w-[300px] mx-auto px-5 pt-5 pb-[22px]">
          <div className="p-3.5 bg-frame rounded-2xl">
            <h1 className="font-rage text-[34px] text-white text-center">Techember Fest &quot;25</h1>
            <p className="font-roboto text-[10px] leading-[150%] text-white text-center">📍 04 Rumens road, Ikoyi, Lagos</p>
            <p className="font-roboto text-[10px] leading-[150%] text-white text-center">📆March 15, 2025|7:00PM</p>
            <div className="w-[140px] h-[140px] border-4 border-button rounded-xl mt-5 mx-auto">
              {" "}
              {avartar ? <img src={avartar} alt="Avatar" className="w-full h-full object-cover rounded-xl" /> : <span className="text-grey">No image</span>}
            </div>
            <div className="border border-table grid grid-rows-3 grid-cols-2 rounded-lg mt-5">
              <div className="border border-table p-1 max-h-[45px]">
                <p className="font-roboto text-[10px] leading-[150%] text-white">Enter your name</p>
                <p className="font-roboto text-xs leading-[150%] font-bold text-white">{name}</p>
              </div>
              <div className="border border-table p-1 max-h-[45px] space-y-1">
                <p className="font-roboto text-[10px] leading-[150%] text-white">Enter your email*</p>
                <p className="font-roboto text-xs leading-[150%] font-bold text-white truncate text-ellipsis">{email}</p>
              </div>
              <div className="border border-table p-1 max-h-[45px] space-y-1">
                <p className="font-roboto text-[10px] leading-[150%] text-white">Ticket Type:</p>
                <p className="font-roboto text-xs leading-[150%] font-bold text-white">{selectedType}</p>
              </div>
              <div className="border border-table p-1 max-h-[45px] space-y-1">
                <p className="font-roboto text-[10px] leading-[150%] text-white">Ticket for:</p>
                <p className="font-roboto text-xs leading-[150%] font-bold text-white">{option}</p>
              </div>
              <div className="border border-table p-1 h-auto col-span-2 space-y-1 max-h-[65px] line-clamp-2">
                <p className="font-roboto text-[10px] leading-[150%] text-white">Special request?</p>
                <p className="font-roboto text-xs leading-[150%] text-white">{text}</p>
              </div>
            </div>
          </div>
          <div className="mt-11">
            <img src="./Bar Code.png" alt="Bar code" className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <Button className="w-[47%] text-button border border-deepgreen rounded-xl" onClick={() => navigate("/step-2")}>
          Book Another Ticket
        </Button>
        <Button className="w-[47%] text-white border border-deepgreen rounded-xl bg-button">Download Ticket</Button>
      </div>
    </div>
  );
}
