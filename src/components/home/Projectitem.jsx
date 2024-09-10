import React from "react";

const ProjectItem = ({ img, title, description, tecnologias }) => {
  const isImgValid = img && typeof img === "string";

  return (
    <div className="relative flex items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r
                   from-gray-200 to-[#001b5e]">
      <img
        src={isImgValid ? img : ''}
        alt='/'
        className={`w-[100%] h-[350px] rounded-xl group-hover:opacity-10 ${isImgValid ? '' : 'hidden'}`}
      />

      <div id="info-cards" className="w-[80%] hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%]">
        <h3 id="tittle-style" className="mb-3 text-2xl font-bold text-white tracking-wider text-center">{title}</h3>
        <p className="text-sm">{description}</p>
        {/* <img id="icon-tecnologias" src={tecnologias} className="pb-4 pt-2 text-white text-center"></img> */}
      </div>
    </div>
  );
};

export default ProjectItem;
