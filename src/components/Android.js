import Random from "./random";

function Android() {
  const textValues = [
    "Abhisar Tyagi",
    "Akash",
    "Anurag Kumar Singh",
    "Krishna Sharma",
    "Krrish Khowal",
    "Satyajit",
    "Dhruv Chhikara",
    "Manvi Singhal",
    "Aryan",
    "Aadesh Balyan",
    "Khushaan Kapil",
    "Adarsh Tiwari",
    "Yash Mishra",
    "Chhavi Goyal",
    "Stanzin Saskyong Namgail",
    "Arshpreet Singh",
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

export default Android;
