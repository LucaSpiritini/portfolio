import React from "react";
import landingImg from "../public/assets/projects/landing.png";
import petshopImg from "../public/assets/projects/petshop.png";
import walletImg from "../public/assets/projects/wallet.png";
import portfolioImg from "../public/assets/projects/portfolio.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-5">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 pb-10">What I`&apos;`ve Developed</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Portfolio"
            backgroundImg={portfolioImg}
            projectUrl="/portfolio" //como cambiar esta url? -> el nombre del archivo componente.jsx tiene que coincidir con este.
            tech="Next JS"
          />
          <ProjectItem
            title="Landing Educational Page"
            backgroundImg={landingImg}
            projectUrl="/landing"
            tech="React JS - Material UI"
          />
          <ProjectItem
            title="PetShop Frontend"
            backgroundImg={petshopImg}
            projectUrl="/petshop"
            tech="React JS"
          />
          <ProjectItem
            title="Wallet App"
            backgroundImg={walletImg}
            projectUrl="/wallet"
            tech="Fullstack - JS CSS HTML"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
