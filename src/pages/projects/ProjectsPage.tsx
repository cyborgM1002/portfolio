import { useEffect, useState } from "react";
import getGitHubRepos from "../../api/getGitHubRepos";
// import ProjectItems from "./project-items/ProjectItems";

const ProjectsPage = () => {
  const [gitHubRepos, setGitHubRepos] = useState([]);
  useEffect(() => {
    getAllGitHubRepos();
  }, []);

  function getAllGitHubRepos() {
    try {
      getGitHubRepos()
        .then((res) => {
          const { data, status } = res;
          if (status == 200) {
            setGitHubRepos(data);
            console.log(data);
          } else {
            console.error("error");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full h-screen">
      <div>
        {/* {gitHubRepos?.map((items, index) => {
          return <div key={index}>{items}</div>;
        })} */}
      </div>
    </div>
  );
};

export default ProjectsPage;
