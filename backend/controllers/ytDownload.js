import ytdl from "ytdl-core";

async function getLinkData(req, res) {
  const link = req.body.link;

  const info = await ytdl.getInfo(link);

  const filteredFormats = info.formats.filter(
    (format) =>
      format.container === "mp4" && format.hasVideo && !format.hasAudio
  );

  const thumbnail = info.videoDetails.thumbnails[0].url;

  res.send({ formats: filteredFormats, thumbnail: thumbnail });
}

async function downloadYtVideo(req, res) {
  const info = await ytdl.getInfo(req.body.link);

  const format = info.formats.find((format) => format.itag === req.body.itag);

  if (format) {
    const videoReadableStream = ytdl(req.body.link, { format });

    res.setHeader("Content-Disposition", `attachment; filename="filename.mp4"`);
    res.setHeader("Content-Type", "video/mp4");

    const videoSize = format.contentLength;

    res.setHeader("Content-Length", videoSize);

    videoReadableStream.pipe(res);
  } else {
    throw new Error("No format found with the specified itag");
  }
}

export { getLinkData, downloadYtVideo };
