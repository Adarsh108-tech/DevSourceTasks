import logo from "./assets/acm_logo 1.svg";
import DevLogo from "./assets/DevSourceLogo.png";
import "./font.css";
import { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import AndroidNav from "./components/AndroidNav";
import WebNav from "./components/WebNav";
import GameNav from "./components/GameNav";
import BackGround from "./components/background";

function App() {
  const [selected, setSelected] = useState(0);
  const TaskData = [
  [
    {
      Task : "Simple Calculator Application in Kotlin",
      Desc : "Create a calculator app to perform all types of mathematical operations with a clean UI.",
      AdditionalFeature : "Try to add graphs for visualization.",
      StartDate : "19-01-25",
      EndDate : "26-01-25",
      RepoLink : "https://github.com/DevSource-2025/Simple-Calculator-App-Android",
      level : "beginner"
    },    
    {
      Task : "Movie Discovery Mobile App",
      Desc : "Build a mobile app using any no-code technology of your choice. Add features like Wishlist functionality A 'Know More' search bar",
      AdditionalFeature : "Add filters to refine searches.",
      StartDate : "19-01-25",
      EndDate : "26-01-25",
      RepoLink : "https://github.com/DevSource-2025/Movie-Discovery-Mobile-App",
      level : "Silver"
    },
  ],
  [
    {
      Task : "Portfolio Website",
      Desc : "Build a stunning portfolio to showcase your profile with a clean and engaging UI.",
      AdditionalFeature : "Add links to your projects, LinkedIn, and GitHub. Include cool animations to make the site interactive.",
      StartDate : "19-01-25",
      EndDate : "26-01-25",
      RepoLink : "https://github.com/DevSource-2025/PortfolioWebSite",
      level : "beginner"

    },    
    {
      Task : "Weather App with API Integration",
      Desc : "Allow users to view current weather for their location and search weather for other locations.",
      AdditionalFeature : "Add a weather timeline feature.",
      StartDate : "19-01-25",
      EndDate : "26-01-25",
      RepoLink : "https://github.com/DevSource-2025/Weather-App-Web",
      level : "bronze"
    }, 
    {
      Task : "Task Manager with CRUD Operations",
      Desc : "Make a web application using Mongo db as database , Express js as server , React as frontend library , and node js as runtime enviroment",
      AdditionalFeature : "Implement a work and rest manager.For HTML, CSS, JS Developers: Weather App with API Integration",
      StartDate : "19-01-25",
      EndDate : "26-01-25",
      RepoLink : "https://github.com/DevSource-2025/Task-Manger-Web",
      level : "Silver"
    }
  ],[
    {
      Task : "2D Platformer Game in Godot",
      Desc : "Develop a 2D platformer game with animations, movement physics, and jumping.",
      AdditionalFeature : "Add health bars or health points.(Optional but challenging) Implement a weapon-changing mechanism.",
      StartDate : "19-01-25",
      EndDate : "26-01-25",
      RepoLink : "https://github.com/DevSource-2025/2D-Platformer-Game",
      level : "beginner"
    }
  ]
  ];

  return (
    <div className="absolute min-h-screen w-full p-4 box-border bg-zinc-800 overflow-y-hidden">
      <BackGround/>
      <nav className="flex w-full justify-between items-center mb-8">
        <img
          src={logo || "/placeholder.svg"}
          className="w-16 h-16 md:w-20 md:h-20"
          alt="ACM Logo"
        />
        <h1 className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl Airnt">
          DevSource Tasks
        </h1>
        <img
          src={DevLogo || "/placeholder.svg"}
          className="w-20 h-16 md:w-24 md:h-20"
          alt="Dev Logo"
        />
      </nav>
      <div className="flex items-center justify-center flex-col w-full">
        <div className="flex sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 mogiant text-center text-white mb-8 z-20">
          <Link to='/'
            className={
              selected === 0
                ? "border-2 p-3 sm:p-4 rounded-lg bg-white text-red-500 border-black duration-200 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                : "border-2 border-white p-3 sm:p-4 rounded-lg hover:bg-white hover:text-red-500 hover:border-black duration-200 text-lg sm:text-xl md:text-2xl lg:text-3xl"
            }
            onClick={() => setSelected(0)}
          >
            Web
            <br />
            Developers
          </Link>
          <Link to="/android"
            className={
              selected === 1
                ? "border-2 p-3 sm:p-4 rounded-lg bg-white text-sky-500 border-black duration-200 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                : "border-2 border-white p-3 sm:p-4 rounded-lg hover:bg-white hover:text-sky-500 hover:border-black duration-200 text-lg sm:text-xl md:text-2xl lg:text-3xl"
            }
            onClick={() => setSelected(1)}
          >
            Android
            <br />
            Developers
          </Link>
          <Link to="/game"
            className={
              selected === 2
                ? "border-2 p-3 sm:p-4 rounded-lg bg-white text-green-500 border-black duration-200 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                : "border-2 border-white p-3 sm:p-4 rounded-lg hover:bg-white hover:text-green-500 hover:border-black duration-200 text-lg sm:text-xl md:text-2xl lg:text-3xl"
            }
            onClick={() => setSelected(2)}
          >
            Game
            <br />
            Developers
          </Link>
        </div>
        <Routes>
          
          <Route path="/android/*" element={<AndroidNav Tasks={TaskData[0]}/>}></Route>
          <Route path="/game/*" element={<GameNav Tasks={TaskData[2]}/>}/>
          <Route path="/*" element={<WebNav Tasks={TaskData[1]} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
