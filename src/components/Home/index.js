import Navbar from "../Navbar";
import MasterYourLife from "../MasterYourLife";
import EQBeatsIQ from "../EQBeatsIQ";
import SoundsFamiliar from "../SoundsFamiliar";
import MeetAheadApp from "../MeetAheadApp";
import BeTheBest from "../BeTheBest";
import EverWondered from "../EverWondered";
import BeforeStarted from "../BeforeStarted";
import WorkWithUs from "../WorkWithUs";
import OpenVacancies from "../OpenVacancies";

import "./index.css";

const Home = () => {
  return (
    <div className="bg-image bg-container-home font-sans min-w-full sm:px-4 md:px-6 lg:px-8">
      <Navbar />
      <MasterYourLife />
      <EQBeatsIQ />
      <SoundsFamiliar />
      <MeetAheadApp />
      <BeTheBest />
      <EverWondered />
      <BeforeStarted />
      <WorkWithUs />
      <OpenVacancies />
    </div>
  );
};

export default Home;
