import Random from "./random";

function Game() {
  const textValues = [
    "Satyajit",
    "Adarsh Tiwari",
    "Yash Mishra",
    "Chhavi Goyal",
    "Aadi Jain",
    "Vansh Kumar",
    "Akshat Chowdhary",
    "Sonu Yadav",
    "Ved Prakash Singh"
  ];

  return (
    <ul className="flex items-center text-white w-[100%] md:w-[100%] h-[100%] flex-col justify-center text-4xl z-10 gap-10 Trial-Bold">
      {textValues.map((text, index) => (
        <li
          key={index}
          className="border-2 border-violet-500 p-5 text-center rounded-lg hover:bg-yellow-400 duration-200 hover:border-red-500 hover:border-4 hover:shadow-red-500 hover:shadow-lg hover:text-red-600 w-full"
        >
          <Random Text={text} />
        </li>
      ))}
    </ul>
  );
}

export default Game;
