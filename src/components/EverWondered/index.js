import sun from "../../assets/sun.png";

const EverWondered = () => {
  return (
    <div className="bg-image ever-wondered-container1 text-center p-6 pt-12">
      <p className="text-zinc-900 font-semibold text-xl">
        Let your friends, family, and co-workers (anonymously) rate your social
        skills.
      </p>
      <h2 className="my-5 text-4xl font-bold">
        Ever wondered what others think of you?
      </h2>
      <ul className="flex justify-around my-12">
        <li className="w-3/12 flex flex-col items-center">
          <img className="w-24" src={sun} alt="the sun" />
          <p className="text-zinc-900 font-semibold my-2">Answer question on your social skills</p>
        </li>
        <li className="w-3/12 flex flex-col items-center">
          <img className="w-24" src={sun} alt="the sun" />
          <p className="text-zinc-900 font-semibold my-2">
            Let others anonymously answer the same questions about you
          </p>
        </li>
        <li className="w-3/12 flex flex-col items-center">
          <img className="w-24" src={sun} alt="the sun" />
          <p className="text-zinc-900 font-semibold my-2">
            Find out where you and others see things the same way - and where
            not!
          </p>
        </li>
      </ul>
    </div>
  );
};

export default EverWondered;
