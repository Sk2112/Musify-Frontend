import { useState } from "react";
import Navbar from "../Components/Navbar";
import UplaodingImage from "../assets/Images/Uploading.png";
import SittingBoyImage from "../assets/Images/Sitting-boy.png";
import { FileUpload } from "../Components/file-upload";
import axios from "axios";
import { MultiStepLoader as Loader } from "../Components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
// import toast from "react-hot-toast";


const loadingStates = [
  { text: "Uploading file To Cloud..." },
  { text: "Saving metadata..." },
  { text: "Processing..." },
  { text: "Almost done..." },
  { text: "Upload complete" },
];

const MusicUpload = () => {
  const [songName, setSongName] = useState("");

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!file || !songName) {
    alert("Please select a file and enter a title");
    return;
  }

  try {
    setLoading(true);

    const formData = new FormData();
    formData.append("title", songName); // backend expects @RequestPart("title")
    formData.append("file", file);      // backend expects @RequestPart("file")

    const response = await axios.post(
      "http://localhost:8080/api/music/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("✅ Upload successful:", response.data);
    alert("Song uploaded successfully!");

    // reset after success
    setSongName("");
    setFile(null);
  } catch (error) {
    console.error("❌ Error uploading file:", error);
    alert("Failed to upload song");
  } finally {
  setTimeout(() => setLoading(false), 1500); 
}
};



  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fdc7e2] to-[#fdc7b2] overflow-hidden">
      <div className="sticky top-0">
        <Navbar />
      </div>

      {/* Loader overlay */}
      {/* <Loader loadingStates={loadingStates} loading={loading} duration={1500} /> */}
      <Loader 
  loadingStates={loadingStates} 
  loading={loading} 
  duration={1500} 
  loop={false}   // important
/>

      <div className="relative lg:h-screen flex lg:flex-row justify-around items-center px-6 gap-10 sm:flex-row">
        <div className="flex flex-col border-2 border-white/40 shadow-lg backdrop-blur-md bg-white/30 p-8 rounded-2xl w-full lg:w-2/5">
          <h2 className="text-3xl font-bold text-center mb-6">
            🎵 Song Upload Form
          </h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Song Name"
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
              className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
              disabled={loading}
            />
          

            <FileUpload onChange={(files) => setFile(files[0])} />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-pink-400 hover:bg-pink-500"
              } text-white font-bold py-2 px-4 rounded-lg mt-4`}
            >
              {loading ? "Uploading..." : "Upload Song"}
            </button>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="flex md:flex-col lg:flex-col sm:flex-col-reverse mb-40">
          <img
            src={UplaodingImage}
            alt="Uploading Illustration"
            className="max-w-xs md:max-w-md drop-shadow-lg lg:w-70"
          />
          <img
            src={SittingBoyImage}
            alt="Sitting Boy Illustration"
            className="max-w-xs md:max-w-md drop-shadow-lg"
          />
        </div>
      </div>

      {/* Optional cancel loader button */}
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
};

export default MusicUpload;
