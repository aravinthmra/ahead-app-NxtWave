import sign from "../../assets/sign.png";

const BeforeStarted = () => {
  return (
    <div className="flex flex-col items-center text-center mt-40 lg:mt-72 mb-24 lg:mb-56 p-6 pt-12">
      <p className="text-zinc-900 font-semibold text-xl mb-6">
        We take privacy seriously
      </p>
      <h4 className="text-4xl font-bold mb-6">Before you get started</h4>
      <p className="text-zinc-700 text-xl  mb-6">
        "We won't share your answers with anyone (and won't ever tell you which
        friends said what about you"
      </p>
      <div className="flex mb-10">
        <p className="text-zinc-900 font-semibold text-xl mb-6">with love,</p>
        <img className="w-12 mx-3" src={sign} alt="sign" />
      </div>
      <div className="flex items-center">
        <button className="bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-full">
          Start a test
        </button>
      </div>
      <p className="text-zinc-700 text-sm  my-3">
      Takes only 5 minutes
      </p>
    </div>
  );
};

export default BeforeStarted;
