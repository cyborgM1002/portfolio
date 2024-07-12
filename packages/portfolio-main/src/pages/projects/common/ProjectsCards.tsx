import { ProjectsType as ProjectCardsTypes } from "../../../types/types";
import React from "react";
import { profile } from "../../../components";
import { useNavigate } from "react-router-dom";

const ProjectCards = ({ name, description, link }: ProjectCardsTypes) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(link)} className='relative h-4/5 w-4/5 rounded-md cursor-pointer'>
      <img src={profile} alt='AirMax Pro' className='z-0 h-full w-full rounded-md object-cover' />
      <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
      <div className='absolute bottom-4 left-4 text-left'>
        <h1 className='text-lg font-semibold text-white'>{name}</h1>
        <p className='mt-2 text-sm text-gray-300'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCards;
