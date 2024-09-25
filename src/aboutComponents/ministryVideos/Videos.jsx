import React, { useState } from "react";
import "./videos.css";

const Videos = () => {
  const [toggleState, setToggleState] = useState(0);
  const [visibleVideos, setVisibleVideos] = useState(3);

  const handleVieMore = () => {
    setVisibleVideos((prev) => prev + 5);
  };

  const handleViewLess = () => {
    setVisibleVideos((prev) => prev - 5);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const videoData = [
    {
      id: 1,
      title: "Video 1",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 2,
      title: "Video 2",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 3,
      title: "Video 3",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 4,
      title: "Video 4",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 5,
      title: "Video 5",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 6,
      title: "Video 6",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 7,
      title: "Video 7",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 8,
      title: "Video 9",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 9,
      title: "Video 10",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 10,
      title: "Video 11",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 11,
      title: "Video 11",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 12,
      title: "Video 12",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 13,
      title: "Video 13",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 14,
      title: "Video 14",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
    {
      id: 15,
      title: "Video 15",
      url: "https://www",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.",
    },
  ];

  return (
    <section className="service section" id="videos">
      <h2 className="section__title">Videos</h2>
      <span className="section__subtitle">
        Watch inspiring videos that would motivate your inner sight
      </span>

      <div className="videos__container container grid">
        {videoData.slice(0, visibleVideos).map((video) => (
          <div className="videos__content" key={video.id}>
            <div className="videos__content__iframeContianer">
              <iframe
                className="videos__icon"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="videos__title">{video.title}</h3>
            </div>

            <span className="videos__button" onClick={() => toggleTab(2)}>
              Read more <i className="uil uil-arrow-right videos__button"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "videos__modal active-modal"
                  : "videos__modal"
              }
            >
              <div className="videos__modal-content">
                <i
                  className="uil uil-times videos__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>

                <h3 className="videos__modal-title">{video.title}</h3>
                <p className="videos__modal-description">{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="videos__container container grid">
        <div className="videos__content">
          <div className="videos__content__iframeContianer">
            <iframe
              className="videos__icon"
              src="https://www.youtube.com/embed/your_video_id_2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="videos__title">Title of Video 2</h3>
          </div>

          <span className="videos__button" onClick={() => toggleTab(2)}>
            Read more <i className="uil uil-arrow-right videos__button"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "videos__modal active-modal" : "videos__modal"
            }
          >
            <div className="videos__modal-content">
              <i
                className="uil uil-times videos__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="videos__modal-title">Title of Video 2</h3>
              <p className="videos__modal-description">
                Full description of Video 2. This can be a longer text that
                provides more detail about the content of the video.
              </p>
            </div>
          </div>
        </div>

        <div className="videos__content">
          <div className="videos__content__iframeContianer">
            <iframe
              className="videos__icon"
              src="https://www.youtube.com/embed/your_video_id_3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="videos__title">Title of Video 3</h3>
          </div>

          <span className="videos__button" onClick={() => toggleTab(3)}>
            Read more <i className="uil uil-arrow-right videos__button"></i>
          </span>

          <div
            className={
              toggleState === 3 ? "videos__modal active-modal" : "videos__modal"
            }
          >
            <div className="videos__modal-content">
              <i
                className="uil uil-times videos__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="videos__modal-title">Title of Video 3</h3>
              <p className="videos__modal-description">
                Full description of Video 3. This can be a longer text that
                provides more detail about the content of the video.
              </p>
            </div>
          </div>
        </div>

        <div className="videos__content">
          <div className="videos__content__iframeContianer">
            <iframe
              className="videos__icon"
              src="https://www.youtube.com/embed/your_video_id_3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="videos__title">Title of Video 3</h3>
          </div>

          <span className="videos__button" onClick={() => toggleTab(3)}>
            Read more <i className="uil uil-arrow-right videos__button"></i>
          </span>

          <div
            className={
              toggleState === 3 ? "videos__modal active-modal" : "videos__modal"
            }
          >
            <div className="videos__modal-content">
              <i
                className="uil uil-times videos__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="videos__modal-title">Title of Video 3</h3>
              <p className="videos__modal-description">
                Full description of Video 3. This can be a longer text that
                provides more detail about the content of the video.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Videos;
