import axios from "axios";
import { gitHubApiRepoUrl } from "../utils/environmentUtils.ts";

export default async function getGitHubRepos() {
  return await axios.get(gitHubApiRepoUrl).then((res) => res);
}
