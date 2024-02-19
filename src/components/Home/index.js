import Navbar from "../Navbar";
import MasterYourLife from "../MasterYourLife";
import EQBeatsIQ from "../EQBeatsIQ";
import SoundsFamiliar from "../SoundsFamiliar";
import MeetAheadApp from "../MeetAheadApp";
import BeTheBest from "../BeTheBest";
import EverWondered from "../EverWondered";

import "./index.css";

const Home = () => {
  return (
    <div className="bg-container-home px-10 font-sans">
      <Navbar />
      <MasterYourLife />
      <EQBeatsIQ />
      <SoundsFamiliar />
      <MeetAheadApp />
      <BeTheBest />
      <EverWondered />
    </div>
  );
};

export default Home;
