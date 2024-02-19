import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="px-5 py-3 flex justify-between font-sans font-semibold">
      <div className="flex items-center">
        <img className="w-16 rounded-xl" src={logo} alt="ahead-logo" />
      </div>
      <ul className="w-100 flex justify-between items-center">
        <li className="mx-3">Emotions</li>
        <li className="mx-3">Manifesto</li>
        <li className="mx-3">Self-awareness test</li>
        <li className="mx-3">Work With Us</li>
      </ul>
      <div className="flex items-center">
        <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
          Download app
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
