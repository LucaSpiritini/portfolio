import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Luca | Resume</title>
        <meta
          name="description"
          content="Luca Spiritini - I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">RESUME</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Luca Spiritini</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/luca-spiritini/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/LucaSpiritini/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>JavaScript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next.JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Firebase
            <span className="px-2">|</span>RESTAPI
          </p>
        </div>

        <h5 className="text-center text-[18px] py-4">
          Web Development Experience
        </h5>
        {/* Experience */}

        <div className="py-6">
          <p className="italic">
            <span className="font-bold">BUENOS AIRES CITY</span>
            <span className="px-2">|</span>Buenos Aires, ARGENTINA
          </p>
          <p className="py-1 italic">Frontend web developer | 2022 - Current</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Develop and maintain front-end systems and user interfaces using
              JavaScript and modern JavaScript frameworks.
            </li>
            <li>
              Collaborate with cross-functional teams to understand and
              translate project requirements into technical solutions.
            </li>
            <li>
              Implement scalable and high-performance front-end architecture and
              infrastructure.
            </li>
            <li>Integrate with back-end APIs and services.</li>
            <li>
              Optimize application performance and ensure robustness and
              security.
            </li>
            <li>
              Troubleshoot and debug complex issues to identify and resolve root
              causes.
            </li>
            <li>
              Solid understanding of asynchronous programming and RESTful API
              design principles.
            </li>
            <li>
              Stay up-to-date with emerging technologies and industry trends
              relevant to front-end development.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold">BUENOS AIRES CITY</span>
            <span className="px-2">|</span>Buenos Aires, ARGENTINA
          </p>
          <p className="py-1 italic">
            Fullstack web developer | 2021 - Current
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Relational database software development experience.</li>
            <li>
              Experience with data architecture, data modeling, database design
              and data warehousing.
            </li>
            <li>Experience across the whole Software Development Life Cycle</li>
            <li>
              Familiar with development tools such as Git, Trello, Vercel, AWS.
            </li>
            <li>
              Emerging knowledge of software applications and technical
              processes within a technical discipline (e.g., cloud, machine
              learning, mobile).
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">BUENOS AIRES CITY</span>
            <span className="px-2">|</span>Buenos Aires, ARGENTINA
          </p>
          <p className="py-1 italic">
            General manager at medical office | 2019 - Current
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Reception and main point of contact for patients and visitors.
            </li>
            <li>Responsible for emails, schedules, and phone calls.</li>
            <li>
              Handling agreements and billing for health insurance companies and
              prepaid medical companies.
            </li>
            <li>Processing payments to employed healthcare professionals.</li>
            <li>Invoicing and managing financial accounts.</li>
            <li>Selection of healthcare professionals for recruitment.</li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold">BUENOS AIRES CITY</span>
            <span className="px-2">|</span>Buenos Aires, ARGENTINA
          </p>
          <p className="py-1 italic">
            Sales representative for On-X and CrioLyfe in Argentina | 2013 -
            2016
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Cardiac and neurological vascular prosthetic importation,
              promotion and sale.
            </li>
            <li>Participation in public and private bids.</li>
            <li>Delivery notes preparation.</li>
            <li>
              Dispatch, delivery and control of surgical material in
              high-complexity health centers.
            </li>
            <li>
              Coordination of logistics for national congress exhibitions.
            </li>
            <li>Stock control.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
