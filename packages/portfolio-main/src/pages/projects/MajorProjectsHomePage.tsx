import { GitHubRepos } from "../../types/types";
import React from "react";
import MegaProjectItems from "./common/MegaProjectItems";
import { useGithubProjects } from "../../hooks/useProjects";

const MajorProjectsHomePage = () => {
  const { githubProjects, loading } = useGithubProjects();

  return (
    <div className='w-4/5 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-20'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        githubProjects?.map(
          ({
            id,
            name,
            svn_url,
            html_url,
            clone_url,
            language,
            created_at,
            updated_at,
            description,
          }: GitHubRepos) => (
            <div key={id}>
              <MegaProjectItems
                name={name}
                description={description}
                githubUrl={svn_url ?? html_url ?? clone_url ?? ""}
                language={language}
                created_at={created_at}
                updated_at={updated_at}
              />
            </div>
          ),
        )
      )}
    </div>
  );
};

export default MajorProjectsHomePage;
