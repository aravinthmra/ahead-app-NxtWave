import logo from "../../assets/logo.jpg";
import aheadLogo from "../../assets/aheadLogo.svg";
import instagram from "../../assets/instagram.svg";
import tablerMail from "../../assets/tablerMail.svg";
import appStore from "../../assets/appStore.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-24">
      <img className="w-24 rounded-xl mb-5" src={logo} alt="logo" />
      <img className="w-24 mb-5" src={aheadLogo} alt="ahead logo" />
      <img className="mr-3 mb-5" src={appStore} alt="app store" />
      <div className="flex justify-center mb-12">
        <div className="flex  mr-12">
          <img className="w-6 h-7 mr-1" src={instagram} alt="instagram" />
          <p className="font-semibold">Ahead</p>
        </div>
        <div className="flex">
          <img className="w-8 h-7 mr-1" src={tablerMail} alt="mail" />
          <p className="font-semibold">hi@ahead-app.com</p>
        </div>
      </div>
      <p className="font-semibold mb-3">Ahead Solutions GmbH - HRB 219170 B</p>
      <p className="font-semibold mb-5">Auguststraße 26, 10117 Berlin</p>
      <p className="font-semibold mb-36">
        &copy; {new Date().getFullYear()} Ahead app. All Rights Reserved
      </p>
      <p className="text-zinc-500">~ Best viewed in a desktop browser ~</p>
    </div>
  );
};

export default Footer;

{
  /* <img className="" src="" alt="" /> */
}
