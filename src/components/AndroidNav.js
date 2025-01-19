import Android from "./Android";
import AndroidTask from "./AndroidTasks";
import { Routes, Route, Link } from 'react-router-dom';

function AndroidNav({Tasks}) {
    return ( 
        <div>
      <div className="flex flex-col md:flex-row p-5 md:p-10 items-center text-white w-full md:w-[100%] h-auto justify-center md:justify-between text-2xl md:text-4xl z-10 Trial-Bold gap-5 md:gap-10">
        <Link
          to="/android"
          className="hover:text-red-400 border-2 border-red-500 p-3 md:p-5 rounded-lg hover:bg-white duration-300 hover:duration-300 text-center w-full md:w-auto"
        >
          Members
        </Link>
        <Link
          to="/android/tasks"
          className="hover:text-yellow-400 border-2 border-yellow-500 p-3 md:p-5 rounded-lg hover:bg-red-600 duration-300 hover:duration-300 text-center w-full md:w-auto"
        >
          Tasks
        </Link>
      </div>
            <Routes>        
                <Route path="/" element={<Android/>}></Route>
                <Route path="/tasks" element={<AndroidTask Tasks={Tasks} />}/>
            </Routes>
        </div>
     );
}

export default AndroidNav;