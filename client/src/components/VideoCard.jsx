// components/VideoCard.jsx
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/video/${video.id}`)} style={{ cursor: "pointer", width: "200px" }}>
      
      <img src={video.thumbnail} width="100%" />

      <h4>{video.title}</h4>
      <p>{video.channel}</p>
      <p>{video.views} views</p>

    </div>
  );
};

export default VideoCard;