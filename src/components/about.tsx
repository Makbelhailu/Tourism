import { Link } from "react-router-dom";
import Header from "./header";

import bunna from "../assets/images/bunna.jpg";
import monastery from "../assets/images/monastery.jpg";
import castle from "../assets/images/castle.jpg";

const About = () => {
  return (
    <>
      <Header />
      <div className="my-24 flex w-full grid-cols-2 flex-col items-center justify-center gap-y-5 px-8 lg:grid xl:px-16">
        <div className="images-container relative mt-16 h-fit w-fit -translate-x-12 max-sm:scale-75 xs:-translate-x-16 lg:-translate-x-0 lg:scale-75 xl:scale-100">
          <img
            src={bunna}
            alt="cultural way of drinking coffee"
            className="h-[400px] w-[450px] rounded-[60px] border-2 border-white"
          />
          <img
            src={monastery}
            alt="Monastery"
            className="absolute -right-36 -top-24 z-[3] h-[370px] w-[290px] rounded-[60px] border-2 border-white"
          />
          <img
            src={castle}
            alt="castle"
            className="absolute -bottom-24 -right-20 z-[2] h-[300px] w-[350px] rounded-[60px] border-2 border-white"
          />
        </div>
        <div className="content-container mt-16 w-full max-lg:text-center sm:mt-32 sm:px-16 lg:mt-16 lg:px-8 lg:pr-28">
          <div className="mt-1 w-full items-center max-lg:flex max-lg:justify-center">
            <p className="about_head relative w-fit text-xl font-semibold text-orange lg:ml-10">
              About
            </p>
          </div>
          <div className="">
            <h1 className="text-5xl font-extrabold xs:text-6xl sm:text-7xl">
              Unforgettable Ethiopian Adventures
            </h1>
          </div>
          <div className="my-3 mb-5">
            <p>
              We specialize in providing unforgettable experiences in Ethiopia,
              from breathtaking landscapes to rich cultural heritage.
            </p>
          </div>
          <div className="labels my-5 flex h-fit items-center gap-4 text-center max-lg:justify-center">
            <div className="h-full w-40 rounded-xl bg-secondary py-4 lg:w-44">
              <h2 className="text-2xl font-bold">2000+</h2>
              <p className="max-xs:text-xs">Our Explores</p>
            </div>
            <div className="h-full w-40 rounded-xl bg-secondary py-4 lg:w-44">
              <h2 className="text-2xl font-bold">100+</h2>
              <p className="max-xs:text-xs">Destinations</p>
            </div>
            <div className="h-full w-40 rounded-xl bg-secondary py-4 lg:w-44">
              <h2 className="text-2xl font-bold">20+</h2>
              <p className="max-xs:text-xs">Years experience</p>
            </div>
          </div>
          <div className="btn-container">
            <Link to={"/"}>
              <button className="rounded-xl bg-orange px-4 py-3 font-medium text-white">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
