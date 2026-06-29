import packageJson from '../../../package.json';

export const telemetry = async (): Promise<string> => {
  const userAgent = typeof window !== 'undefined' ? navigator.userAgent : 'Unknown Node';
  const cores = typeof window !== 'undefined' ? navigator.hardwareConcurrency : 'Unknown';
  
  return `
[ SYSTEM AUDIT ]
----------------------------------------------
NODE_ENV:      production
FRAMEWORK:     Next.js v14.0.1
RUNTIME:       Vercel Edge Network
VERSION:       v${packageJson.version}

[ CLIENT FOOTPRINT ]
----------------------------------------------
USER_AGENT:    ${userAgent}
LOGICAL_CORES: ${cores}
RESOLUTION:    ${typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'HEADLESS'}

[ ACTIVE DAEMONS ]
----------------------------------------------
* sysadmin.service          [ACTIVE]
* fullstack.service         [ACTIVE]
* nepean-handyman.service   [ACTIVE]
`;
};