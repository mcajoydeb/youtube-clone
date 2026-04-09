const Footer = () => {
  return (
    <div className="bg-[#0f0f0f] text-gray-400 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left */}
        <p className="text-sm">
          © 2026 YouTube Clone. All rights reserved.
        </p>

        {/* Center */}
        <div className="flex gap-4 text-sm mt-2 md:mt-0">
          <span className="hover:text-white cursor-pointer">About</span>
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
        </div>

        {/* Right */}
        <p className="text-sm mt-2 md:mt-0">
          Built with MERN 🚀
        </p>

      </div>
    </div>
  );
};

export default Footer;