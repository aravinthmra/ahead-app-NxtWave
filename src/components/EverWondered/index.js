import sun from "../../assets/sun.png";

const EverWondered = () => {
  return (
    <div className="flex flex-col items-center bg-image ever-wondered-container1 text-center p-6 pt-12">
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
          <p className="text-zinc-900 font-semibold my-2">
            Answer question on your social skills
          </p>
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
      <div className="relative flex bg-white w-3/5 h-60 p-8 rounded-3xl shadow-xl">
        {/* <div class="horizontal-line mt-0 mb-auto"></div> */}
        <ul className="flex justify-between w-full bg-transparent">
          <li className="flex flex-col justify-end mb-auto mb-auto">
            <p className="w-max p-3 mb-3 content-end rounded-xl font-semibold text-white bg-[#6341EF]">
              You
            </p>
            <p className="w-5 h-5 mb-3 rounded-full bg-[#6341EF]"></p>
          </li>

          {/* <p className="w-full self-center border-t-2 border-slate-300"></p> */}

          <li className="flex flex-col justify-end mt-auto">
            <p className="w-5 h-5 mb-3 rounded-full bg-[#41C2FD]"></p>
            <p className="w-max p-3 mb-3 rounded-xl font-semibold text-white bg-[#41C2FD]">
              Anonymous
            </p>
          </li>

          {/* <p className="w-full self-center border-t-2 border-slate-300"></p> */}

          <li className="flex flex-col justify-end mb-auto">
            <p className="w-max p-3 mb-3 rounded-xl font-semibold text-white bg-[#FDB337]">
              Anonymous
            </p>
            <p className="w-5 h-5 rounded-full bg-[#FDB337]"></p>
          </li>

          {/* <p className="w-full self-center border-t-2 border-slate-300"></p> */}

          <li className="flex flex-col justify-end mt-auto">
            <p className="w-5 h-5  mb-3 rounded-full bg-[#59C996]"></p>
            <p className="w-max p-3 mb-3 rounded-xl font-semibold text-white bg-[#59C996]">
              Anonymous
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EverWondered;
