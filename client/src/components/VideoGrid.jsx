import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/video/${video._id}`)}
      className="cursor-pointer"
    >
      <img
        src={video?.thumbnailUrl}
        className="w-full rounded-lg"
      />

      <div className="mt-2 text-white">
        <h3 className="font-semibold text-sm line-clamp-2">
          {video?.title}
        </h3>

        <p className="text-gray-400 text-xs">
          {video?.channelName}
        </p>

        <p className="text-gray-400 text-xs">
          {video?.views} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;