import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function AttendeeDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

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
            <input
              type="text"
              className="w-full px-3 py-3 bg-deepergreen rounded-xl text-grey font-jeju outline-none border border-deepgreen"
              value={name}
              onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className="border border-blue-500 space-y-2">
            <label className="block font-roboto text-base leading-[150%] text-grey">Enter your email *</label>
            <input
              type="email"
              className="w-full px-3 py-3 bg-deepergreen rounded-xl text-grey font-jeju outline-none border border-deepgreen"
              value={email}
              onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="border border-blue-500 space-y-2">
            <label className="block font-roboto text-base leading-[150%] text-grey">Special request?</label>
            <textarea
              placeholder="Textarea"
              className="w-full px-3 py-3 bg-deepergreen rounded-xl text-grey font-jeju outline-none border border-deepgreen h-[127px]"
              value={text}
              onChange={(e) => setText(e.target.value)}></textarea>
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
