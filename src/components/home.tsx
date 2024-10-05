import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import mtn from "../assets/images/mtn.jpg";
import sofumar from "../assets/images/sofumar.jpg";
import lalibela from "../assets/images/lalibela.jpg";
import fasil from "../assets/images/fasil.jpg";
import plane from "../assets/images/plane icon.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const container = useRef(null);
  const imgRef = useRef([]);

  useGSAP(() => {
    gsap.from(".txt", {
      y: 600,
      duration: 2,
      ease: "power1.out",
      delay: 1,
    });
  }, [imgRef]);

  return (
    <div className="min-w-screen min-h-screen">
      <div
        ref={container}
        className="home h-[calc(100vh/2)] w-screen text-white md:h-[110vh]"
      >
        <div
          ref={imgRef.current[0]}
          className="left h-full w-[70%] max-xs:h-[85%] md:w-[60%]"
        ></div>
        <div
          ref={imgRef.current[1]}
          className="right h-full w-[60%] max-xs:h-[80%] md:w-[55%]"
        ></div>
        <div
          ref={imgRef.current[2]}
          className="txt absolute left-0 top-[17%] w-full text-center font-extrabold leading-none md:top-[10%]"
        >
          <p className="text-[3rem] uppercase xs:text-[3.5rem] sm:text-[4rem] md:text-[7rem]">
            Explore
          </p>
          <p className="text-[5rem] uppercase xs:text-[5rem] sm:text-[6rem] md:text-[11rem] lg:text-[12rem] xl:text-[14rem] 2xl:text-[15rem]">
            Ethiopia
          </p>
        </div>
      </div>
      <div className="my-16 mt-24 w-full px-8">
        <div className="flex w-full grid-cols-2 flex-col-reverse gap-5 lg:grid">
          <div className="content mt-16 w-full px-8 max-lg:text-center lg:pr-28">
            <div className="mt-1 flex w-full gap-2 max-lg:justify-center">
              <img src={plane} alt="Plane Icon" />
              <p className="home_head relative text-lg font-semibold text-orange">
                Explore Your Dream
              </p>
            </div>
            <div className="">
              <h1 className="text-7xl font-extrabold">
                Discover The Best Destination In Ethiopia
              </h1>
            </div>
            <div className="my-3 mb-5">
              <p>
                Let's find you dream destinations here, we will recommend you a
                beautiful place and a cheap trip with your beloved family
              </p>
            </div>
            <div className="btn-container">
              <Link to={"/about"}>
                <button className="rounded-xl bg-orange px-4 py-3 font-medium text-white">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="side-images-container relative grid w-full grid-cols-11 gap-3 px-5 md:px-20 lg:px-0 lg:pr-10">
            <div className="deep-shadow col-span-4 col-start-3 row-span-2 h-fit w-fit rounded-3xl">
              <img
                src={mtn}
                alt="mountain image"
                className="h-[150px] w-[200px] rounded-3xl sm:h-[200px]"
              />
            </div>
            <div className="deep-shadow col-span-8 col-start-7 row-span-3 row-start-2 h-fit rounded-3xl">
              <img
                src={lalibela}
                alt="SofUmar cave"
                // className="w-full"
                className="h-[220px] w-full rounded-3xl"
              />
            </div>
            <div className="deep-shadow col-span-6 row-span-4 row-start-3 h-fit rounded-3xl">
              <img
                src={sofumar}
                alt="SofUmar cave"
                // className="w-full self-end"
                className="h-full max-h-[220px] w-full rounded-3xl"
              />
            </div>
            <div className="deep-shadow col-span-8 col-start-7 row-span-3 row-start-5 h-fit rounded-3xl">
              <img
                src={fasil}
                alt="SofUmar cave"
                // className="h-full w-full"
                className="h-full max-h-[300px] w-full rounded-3xl"
              />
            </div>
            <div className="glass absolute left-0 top-20 w-48 space-y-1 px-8 py-3 text-center">
              <h3 className="font-semibold">100+ Destinations</h3>
              <p className="px-4 leading-tight">
                more than 100 people use the platform
              </p>
            </div>
            <div className="glass absolute -left-16 bottom-44 w-24 space-y-1 p-3 text-center">
              <h3 className="font-semibold">100%</h3>
              <p className="leading-tight">verified</p>
            </div>
            <div className="glass absolute bottom-10 right-64 w-48 space-y-1 px-8 py-5 text-center">
              <h3 className="font-semibold">20+ Experience</h3>
              <p className="leading-tight">more than 20 years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
