import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function AttendeeDetails({ name, setName, email, setEmail, text, setText, avartar, setAvartar }) {
  const [uploading, setUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const navigate = useNavigate();

  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/do2qcige7/image/upload";
  const UPLOAD_PRESET = "first_time_using_cloudinary";

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_URL, formData);
      setAvartar(response.data.secure_url);
      setIsUploaded(true);
    } catch (error) {
      console.error("Upload Error:", error);
    } finally {
      setUploading(false);
    }
  };

  function isText(value) {
    return /^[A-Za-z\s]+$/.test(value.trim());
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isText(name)) {
      toast.error("Please enter a valid name (letters only).");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    // eslint-disable-next-line react/prop-types
    if (!text.trim()) {
      toast.error("Message field cannot be empty.");
      return;
    }

    toast.success("Form submitted successfully!");
    return true;
  };

  return (
    <div className="max-w-[700px] mx-auto bg-cardColor mt-[46px] rounded-[40px] px-12 py-12">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex justify-between items-center">
        <p className="font-jeju text-[32px] text-white">Attendee Details</p>
        <p className="font-roboto text-base leading-[150%] text-grey">Step 2/3</p>
      </div>
      <hr className="border border-deepgreen mt-3" />
      <div className="bg-secondary px-6 py-6 rounded-[32px] space-y-8 mt-8">
        <div className="px-6 pt-6 pb-12 rounded-3xl bg-darkgreen border border-deepergreen  space-y-8 relative">
          <p className="font-roboto text-base leading-[150%] text-grey">Upload Profile Photo</p>
          <div className="bg-deepergreen h-48">{avartar ? <img src={avartar} alt="Avartar" className="w-full h-full object-cover" /> : <span className="text-grey">No image uploaded</span>}</div>

          {!isUploaded && (
            <div className="px-6 py-6 w-[240px] h-60 border-4 border-button bg-black flex items-center rounded-[32px] absolute top-5 left-1/2 -translate-x-1/2">
              <label htmlFor="avatarUpload" className="cursor-pointer flex flex-col items-center space-y-4">
                <img src="./icon.png" alt="Upload icon" className="mx-auto w-12"></img>
                <p className="font-roboto text-base leading-[150%] text-grey text-center">{uploading ? "Uploading..." : "Drag & drop or click to upload"}</p>
              </label>
              <input type="file" id="avatarUpload" className="hidden" accept="image/*" onChange={handleImageUpload}></input>
            </div>
          )}
        </div>

        <hr className="border border-deepgreen" />

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block font-roboto text-base leading-[150%] text-grey">Enter your name</label>
            <input
              type="text"
              className="w-full px-3 py-3 bg-deepergreen rounded-xl text-grey font-jeju outline-none border border-deepgreen"
              value={name}
              onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className="space-y-2">
            <label className="block font-roboto text-base leading-[150%] text-grey">Enter your email *</label>
            <input
              type="email"
              className="w-full px-3 py-3 bg-deepergreen rounded-xl text-grey font-jeju outline-none border border-deepgreen"
              value={email}
              onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="space-y-2">
            <label className="block font-roboto text-base leading-[150%] text-grey">Special request?</label>
            <textarea
              placeholder="Textarea"
              className="w-full px-3 py-3 bg-deepergreen rounded-xl text-grey font-jeju outline-none border border-deepgreen h-[127px]"
              value={text}
              onChange={(e) => setText(e.target.value)}></textarea>
          </div>
        </form>
        <div className="flex justify-between">
          <Button className="w-[47%] text-button border border-deepgreen rounded-xl">Back</Button>
          <Button
            className="w-[47%] text-white bg-button rounded-xl"
            onClick={(e) => {
              if (handleSubmit(e)) {
                setTimeout(() => {
                  navigate("/step-3"); // Navigate only if validation passes
                }, 1000);
              }
            }}>
            Get My Free Ticket
          </Button>
        </div>
      </div>
    </div>
  );
}
