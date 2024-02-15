import axios from "axios";
import { GITHUB_URL } from "../env";

export default async function getGitHubRepos() {
  return await axios.get(GITHUB_URL).then((res) => {
    return res;
  });
}
