import Themes from '../../../themes.json';

export const theme = async (
  args: string[],
  callback?: (value: string) => string,
): Promise<string> => {
  if (args.length === 0) {
    return `Usage: theme [arg]
Args:
  - ls: list all themes
  - set: set a theme

Example: 
  theme ls 
  theme set nord`;
  }

  switch (args[0].toLowerCase()) {
    case 'ls':
      let result = Themes.map((theme) => theme.name).join(', ');
      result += '\n\n';
      result += `Type 'theme set <name>' to apply one.`;
      return result;
      
    case 'set':
      const selectedTheme = args[1];
      if (!selectedTheme) return "Please specify a theme. Example: theme set paper";
      return callback(selectedTheme);
      
    default:
      return `Invalid argument. Try 'theme ls' to see available themes.`;
  }
};