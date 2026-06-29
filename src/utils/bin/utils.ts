import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  return `Commands:
about        A bit about me
skills       My programming languages & tools
setup        My PC and home server specs
handyman     My local business
projects     Fetch my GitHub repositories
social       My social links
certs        View my active certifications
theme        Change terminal theme
weather      Check the weather
calc         Evaluate math (e.g., calc 10 * 5)
gui          Open the visual portfolio dashboard
clear        Clear the terminal`;
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('init-bento'));
  }
  return 'Opening visual dashboard...';
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: unable to run the command '${args?.[0] || ''}' as root.`;
};

export const banner = (args?: string[]): string => {
  return `
██╗   ██╗███╗   ███╗ █████╗ ██████╗ 
██║   ██║████╗ ████║██╔══██╗██╔══██╗
██║   ██║██╔████╔██║███████║██████╔╝
██║   ██║██║╚██╔╝██║██╔══██║██╔══██╗
╚██████╔╝██║ ╚═╝ ██║██║  ██║██║  ██║
 ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ v${packageJson.version}

Hey, I'm Umar. Type 'help' to see a list of available commands.
Type 'gui' to view the visual portfolio.
`;
};