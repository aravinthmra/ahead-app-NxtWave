const cardList = [
  {
    id: 1,
    bgColor: "#D8F2FF",
    emoji: "😤",
    heading: "You feel under appreciated",
    description:
      "You've put a lot of effort into a project, and a colleague offers some harsh criticism.",
  },
  {
    id: 2,
    bgColor: "#EFEBFE",
    emoji: "🤧",
    heading: "You feel ignored in a meeting",
    description:
      "You have a great idea to share, but it feels like no one is listening. How do you react in the moment? ",
  },
  {
    id: 3,
    bgColor: "#6FBC96",
    emoji: "😬",
    heading: "You receive a difficult work assignment",
    description:
      "You're given a task that seems overwhelming. How might you reframe the situation to stay positive?",
  },
  {
    id: 4,
    bgColor: "#FFF0D5",
    emoji: "😒",
    heading: "You argue with a colleague",
    description:
      "A disagreement with a coworker becomes heated. How can you express your emotions constructively?",
  },
  {
    id: 5,
    bgColor: "#FEF7F1",
    emoji: "🤨",
    heading: "Someone criticizes your work",
    description:
      "Constructive criticism can be hard to hear. How can you take a step back and assess the feedback objectively?",
  },
  {
    id: 6,
    bgColor: "#F3F1FF",
    emoji: "🙃",
    heading: "You lack confidence to tell your mind",
    description:
      "You have a great idea to share, but it feels like no one is listening. How can you express your emotions constructively?",
  },
];

const sounding_card = (props) => {
  const { id, bgColor, heading, description, emoji } = props;
  return (
    <li
      key={id}
      className={`flex-none w-3/12 mx-3 rounded-xl p-5`}
      style={{ backgroundColor: bgColor }}
    >
      <p className="text-3xl mb-3">{emoji}</p>
      <h6 className="font-bold mb-2">{heading}</h6>
      <p>{description}</p>
    </li>
  );
};

const SoundsFamiliar = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-5 text-5xl font-bold">Does this sound familiar...</h2>
      <ul id="familiar-scroll1" className="flex my-10 w-full overflow-x-auto">
        {cardList.map((item) => sounding_card(item))}
      </ul>
    </div>
  );
};

export default SoundsFamiliar;
