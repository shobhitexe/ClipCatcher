import axios from "axios";

export async function SubmitLink(data) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/getYoutubeData",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function downloadYtVideo(itag, audio, link) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/downloadYtVideo",
      { itag, audio, link },
      {
        responseType: "blob",
        onDownloadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log(`Download progress: ${percentCompleted}%`);
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}
