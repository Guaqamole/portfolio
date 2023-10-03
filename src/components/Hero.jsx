import React from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-60 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            안녕하세요.
            <span className="text-[#915eff]">&nbsp;Data Engineer</span>
          </h1>
          <h2 className={`${styles.heroSubHeadText}`}>김남규 입니다</h2>
          <p className={`${styles.heroSubText} mt-3 text-white-100`}>
            누군가는 '잡부' 라고 하지만,{"  "}
            <span
              className={`${styles.heroSubTextHighlight}`}
              style={{ fontWeight: "bold" }}
            >
              All-Rounder
            </span>
            가 되기위해 노력하는 개발자입니다.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
