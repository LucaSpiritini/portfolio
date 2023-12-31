import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-5 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API&apos;s and other backend technologies. I&apos;m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript and
            React. I am a quick learner and can pick up new tech stacks as
            needed and I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            I started web developement in 2021. I have experience working 
            directly with clients and taking mock wireframes all the way 
            to deployed applications.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-400 cursor-pointer">
              Check out some of my latest projects here.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-purple-400 rounded-xl flex items-center justify-center mt-10">
          <Image src={AboutImg} className="rounded-xl" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default About;
