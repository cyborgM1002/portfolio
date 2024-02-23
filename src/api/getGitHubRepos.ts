import axios from "axios";
import { GITHUB_REPO_URL } from "../env";

export default async function getGitHubRepos() {
  return await axios.get(GITHUB_REPO_URL).then((res) => res);
}
