import Navbar from "../Navbar";
import MasterYourLife from "../MasterYourLife";
import EQBeatsIQ from "../EQBeatsIQ";
import SoundsFamiliar from "../SoundsFamiliar";

import "./index.css";

const Home = () => {
  return (
    <div className="bg-container-home px-10 font-sans">
      <Navbar />
      <MasterYourLife />
      <EQBeatsIQ />
      <SoundsFamiliar />
    </div>
  );
};

export default Home;
