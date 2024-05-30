import { CapitalizeFirstLetter } from "../../../../../../utils/utils";
import web_card from "@assets/images/web_ard.jpg";
import { GitHubRepos } from "../../../types/types";
import React from "react";

const MegaProjectItems = ({
  name,
  githubUrl,
  language,
  created_at,
  updated_at,
  description,
}: GitHubRepos) => {
  const OpenGitHubUrl = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className='h-full bg-white shadow shadow-neutral-500 border border-gray-400 rounded-lg dark:border-gray-500'>
      <div className='flex w-full h-1/2 rounded-lg justify-center items-center border border-gray-300 mb-3'>
        <img
          className='object-fill w-full h-full rounded-lg'
          src={web_card}
          alt='Failed to load image'
        />
      </div>
      <div className='px-3 p-5 w-full h-1/2 flex flex-col gap-5 justify-center items-center'>
        <div className='text-gray-700 text-2xl font-semibold'>{CapitalizeFirstLetter(name)}</div>
        <div className='w-full h-1/5 flex justify-between items-center gap-2'>
          <button
            onClick={() => OpenGitHubUrl(githubUrl)}
            className='w-4/5 h-10 rounded border text-xl text-white hover:text-gray-700 hover:bg-white border-brand bg-brand'
          >
            Code
          </button>
          <button
            onClick={() => OpenGitHubUrl(githubUrl)}
            className='w-1/5 h-10 rounded border text-lg hover:text-white border-brand hover:bg-brand'
          >
            Live
          </button>
        </div>
        <div className='w-full h-2/5 text-gray-700'>{description ? description : "..."}</div>
        <div className='w-full h-2/5'>
          <div className='text-lg mb-3'>
            <span className='font-light text-gray-500'>Language:</span>
            <span className='font-extralight text-gray-700'>{language}</span>
          </div>
          <div className='text-sm mb-1'>
            <span className='text-gray-500'>Created at:</span>
            <span className='text-gray-700 font-extralight'>
              {created_at?.slice(0, 10)?.replaceAll("-", "/")}
            </span>
          </div>
          <div className='text-sm mb-2'>
            <span className='font-light text-gray-500'>Last Updated:</span>
            <span className='font-extralight text-gray-700'>
              {updated_at?.slice(0, 10)?.replaceAll("-", "/")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaProjectItems;
