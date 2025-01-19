import Random from "./random";

function Web() {
  const textValues = [
    "Aadesh Balyan",
    "Aayush Aswal",
    "Adarsh Singh",
    "Aditya Sehgal",
    "Akash Das",
    "Akshay Kumar",
    "Akshat Chowdhary",
    "Aman",
    "Anshu Kumar",
    "Anshika Rathore",
    "Arkin Kansra",
    "Arnav Jain",
    "Arnav Kumar Gupta",
    "Aryan",
    "Aryan Thakur",
    "Ashwani Thakur",
    "Chhavi Goyal",
    "Dhruv Chhikara",
    "Harsh Verma",
    "Khushi Bhaskar",
    "Khushaan Kapil",
    "Manvi Singhal",
    "Mayank Suri",
    "Piyush",
    "Prapti Gupta",
    "Rachit Talwar",
    "Raunak Kumar",
    "Raghav Lakhanpal",
    "Riyansh",
    "Rishi Ramani",
    "Sahil Verma",
    "Shekhar",
    "Shivam Kumar Khare",
    "Sonu Yadav",
    "Suraj",
    "Tarun Kumar",
    "Ujjwal Lehri",
    "Utkarsh Yadav",
    "Vansh Kumar",
    "Vishesh Goel",
    "Yash Mishra"
  ];
  

  return (

      <ul className="flex items-center text-white w-[100%] md:w-[100%] h-[100%] flex-col justify-center text-4xl z-10 gap-10 Trial-Bold">
        {textValues.map((text, index) => (
          <li
            key={index}
            className="border-2 border-violet-500 p-5 text-center rounded-lg hover:bg-yellow-400 duration-200 hover:border-red-500 hover:border-4 hover:shadow-red-500 hover:shadow-lg hover:text-red-600 w-full "
          >
            <Random Text={text} />
          </li>
        ))}
      </ul>
  );
}

export default Web;
