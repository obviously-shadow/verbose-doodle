export const calc = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return 'Usage: calc [expression]. Example: calc 2 + 2 * 5';
  }

  try {
    const expr = args.join(' ');
    // Safely evaluate basic math
    const result = new Function(`return ${expr}`)();
    return `${expr} = ${result}`;
  } catch (e) {
    return 'Error: Invalid math expression.';
  }
};