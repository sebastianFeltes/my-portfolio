import { useRef } from "react";

function Skills() {
  
  const skills = useRef(null);

  return (
    <div ref={skills} className="hero min-h-screen bg-transparent w-full">
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center w-3/4">
        <div className="max-w-lg w-full rounded-lg">
          <h1 className="text-5xl font-bold text-gray-200 underline decoration-1 decoration-yellow-200">
            SKILLS
          </h1>
          <div className="divider"></div>
          <div id="hard-skills" className="w-full">
            <p className="py-6 text-yellow-300 font-extrabold text-lg">
              HARD SKILLS
            </p>
            <div className="flex flex-col w-full text-white">
              <span>React JS</span>
              <progress
                id="react-bar"
                className="progress progress-warning w-full bg-slate-200 border border-black"
                value="80"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-col text-white">
              <span>Next JS</span>
              <progress
                className="progress progress-warning w-full bg-slate-200 border border-black"
                value="40"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-col text-white">
              <span>JS</span>
              <progress
                className="progress progress-warning w-full bg-slate-200 border border-black"
                value="80"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-col text-white">
              <span>HTML</span>
              <progress
                className="progress progress-warning w-full bg-slate-200 border border-black"
                value="100"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-col text-white  ">
              <span>CSS/SCSS</span>
              <progress
                className="progress progress-warning w-full bg-slate-200 border border-black"
                value="90"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="divider"></div>
          <div id="soft-skills" className="w-full">
            <p className="py-6 text-yellow-300 font-extrabold text-lg">
              SOFT SKILLS
            </p>
            <div className="flex flex-col w-full text-white">
              <span>Creativity</span>
              <progress
                id="react-bar"
                className="progress progress-warning w-full bg-slate-200 border border-black"
                value="90"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-col text-white">
              <span>Teamwork</span>
              <progress
                className="progress progress-warning w-full bg-slate-200 border border-black"
                value="80"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-col text-white">
              <span>Lateral thinking</span>
              <progress
                className="progress progress-warning w-full bg-slate-200 border border-black"
                value="80"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-col text-white">
              <span>Solve problems capacity</span>
              <progress
                className="progress progress-warning w-full bg-slate-200 border border-black"
                value="100"
                max="100"
              ></progress>
            </div>
            <div className="flex flex-col text-white">
              <span>Whatever you need... :V</span>
              <progress
                className="progress progress-warning w-full bg-slate-200 border border-black"
                value="90"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
