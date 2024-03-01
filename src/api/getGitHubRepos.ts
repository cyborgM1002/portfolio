import axios from "axios";
import { GITHUB_API_REPO_URL } from "../env";

export default async function getGitHubRepos() {
  return await axios.get(GITHUB_API_REPO_URL).then((res) => res);
}
