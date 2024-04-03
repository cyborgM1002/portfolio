import { GITHUB_URL, profile } from "../index";
import { IntroType } from "../../types/types";
import React from "react";
import { Link } from "react-router-dom";

function ImageCard({ bio, name, summary }: IntroType) {
  return (
    <div className='relative h-4/5 w-4/5 rounded-md shadow-2xl'>
      <Link to={GITHUB_URL} target='_blank'>
        <img src={profile} alt='AirMax Pro' className='z-0 h-full w-full rounded-md object-cover' />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
        <div className='absolute bottom-4 left-4 text-left'>
          <h1 className='text-lg font-semibold text-white'>{name}</h1>
          <p className='mt-2 text-sm text-gray-300'>{bio}</p>
          <p className='mt-2 text-xs text-gray-400'>{summary}</p>
        </div>
      </Link>
    </div>
  );
}

export default ImageCard;
