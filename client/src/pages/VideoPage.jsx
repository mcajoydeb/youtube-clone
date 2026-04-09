// pages/VideoPage.jsx
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Video {id}</h2>

      <iframe
        width="800"
        height="400"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="video"
      />

      <h3>Video Title</h3>
      <p>Description</p>
    </div>
  );
};

export default VideoPage;