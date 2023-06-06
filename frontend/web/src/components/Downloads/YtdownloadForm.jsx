import React, { useState } from "react";
import { SubmitYtLink } from "../../data/api";

export default function YtdownloadForm() {
  const [linkData, setLinkData] = useState({ link: "" });
  const [warning, setWarning] = useState({
    show: false,
    text: "",
  });
  const [ytFormats, setYtFormats] = useState({
    formats: [],
    thumbnail: "",
    fetched: false,
  });

  function formHandler(event) {
    const { name, value } = event.target;
    setLinkData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  async function uploadForm(event) {
    event.preventDefault();

    const youtubeRegex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?=.*v=[\w-]+)(?:\S+)?|embed\/[\w-]+|v\/[\w-]+|ytscreeningroom\?v=[\w-]+)|youtu\.be\/([\w-]+))(?:\S+)?$/;

    if (youtubeRegex.test(linkData.link)) {
      setWarning((prev) => ({ ...prev, show: false }));
    } else {
      console.log("Invalid YouTube link");
      setWarning((prev) => ({
        ...prev,
        show: true,
        text: "Invalid YouTube link",
      }));
      await new Promise((resolve) =>
        setTimeout(() => {
          setWarning((prev) => ({ ...prev, show: false }));
          resolve();
        }, 5000)
      );
      return;
    }

    try {
      const response = await SubmitYtLink(linkData);
      // console.log(response);
      setYtFormats((prev) => ({
        ...prev,
        formats: response.formats,
        thumbnail: response.thumbnail,
        fetched: true,
      }));
    } catch (error) {
      console.error(error);
    }
  }

  // async function fetchDownloadStream(itag, audio) {
  //   const downloadResponse = await downloadYtVideo(itag, audio, linkData.link);

  //   const blob = new Blob([downloadResponse.data], {
  //     type: "video/mp4",
  //   });
  //   const link = window.URL.createObjectURL(blob);
  //   console.log(link);
  // }

  // console.log(ytFormats.formats);

  return (
    <div className="mt-[100px] flex flex-col mx-auto text-center">
      <h1 className="font-inter text-[35px]">
        Download Youtube Videos in a Snap!
      </h1>
      <p className="font-poppins">
        Paste the Youtube link below, and our app will quickly convert and
        download the video for you to enjoy offline, anytime, anywhere.
      </p>
      <div className="bg-bgLight py-20 w-[95%] mx-auto rounded-lg mt-10">
        <form className="flex flex-col gap-10" onSubmit={uploadForm}>
          <input
            placeholder="Paste Your Link Here"
            className=" bg-bgColor px-5 py-3 border border-gray-600 rounded-lg w-[70%] mx-auto shadow-md"
            name="link"
            onChange={formHandler}
            value={linkData.link}
          />
          {warning.show && <p>{warning.text}</p>}
          <button
            className="bg-lightPurple w-[150px] py-3 rounded-lg shadow-lg mx-auto"
            type="submit"
          >
            Download
          </button>
        </form>
      </div>

      {ytFormats.fetched && (
        <p className=" font-inter mt-2 w-[95%] mx-auto text-[15px] bg-bgLight p-5 rounded-sm shadow-md">
          Due to some issues audio is not availaible for high quality videos for
          youtube , will soon add feature to merge audio and video in realtime
          or if you have something better in mind you can contribute at <br />
          <a
            href="https://github.com/shobhitexe/ClipCatcher"
            target="_blank"
            rel="noopener noreferrer"
            className=" font-poppins"
          >
            https://github.com/shobhitexe/ClipCatcher
          </a>
        </p>
      )}

      {ytFormats.fetched && (
        <div className="flex md:flex-row flex-col gap-10 mx-auto mt-[10px] justify-between bg-bgLight p-10 shadow-lg items-center">
          <img
            className="w-[200px] h-[113px]"
            src={ytFormats.thumbnail}
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="px-5 py-2 bg-bgLight font-poppins text-[20px]">
              Download{" "}
            </h1>
            {ytFormats.formats.map((format) => {
              const contentLengthBytes = format.contentLength;

              const contentLength =
                contentLengthBytes >= 1024 * 1024 * 1024
                  ? (contentLengthBytes / (1024 * 1024 * 1024)).toFixed(2) +
                    " GB"
                  : (contentLengthBytes / (1024 * 1024)).toFixed(2) + " MB";

              return (
                <div
                  className="flex gap-10 bg-bgColor ss:p-5 p-3 font-inter justify-between"
                  key={format.itag}
                >
                  <h1>{format.qualityLabel}</h1>
                  <p>{contentLength}</p>
                  <button
                    className="bg-lightPurple ss:px-3 px-2 py-1 shadow-md rounded-sm"
                    onClick={() => window.open(format.url, "_blank")}
                  >
                    Download
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
