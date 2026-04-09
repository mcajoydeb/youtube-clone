import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#0f0f0f] text-white sticky top-0 z-50">

      {/* Left */}
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        YouTube
      </h1>

      {/* Center */}
      <input
        className="w-1/2 px-3 py-1 bg-[#121212] border border-gray-600 rounded-full"
        placeholder="Search"
      />

      {/* Right */}
      {token ? (
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
          U
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="border px-4 py-1 rounded-full"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Header;