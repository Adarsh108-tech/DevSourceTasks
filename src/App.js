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
      Task : "Recipe Finder Application",
      Desc : "A search app that fetches recipes based on ingredients using an external API.",
      AdditionalFeature : "at search bar add a functionality to show the auto search",
      StartDate : "28-01-25",
      EndDate : "06-02-25",
      RepoLink : "https://github.com/DevSource-2025/Recipe-Finder",
      level : "beginner"
    },    
    {
      Task : "Make a Movie Discovery Mobile App on kotlin or flutter",
      Desc : "A movie discovery app with features like movie search, watchlist, and recommendations. Tech Stack: Kotlin, Retrofit for API integration, Room Database, Jetpack Compose.",
      AdditionalFeature : "Add filters to refine searches.",
      StartDate : "28-01-25",
      EndDate : "06-02-25",
      RepoLink : "https://github.com/DevSource-2025/Movie-Discovery-Mobile-App",
      level : "Silver"
    },
  ],
  [
    {
      Task : "Blogging Website",
      Desc : "Build a stunning blogging website containing multiple pages to display all blogs also it should have buttons to see next and previous blogs ",
      AdditionalFeature : "add a different page where a person can edit or create a new blog ( a blog editor )",
      StartDate : "28-01-25",
      EndDate : "06-02-25",
      RepoLink : "https://github.com/DevSource-2025/PortfolioWebSite",
      level : "beginner"

    },    
    {
      Task : "make any Ecommerce website clone ",
      Desc : "A fully functional e-commerce platform with product listings, a shopping cart, and a checkout process. Tech Stack: ReactJS, Node.js, MongoDB, Stripe for payments, JWT for authentication.",
      AdditionalFeature : "Add a functionality to see the location of a near by shop",
      StartDate : "28-01-25",
      EndDate : "06-02-25",
      RepoLink : "https://github.com/DevSource-2025/E-commerce-Website",
      level : "Gold"
    }, 
    {
      Task : "Make a Sign up and login authorization in MERN using jwt tokens , bcrypt and other libraries",
      Desc : "Make a web application using Mongo db as database , Express js as server , React as frontend library , and node js as runtime enviroment",
      AdditionalFeature : "only the authorized user can obtain certain data",
      StartDate : "28-01-25",
      EndDate : "06-02-25",
      RepoLink : "https://github.com/DevSource-2025/MERN-Authorization",
      level : "Silver"
    }
  ],[
    {
      Task : "make a 2D Platformer Game in Godot or Unity with enemies",
      Desc : "Develop a 2D platformer game with animations, movement physics, and jumping.",
      AdditionalFeature : "Add health bars or health points.(Optional but challenging) Implement a weapon-changing mechanism.",
      StartDate : "28-01-25",
      EndDate : "06-02-25",
      RepoLink : "https://github.com/DevSource-2025/2D-Platformer-Game",
      level : "silver"
    },
    {
      Task : "make a 3D fps Game in godot or unity",
      Desc : "Develop a 3D platformer shooter game where a character can shoot approaching enemeies or target.",
      AdditionalFeature : "Increase the player coins as the target gets hit.",
      StartDate : "28-01-25",
      EndDate : "06-02-25",
      RepoLink : "https://github.com/DevSource-2025/3D-FPS-Game",
      level : "silver"
    },
    {
      Task : "make a 2D shooter Game in godot or unity",
      Desc : "Develop a 2D game where a character shoots approaching enemeies.",
      AdditionalFeature : "Add health bars or health points.(Optional but challenging) Implement a weapon-changing mechanism.",
      StartDate : "28-01-25",
      EndDate : "06-02-25",
      RepoLink : "https://github.com/DevSource-2025/2d-shooter-game",
      level : "bronze"
    }
  ]
  ];

  return (
    <div className="absolute min-h-screen w-full p-4 box-border bg-zinc-800 overflow-y-hidden">
      <BackGround className="-z-10"/>
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
