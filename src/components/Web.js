import Random from "./random";

function Web() {
  const textValues = [
    "Dhruv Chhikara",
    "Manvi Singhal",
    "Aryan",
    "Aadesh Balyan",
    "Khushaan Kapil",
    "Adarsh Tiwari",
    "Yash Mishra",
    "Chhavi Goyal",
    "Piyush",
    "Rishi Ramani",
    "Anshika Rathore",
    "Vishesh Goel",
    "Aayush Aswal",
    "Aryan Thakur",
    "Khushi Bhaskar",
    "Aman",
    "Raunak Kumar",
    "Arnav Kumar Gupta",
    "Ujjwal Lehri",
    "Harsh Verma",
    "Utkarsh Yadav",
    "Rachit Talwar",
    "Adarsh Singh",
    "Riyansh",
    "Tarun Kumar",
    "Mayank Suri",
    "Arnav Jain",
    "Akash Das",
    "Prapti Gupta",
    "Shivam Kumar Khare",
    "Arkin Kansra",
    "Suraj",
    "Anshu Kumar",
    "Ashwani Thakur",
    "Aditya Sehgal",
    "Raghav Lakhanpal",
    "Shekhar",
    "Akshay Kumar",
    "Sahil Verma",
    "Vansh Kumar",
    "Akshat Chowdhary",
    "Sonu Yadav",
    "Stanzin Saskyong Namgail",
    "Arshpreet Singh",
    "Shivang Kandoi",
    "Nipun Singhal",
    "Ved Prakash Singh"
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
