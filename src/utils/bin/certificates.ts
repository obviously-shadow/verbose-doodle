export const certs = async (args: string[]): Promise<string> => {
  const certList = [
    { name: "Web Deployment", file: "/1.pdf" },
    { name: "Backend Engineering", file: "/backend.pdf" },
    { name: "HTML Fundamentals", file: "/html.pdf" },
    { name: "JS Mastery", file: "/javascript.pdf" }
  ];

  if (args[0] === 'open' && args[1]) {
    const target = certList.find(c => c.name.toLowerCase().includes(args[1].toLowerCase()));
    if (target) {
      window.open(target.file, '_blank');
      return `Opening ${target.name}...`;
    }
    return "Certificate not found. Use 'certs' to see the list.";
  }

  return `Active Certifications:
------------------------
${certList.map(c => `* ${c.name}`).join('\n')}

Usage: certs open <name>`;
};