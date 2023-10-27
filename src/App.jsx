import "./App.css";
import About from "./components/About";
import Footer from "./components/Footter";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import oniGirl from "./assets/oni-mask-samurai-girl-live-wallpaper.mp4";
function App() {

  return (
    <div className="">
      <video autoPlay loop muted id="video">
        <source src={oniGirl} type="video/mp4" />
      </video>
      <div className="absolute w-full h-full overflow-y-scroll">
        <div className="navbar bg-transparent shadow-md sticky top-0 hover:shadow-2xl ease-in duration-150 ">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl border-b border-b-transparent ease-in duration-300 rounded-2xl hover:border-b  hover:border-transparent hover:border-b-yellow-300">
              Zombie
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li className="border-b border-b-transparent ease-in duration-300 rounded-sm hover:border-b  hover:border-b-yellow-300">
                <a>Skills</a>
              </li>
              <li className="border-b border-b-transparent ease-in duration-300 rounded-sm hover:border-b  hover:border-b-yellow-300">
                <a>About</a>
              </li>
              <li className="border-b border-b-transparent ease-in duration-300 rounded-sm hover:border-b  hover:border-b-yellow-300">
                <a>My work</a>
              </li>
              <li className="border-b border-b-transparent ease-in duration-300 rounded-sm hover:border-b  hover:border-b-yellow-300">
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <NavBar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Footer />
      </div>
    </div>
  );
}

export default App;
