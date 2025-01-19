import "../font.css";
import { Link } from "react-router-dom";

function GameTask({ tasks }) {
  return (
    <div className="border-2 border-white text-white p-6 sm:p-10 w-full rounded-lg backdrop-blur-sm">
      <h1 className="Trial-Black text-4xl sm:text-6xl text-center">Game Task</h1>
      <div className="p-6 sm:p-10 flex flex-col items-start gap-6 sm:gap-10 text-lg sm:text-2xl">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="w-full border-b-2 border-gray-500 pb-5 flex flex-col gap-6 sm:gap-10 mb-6"
          >
            <div className="flex flex-col sm:flex-row w-full justify-between gap-4 sm:gap-10">
              <p className="font-bold">Level</p>
              <p className="sm:w-1/2">{task.level}</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-between gap-4 sm:gap-10">
              <p className="font-bold">Task</p>
              <p className="sm:w-1/2">{task.Task}</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-between gap-4 sm:gap-10">
              <p className="font-bold">Description</p>
              <p className="sm:w-1/2">{task.Desc}</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-between gap-4 sm:gap-10">
              <p className="font-bold">Additional Feature</p>
              <p className="sm:w-1/2">{task.AdditionalFeature}</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-between gap-4 sm:gap-10">
              <p className="font-bold">Starting Date</p>
              <p className="sm:w-1/2">{task.StartDate}</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-between gap-4 sm:gap-10">
              <p className="font-bold">Next Task On</p>
              <p className="sm:w-1/2">{task.EndDate}</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-between gap-4 sm:gap-10">
              <p className="font-bold">Repo Link</p>
              <Link
                to={task.RepoLink}
                className="sm:w-1/2 text-blue-400 underline break-all"
              >
                {task.RepoLink}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameTask;
