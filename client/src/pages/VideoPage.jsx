import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const VideoPage = () => {
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await API.get(`/videos/${id}`);
      setVideo(res.data);
    };
    fetchVideo();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await API.get(`/comments/${id}`);
      setComments(res.data);
    };
    fetchComments();
  }, [id]);

  const addComment = async () => {
    await API.post("/comments", { videoId: id, text: comment });
    setComment("");

    const res = await API.get(`/comments/${id}`);
    setComments(res.data);
  };

  if (!video) return <p className="text-white">Loading...</p>;

  return (
    <div className="bg-[#0f0f0f] text-white p-4">
      <iframe
        className="w-full h-[400px] md:h-[500px]"
        src={video.videoUrl}
        title="video"
      />

      <h2 className="text-xl font-bold mt-4">{video.title}</h2>
      <p className="text-gray-400">{video.description}</p>

      <div className="mt-6">
        <h3 className="mb-2">Comments</h3>

        <input
          className="w-full p-2 bg-[#121212] border border-gray-600 rounded"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
        />

        <button
          onClick={addComment}
          className="mt-2 bg-blue-500 px-4 py-1 rounded"
        >
          Add Comment
        </button>

        <div className="mt-4 space-y-2">
          {comments.map((c) => (
            <p key={c._id} className="bg-[#181818] p-2 rounded">
              {c.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;