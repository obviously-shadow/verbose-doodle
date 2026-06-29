import { getProjects } from '../../api';

export const projects = async (args: string[]): Promise<string> => {
  try {
    const projectsList = await getProjects();

    if (!projectsList || projectsList.length === 0) {
      return "No projects found or GitHub API is rate-limiting.";
    }

    return projectsList
      .filter((repo: any) => !repo.fork)
      .map((repo: any) => {
        return `<div style="margin-bottom: 1rem;">
          <span style="font-weight: bold;">${repo.name}</span>
          ${repo.description ? `<br/><span style="opacity: 0.8;">> ${repo.description}</span>` : ''}
          <br/>🔗 <a href="${repo.html_url}" target="_blank" style="text-decoration: underline;">${repo.html_url}</a>
        </div>`;
      })
      .join('');
  } catch (error) {
    return "Failed to fetch projects. Check your config.json GitHub username.";
  }
};