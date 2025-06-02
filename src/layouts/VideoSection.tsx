const videos = [
  {
    id: 1,
    title: "Cuộc đời và sự nghiệp của Bác Hồ",
    thumbnail: "/thumbnails/thumbnail1.jpg",
    videoUrl: "https://www.youtube.com/embed/cxKnRdHQIm4?si=0j8idoBOvTxHNOsE",
  },
  {
    id: 2,
    title: "Tư tưởng Hồ Chí Minh trong thời đại mới",
    thumbnail: "/thumbnails/thumbnail2.jpg",
    videoUrl: "https://www.youtube.com/embed/k60QAeDT56M?si=5w0h-UqnQcJfgdA2",
  },
  {
    id: 3,
    title: "Hồ Chí Minh và nền ngoại giao Việt Nam",
    thumbnail: "/thumbnails/thumbnail3.jpg",
    videoUrl: "https://www.youtube.com/embed/qAtIkz2kJFE",
  },
];

export default function VideoSection() {
  return (
    <section id="videos" className="video-section section">
      <h2 className="section-title fade-in">Video Tư Liệu</h2>

      <div className="video-hero slide-up">
        <iframe src={videos[0].videoUrl} frameBorder="0" allowFullScreen loading="lazy"></iframe>
        <div className="hero-caption">
          <h3>{videos[0].title}</h3>
        </div>
      </div>

      <div className="video-gallery">
        {videos.slice(1).map((video) => (
          <div className="video-card slide-up" key={video.id}>
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="play-button">
                ▶
              </a>
            </div>
            <h4>{video.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
