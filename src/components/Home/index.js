import Navbar from "../Navbar";
import MasterYourLife from "../MasterYourLife";
import EQBeatsIQ from "../EQBeatsIQ";

import "./index.css";

const Home = () => {
  return (
    <div className="bg-container-home px-10 font-sans">
      <Navbar />
      <MasterYourLife />
      <EQBeatsIQ />
    </div>
  );
};

export default Home;
