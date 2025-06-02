// import { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Cuộc đời và sự nghiệp của Bác Hồ",
    thumbnail: "https://img.youtube.com/vi/cxKnRdHQIm4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/cxKnRdHQIm4",
  },
  {
    id: 2,
    title: "Tư tưởng Hồ Chí Minh trong thời đại mới",
    thumbnail: "https://img.youtube.com/vi/k60QAeDT56M/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/k60QAeDT56M",
  },
  {
    id: 3,
    title: "Hồ Chí Minh và nền ngoại giao Việt Nam",
    thumbnail: "https://img.youtube.com/vi/XvXT476mPQ4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/XvXT476mPQ4",
  },
];

export default function VideoSection() {
  return (
    <section id="videos" className="video-section section">
      <h2 className="section-title fade-in">Video Tư Liệu</h2>

      <div className="video-hero slide-up">
        <iframe 
          src={videos[0].videoUrl} 
          frameBorder="0" 
          allowFullScreen 
          loading="lazy"
          title={videos[0].title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="hero-caption">
          <h3>{videos[0].title}</h3>
        </div>
      </div>

      <div className="video-gallery">
        {videos.slice(1).map((video) => (
          <div className="video-card slide-up" key={video.id}>
            <div className="video-thumbnail">
              <iframe 
                src={video.videoUrl} 
                frameBorder="0" 
                allowFullScreen 
                loading="lazy"
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <h4>{video.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
