const Sidebar = () => {
  return (
    <div className="w-56 h-screen bg-[#0f0f0f] text-white p-4 hidden md:block">
      <p className="mb-4 hover:bg-gray-700 p-2 rounded">🏠 Home</p>
      <p className="mb-4 hover:bg-gray-700 p-2 rounded">🔥 Trending</p>
      <p className="mb-4 hover:bg-gray-700 p-2 rounded">📺 Subscriptions</p>
    </div>
  );
};

export default Sidebar;