import axios from "axios";

const github_url = import.meta.env.VITE_GITHUB_URL;
const github_token = import.meta.env.VITE_GITHUB_TOKEN;

const github = axios.create({
  baseURL: github_url,
  headers: {
    Authorization: `token ${github_token}`,
  },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
