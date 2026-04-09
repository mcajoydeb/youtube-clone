// pages/Home.jsx
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <VideoGrid />
      </div>
      <Footer />
    </>
  );
};

export default Home;