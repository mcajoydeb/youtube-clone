import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  if (!video) return null;

  return (
    <div className="cursor-pointer">
      <img
        src={video?.thumbnailUrl || "https://via.placeholder.com/300"}
        alt="thumbnail"
        className="w-full rounded-lg"
      />

      <div className="mt-2 text-white">
        <h3 className="font-semibold text-sm">
          {video?.title || "No Title"}
        </h3>

        <p className="text-gray-400 text-xs">
          {video?.channelName || "Unknown"}
        </p>

        <p className="text-gray-400 text-xs">
          {video?.views || 0} views
        </p>
      </div>
    </div>
  );
};