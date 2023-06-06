import React, { useState } from "react";
import { submitInstaData } from "../../data/api";

export default function InstaDownloadForm() {
  const [linkData, setLinkData] = useState({ link: "" });

  function formHandler(event) {
    const { name, value } = event.target;
    setLinkData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  async function uploadInstaData(event) {
    event.preventDefault();
    const response = await submitInstaData(linkData);
  }

  return (
    <div className="mt-[100px] flex flex-col mx-auto text-center">
      <h1 className="font-inter text-[35px]">
        Download Instagram Videos in a Snap!
      </h1>
      <p className="font-poppins">
        Paste the Instagram link below, and our app will quickly convert and
        download the video for you to enjoy offline, anytime, anywhere.
      </p>
      <div className="bg-bgLight py-20 w-[95%] mx-auto rounded-lg mt-10">
        <form className="flex flex-col gap-10" onSubmit={uploadInstaData}>
          <input
            placeholder="Paste Your Link Here"
            className=" bg-bgColor px-5 py-3 border border-gray-600 rounded-lg w-[70%] mx-auto shadow-md"
            name="link"
            onChange={formHandler}
            value={linkData.link}
          />
          <button
            className="bg-lightPurple w-[150px] py-3 rounded-lg shadow-lg mx-auto"
            type="submit"
          >
            Download
          </button>
        </form>
      </div>
    </div>
  );
}
