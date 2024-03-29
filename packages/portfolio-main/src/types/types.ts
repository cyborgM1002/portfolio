export type IntroType = {
  bio: string | undefined;
  summary: string | undefined;
  name: string | undefined;
};

export type GitHubRepos = {
  id?: number;
  name: string;
  description: string;
  githubUrl: string;
  language: string;
  created_at: string;
  updated_at: string;
  svn_url?: string;
  html_url?: string;
  clone_url?: string;
};
