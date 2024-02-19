const vacancyList = [
  {
    id: 1,
    heading: "Senior Full-Stack Engineer",
    description: [
      "Full-time position",
      "Berlin or remote",
      "$65k-85k",
      "upto 1.50% equity options",
    ],
  },
  {
    id: 2,
    heading: "Senior Designer",
    description: [
      "Full-time position",
      "Berlin or remote",
      "$40k-55k",
      "upto 0.50% equity options",
    ],
  },
  {
    id: 3,
    heading: "Superstar Intern",
    description: [
      "6-months internship",
      "Berlin",
      "$20k-24k",
      "upto 0.25% equity options",
    ],
  },
];

const vacancy = (props) => {
  const { id, heading, description } = props;
  return (
    <div key={id} className="bg-[#FFFBEC] w-1/4 px-8 py-5 rounded-xl">
      <h5 className="font-bold text-xl">{heading}</h5>
      <ul className="flex flex-col mt-8 ml-5">
        {description.map((point, index) => (
          <li
            key={index}
            className="list-disc font-semibold text-zinc-800 mb-3"
          >
            {point}
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
          See details
        </button>
      </div>
    </div>
  );
};

const OpenVacancies = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mt-24 mb-12 text-5xl font-bold">Open vacancies</h2>
      <div className="flex justify-between mb-48">
        {vacancyList.map((item) => vacancy(item))}
      </div>
    </div>
  );
};

export default OpenVacancies;
