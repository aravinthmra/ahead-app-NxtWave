import Navbar from "../Navbar";
import MasterYourLife from "../MasterYourLife";
import EQBeatsIQ from "../EQBeatsIQ";
import SoundsFamiliar from "../SoundsFamiliar";
import MeetAheadApp from "../MeetAheadApp";
import BeTheBest from "../BeTheBest";
import EverWondered from "../EverWondered";
import BeforeStarted from "../BeforeStarted";

import "./index.css";

const Home = () => {
  return (
    <div className="bg-container-home font-sans min-w-full sm:px-4 md:px-6 lg:px-8 overflow-hidden lg:overflow-auto scrollbar:w-1.5 scrollbar:bg-transparent scrollbar-track: bg-slate-100 scrollbar-thumb:rounded scrollbar-thumb:bg-slate-300 scrollbar-track:rounded">
      <Navbar />
      <MasterYourLife />
      <EQBeatsIQ />
      <SoundsFamiliar />
      <MeetAheadApp />
      <BeTheBest />
      <EverWondered />
      <BeforeStarted />
    </div>
  );
};

export default Home;
