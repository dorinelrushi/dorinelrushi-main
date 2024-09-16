import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="heroSection  w-full h-[100%] py-[180px]">
     
      <p className="borderText">I am Dorinel Rushi 🌐✨</p>
      <h2 className="thetitle ">Transform Your Brand with Expert Design</h2>
      <p className="paragraph max-w-[650px] text-center">
        Creating impactful and creative design solutions to strengthen your
        online presence. Let's make your brand stand out.
      </p>
      <button className="btn">
        <Link href="#contact">Contact Now</Link>
      </button>
      <iframe className="mt-[25px] w-[340px] border-[3px] rounded-[30px] border-[#fed74a] h-[400px] lg:w-[750px]" width="auto" height="auto" src="https://www.youtube.com/embed/VrSICnXG4XQ?si=YsPQ5ZRu-mZaK_UL&amp;start=2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
}

export default HeroSection;
