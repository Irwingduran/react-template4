import React from "react";

const VideoComponent = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h3 className="text-xl my-6 sm:my-8 font-semibold text-[#020043] border border-[#020043] rounded-full px-8 py-2 w-fit mx-auto sm:mx-0">
        Youtube
      </h3>
      <h1 className="text-2xl sm:text-3xl lg:text-5xl text-[#020043] font-bold text-center sm:text-left my-4 sm:my-6">
        ¿Qué hace un cirujano Bariátra?
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/yKfrmDnNt-c?si=fSACc5570FDmCTcT"
              title="YouTube video player"
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
