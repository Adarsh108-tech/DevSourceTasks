import Web from "./Web";
import WebTasks from "./WebTasks";
import { Routes, Route, Link } from 'react-router-dom';
function WebNav({Tasks}) {
    return ( 
        <div>
            <div className="flex p-10 items-center text-white w-screen md:w-[100%] h-[100%] justify-between text-4xl z-10 Trial-Bold gap-10" >
                <Link to ="/" className="hover:text-red-400 border-2 border-red-500 p-5 rounded-lg hover:bg-white duration-500 hover:duration-500">
                    Members
                </Link>
                <Link to="/tasks" className="hover:text-yellow-400 border-2 border-yellow-500 p-5 rounded-lg hover:bg-red-600 duration-500 hover:duration-500">
                    Tasks
                </Link>
            </div>
            <Routes>        
                <Route path="/" element={<Web/>}></Route>
                <Route path="/tasks" element={<WebTasks Tasks={Tasks} />}/>
            </Routes>
        </div>
     );
}

export default WebNav;