// components/VideoGrid.jsx
import VideoCard from "./VideoCard";

const videos = [
  {
    id: "1",
    title: "Learn React",
    thumbnail: "https://via.placeholder.com/200",
    channel: "Code",
    views: "10K",
  },
];

const VideoGrid = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
};

export default VideoGrid;