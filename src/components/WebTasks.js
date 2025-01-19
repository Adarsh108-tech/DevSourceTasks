import "../font.css";
import { Link } from "react-router-dom";

function WebTask({ Tasks }) {
  return (
    <div className="border-2 border-white text-white p-10 w-[100%] rounded-lg backdrop-blur-sm">
      <h1 className="Trial-Black text-6xl text-center">Web Task</h1>
      <div className="p-10 flex flex-col items-start gap-10 text-2xl">
        {Tasks.map((task, index) => (
          <div key={index} className="w-[100%] border-b-2 border-gray-500 pb-5 flex flex-col gap-10 mb-5">
            <div className="flex w-[100%] justify-between gap-10">
              <p>Level</p>
              <p className="w-[50%]">{task.level}</p>
            </div>
            <div className="flex w-[100%] justify-between gap-10">
              <p>Task</p>
              <p className="w-[50%]">{task.Task}</p>
            </div>
            <div className="flex w-[100%] justify-between gap-10">
              <p>Description</p>
              <p className="w-[50%]">{task.Desc}</p>
            </div>
            <div className="flex w-[100%] justify-between gap-10">
              <p>Additional Feature</p>
              <p className="w-[50%]">{task.AdditionalFeature}</p>
            </div>
            <div className="flex w-[100%] justify-between gap-10">
              <p>Starting Date</p>
              <p className="w-[50%]">{task.StartDate}</p>
            </div>
            <div className="flex w-[100%] justify-between gap-10">
              <p>Next Task On</p>
              <p className="w-[50%]">{task.EndDate}</p>
            </div>
            <div className="flex w-[100%] justify-between gap-10">
              <p>Repo Link</p>
              <Link to={task.RepoLink} className="w-[50%] text-blue-400 underline">
                {task.RepoLink}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebTask;
