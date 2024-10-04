import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import leftMtn from "../assets/images/left-mnt 1.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const container = useRef(null);
  return (
    <div className="min-w-screen min-h-screen">
      <div
        ref={container}
        className="home h-[calc(100vh/2)] w-screen text-white md:h-[110vh]"
      >
        <div className="left h-full w-[70%] max-xs:h-[85%] md:w-[60%]"></div>
        <div className="right h-full w-[60%] max-xs:h-[80%] md:w-[55%]"></div>
        <div className="txt absolute left-0 top-[17%] w-full text-center font-extrabold leading-none md:top-[10%]">
          <p className="text-[3rem] uppercase xs:text-[3.5rem] sm:text-[4rem] md:text-[7rem]">
            Explore
          </p>
          <p className="text-[5rem] uppercase xs:text-[5rem] sm:text-[6rem] md:text-[11rem] lg:text-[12rem] xl:text-[14rem] 2xl:text-[15rem]">
            Ethiopia
          </p>
        </div>
      </div>
      <div className="min-h-screen w-screen">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quod
        officia dolorem porro mollitia aperiam labore quam libero sunt, odio
        aliquid sit quo illo similique aut earum cum provident ad?
      </div>
    </div>
  );
};

export default Home;
