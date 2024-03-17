const config = {
  gitHubApiUrl: String(import.meta.env.GITHUB_API_URL),
  gitHubUrl: String(import.meta.env.VITE_GITHUB_URL),
  gitHubApiRepoUrl: String(import.meta.env.VITE_GITHUB_API_REPO_URL),
  userSummary: String(import.meta.env.VITE_USER_SUMMARY),
};

export const { gitHubApiUrl, gitHubUrl, gitHubApiRepoUrl, userSummary } =
  config;
