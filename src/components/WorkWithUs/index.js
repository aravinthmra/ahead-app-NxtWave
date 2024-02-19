import aheadDoll from "../../assets/aheadDoll.svg"
import aheadLogo from "../../assets/aheadLogo.svg"

const cardList = [
  {
    id: 1,
    heading: "You feel under appreciated",
    description:
      "You've put a lot of effort into a project, and a colleague offers some harsh criticism.",
  },
  {
    id: 2,
    heading: "You feel ignored in a meeting",
    description:
      "You have a great idea to share, but it feels like no one is listening. How do you react in the moment? ",
  },
  {
    id: 3,
    heading: "You receive a difficult work assignment",
    description:
      "You're given a task that seems overwhelming. How might you reframe the situation to stay positive?",
  },
  {
    id: 4,
    heading: "You argue with a colleague",
    description:
      "A disagreement with a coworker becomes heated. How can you express your emotions constructively?",
  },
  {
    id: 5,
    heading: "Someone criticizes your work",
    description:
      "Constructive criticism can be hard to hear. How can you take a step back and assess the feedback objectively?",
  },
  {
    id: 6,
    heading: "You lack confidence to tell your mind",
    description:
      "You have a great idea to share, but it feels like no one is listening. How can you express your emotions constructively?",
  },
];

const sounding_card = (props) => {
  const { id, heading, description } = props;
  return (
    <li
      key={id}
      className={`flex-none mx-3 bg-white rounded-xl text-base p-5 mb-3`}
    >
      <h6 className="font-bold mb-2">{heading}</h6>
      <p className="text-zinc-700">{description}</p>
    </li>
  );
};

const WorkWithUs = () => {
    return(
         <div className="flex justify-between bg-image work-with-us-container1 p-12">
            <div className="w-full">
                <h2 className="my-5 text-6xl font-bold">Work with us</h2>
                <div className="flex flex-col bg-white w-8/12 pt-3 rounded-3xl shadow-xl">
                    <img
                    className="w-12 mx-8 my-3"
                    src={aheadDoll}
                    alt="ahead-doll"
                    />
                    <h4 className="text-xl font-bold px-8">About</h4>
                    <p className="text-zinc-700 text-xl px-8">
                        At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what ahead is all about!
                    </p>
                    <div className="bg-[#FEF7F1] rounded-3xl mt-5 px-8 py-5">
                        <h4 className="text-xl font-bold">Product</h4>
                        <p className="text-zinc-700 text-xl">
                        Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-full">
                <img
                    className="w-5/6 h-20"
                    src={aheadLogo}
                    alt="ahead-doll"
                />
                <ul id="work-scroll1" className="flex flex-col my-10 h-96 overflow-y-scroll">
                    {cardList.map((item) => sounding_card(item))}
                </ul>
            </div>
         </div>
    )
}

export default WorkWithUs