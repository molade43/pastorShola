import React, { useState } from "react";

const Frontend = () => {
  const [visibleAudios, setVisibleAudios] = useState(5);

  const handleViewMore = () => {
    setVisibleAudios((prev) => prev + 5);
  };

  const handleViewLess = () => {
    setVisibleAudios(5);
  };

  const audioData = [
    { id: 1, title: "Audio Title 1", src: "path/to/your/audio1.mp3" },
    { id: 2, title: "Audio Title 2", src: "path/to/your/audio2.mp3" },
    { id: 3, title: "Audio Title 3", src: "path/to/your/audio3.mp3" },
    { id: 4, title: "Audio Title 4", src: "path/to/your/audio4.mp3" },
    { id: 5, title: "Audio Title 5", src: "path/to/your/audio5.mp3" },
    { id: 6, title: "Audio Title 6", src: "path/to/your/audio6.mp3" },
    { id: 7, title: "Audio Title 7", src: "path/to/your/audio7.mp3" },
    { id: 8, title: "Audio Title 8", src: "path/to/your/audio8.mp3" },
    { id: 9, title: "Audio Title 9", src: "path/to/your/audio9.mp3" },
    { id: 10, title: "Audio Title 10", src: "path/to/your/audio10.mp3" },
    { id: 11, title: "Audio Title 11", src: "path/to/your/audio10.mp3" },
    { id: 12, title: "Audio Title 12", src: "path/to/your/audio10.mp3" },
    { id: 13, title: "Audio Title 13", src: "path/to/your/audio10.mp3" },
    { id: 14, title: "Audio Title 14", src: "path/to/your/audio10.mp3" },
    { id: 15, title: "Audio Title 15", src: "path/to/your/audio10.mp3" },
    { id: 16, title: "Audio Title 16", src: "path/to/your/audio10.mp3" },
    { id: 17, title: "Audio Title 17", src: "path/to/your/audio10.mp3" },
    { id: 18, title: "Audio Title 18", src: "path/to/your/audio10.mp3" },
    { id: 19, title: "Audio Title 19", src: "path/to/your/audio10.mp3" },
    { id: 20, title: "Audio Title 20", src: "path/to/your/audio10.mp3" },
    { id: 21, title: "Audio Title 21", src: "path/to/your/audio10.mp3" },
    { id: 22, title: "Audio Title 22", src: "path/to/your/audio10.mp3" },
    { id: 23, title: "Audio Title 23", src: "path/to/your/audio10.mp3" },
    { id: 24, title: "Audio Title 24", src: "path/to/your/audio10.mp3" },
    { id: 25, title: "Audio Title 25", src: "path/to/your/audio10.mp3" },
    { id: 26, title: "Audio Title 26", src: "path/to/your/audio10.mp3" },
    { id: 27, title: "Audio Title 27", src: "path/to/your/audio10.mp3" },
    { id: 28, title: "Audio Title 28", src: "path/to/your/audio10.mp3" },
    { id: 29, title: "Audio Title 29", src: "path/to/your/audio10.mp3" },
    { id: 30, title: "Audio Title 30", src: "path/to/your/audio10.mp3" },
    { id: 31, title: "Audio Title 31", src: "path/to/your/audio10.mp3" },
    { id: 32, title: "Audio Title 32", src: "path/to/your/audio10.mp3" },
    { id: 33, title: "Audio Title 33", src: "path/to/your/audio10.mp3" },
    { id: 34, title: "Audio Title 34", src: "path/to/your/audio10.mp3" },
    { id: 35, title: "Audio Title 35", src: "path/to/your/audio10.mp3" },
    { id: 36, title: "Audio Title 36", src: "path/to/your/audio10.mp3" },
    { id: 37, title: "Audio Title 37", src: "path/to/your/audio10.mp3" },
    { id: 38, title: "Audio Title 38", src: "path/to/your/audio10.mp3" },
    { id: 39, title: "Audio Title 39", src: "path/to/your/audio10.mp3" },
    { id: 40, title: "Audio Title 40", src: "path/to/your/audio10.mp3" },
    { id: 41, title: "Audio Title 41", src: "path/to/your/audio10.mp3" },
    { id: 42, title: "Audio Title 42", src: "path/to/your/audio10.mp3" },
    { id: 43, title: "Audio Title 43", src: "path/to/your/audio10.mp3" },
    { id: 44, title: "Audio Title 44", src: "path/to/your/audio10.mp3" },
    { id: 45, title: "Audio Title 45", src: "path/to/your/audio10.mp3" },
  ];

  return (
    <div className="audio__content">
      <h3 className="audio__title">Uplifting Audio</h3>

      <div className="audio__group">
        {audioData.slice(0, visibleAudios).map((audio) => (
          <div className="audio__data" key={audio.id}>
            <i className="bx bx-badge-check"></i>
            <div className="audio__play__box">
              <audio className="audio__name" controls>
                <source src={audio.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <span className="audio__level">{audio.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="viewMoreContainer">
        {visibleAudios < audioData.length && (
          <a className="audio__viewMore" onClick={handleViewMore}>
            view more
          </a>
        )}

        {visibleAudios >= audioData.length && (
          <a className="audio__viewLess" onClick={handleViewLess}>
            view less
          </a>
        )}

        <i className="uil uil-arrow-down scrolldown__icon"></i>
      </div>
    </div>
  );
};

export default Frontend;
