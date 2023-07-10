import "animate.css";

function Home() {
  return (
    <div className="hero min-h-screen bg-transparent w-full">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className=" underline decoration-double decoration-1 decoration-yellow-300 text-5xl font-bold animate__animated animate__fadeInDown animate__delay-1s">
            ZOMBIE
          </h1>
          <h1 className=" underline decoration-1 decoration-yellow-400 text-5xl font-bold animate__animated animate__fadeInDown animate__delay-2s">
            EATS
          </h1>
          <h1 className=" underline decoration-1 decoration-yellow-500 text-5xl font-bold animate__animated animate__fadeInDown animate__delay-3s">
            BRAINS
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ab
            perspiciatis, voluptatem earum sint cum adipisci. Nemo placeat
            maxime ab iusto, et eum nisi voluptatem, quo expedita possimus ipsa
            voluptas!
          </p>
          <div className="animate__animated animate__fadeIn animate__delay-4s">
            <button className="btn bg-slate-700 text-yellow-400 border-2 border-yellow-200 hover:bg-yellow-700 hover:text-white ease-in ">
              Zombie do program...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
