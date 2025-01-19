import Android from "./Android";
import AndroidTask from "./AndroidTasks";
import { Routes, Route, Link } from 'react-router-dom';

function AndroidNav({Tasks}) {
    return ( 
        <div>
            <div className="flex p-5 items-center text-white w-[100%] md:w-[100%] h-[100%] justify-between text-4xl z-10 Trial-Bold border-b-2 m-5 border-white" >
                <Link to ="/android" className="hover:text-red-400 border-2 border-red-500 p-5 rounded-lg hover:bg-white duration-500 hover:duration-500">
                    Members
                </Link>
                <Link to="/android/tasks" className="hover:text-yellow-400 border-2 border-yellow-500 p-5 rounded-lg hover:bg-red-600 duration-500 hover:duration-500">
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