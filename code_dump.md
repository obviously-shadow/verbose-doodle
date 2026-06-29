# Source Code Dump

## Directory Tree
```text
verbose-doodle/
├── .eslintrc.js
├── .husky/
│   └── pre-commit
├── .prettierrc.json
├── config.json
├── docs/
│   ├── ads.txt
│   └── themes/
│       └── screenshots/
├── next-env.d.ts
├── package.json
├── postcss.config.js
├── src/
│   ├── api/
│   │   └── index.ts
│   ├── components/
│   │   ├── history/
│   │   │   ├── History.tsx
│   │   │   └── index.tsx
│   │   ├── input/
│   │   │   ├── index.tsx
│   │   │   └── Input.tsx
│   │   ├── layout/
│   │   │   ├── index.tsx
│   │   │   └── Layout.tsx
│   │   └── ps1/
│   │       ├── index.tsx
│   │       └── Ps1.tsx
│   ├── interfaces/
│   │   ├── history.ts
│   │   └── theme.ts
│   ├── pages/
│   │   ├── 404.tsx
│   │   ├── ads.txt
│   │   ├── index.tsx
│   │   ├── _app.tsx
│   │   └── _document.tsx
│   ├── styles/
│   │   ├── ads.txt
│   │   └── global.css
│   └── utils/
│       ├── ads.txt
│       ├── bin/
│       │   ├── about.ts
│       │   ├── calc.ts
│       │   ├── certificates.ts
│       │   ├── cowsay.ts
│       │   ├── exchange.ts
│       │   ├── handyman.ts
│       │   ├── index.ts
│       │   ├── neofetch.ts
│       │   ├── projects.ts
│       │   ├── setup.ts
│       │   ├── skills.ts
│       │   ├── social.ts
│       │   ├── telemetry.ts
│       │   ├── theme.ts
│       │   ├── utils.ts
│       │   └── weather.ts
│       ├── commandExists.ts
│       ├── shellProvider.tsx
│       ├── tabCompletion.ts
│       └── themeProvider.tsx
├── tailwind.config.js
└── themes.json
```

## File Contents


---
### File: `.eslintrc.js`
```js
module.exports = {
  plugins: ['prettier'],
  extends: ['next/core-web-vitals'],
  rules: {
    'no-console': 'error',
    'prettier/prettier': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'import/no-anonymous-default-export': 'off',
  },
};

```


---
### File: `.husky\pre-commit`
```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn lint

```


---
### File: `.prettierrc.json`
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "tabWidth": 2
}

```


---
### File: `config.json`
```json
{
  "bioUrl": "https://raw.githubusercontent.com/obviously-shadow/obviously-shadow/master/README.md",
  "social": {
    "instagram": "obviouslyshadow",
    "github": "obviously-shadow",
    "linkedin": "umarkhorami",
    "status": "DZPK4FjD9n"
  },
  "theme": "slate",
  "border": false
}
```


---
### File: `docs\ads.txt`
```txt
google.com, pub-4683229091490977, DIRECT, f08c47fec0942fa0
```


---
### File: `next-env.d.ts`
```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

```


---
### File: `package.json`
```json
{
  "name": "terminal",
  "version": "2.15.0",
  "license": "MIT",
  "author": {
    "name": "Umar Khorami",
    "url": "https://umarkhorami.com",
    "email": "umar.khorami@gmail.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/m4tt72/terminal"
  },
  "scripts": {
    "start": "next start",
    "build": "next build",
    "dev": "next dev",
    "next": "next",
    "preexport": "next build",
    "export": "next export",
    "lint": "eslint .",
    "prepare": "husky install"
  },
  "dependencies": {
    "@m4tt72/matomo-tracker-react": "^0.6.2",
    "@vercel/speed-insights": "^1.0.2",
    "axios": "^1.6.0",
    "cowsay-browser": "^1.1.8",
    "date-fns": "^2.30.0",
    "next": "^14.0.1",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-icons": "^4.11.0",
    "yarn": "^1.22.21"
  },
  "devDependencies": {
    "@types/node": "^20.8.10",
    "@types/react": "^18.2.33",
    "@typescript-eslint/eslint-plugin": "^6.9.1",
    "@typescript-eslint/parser": "^6.9.1",
    "autoprefixer": "^10.4.16",
    "eslint": "8.52.0",
    "eslint-config-next": "^14.0.1",
    "eslint-plugin-next": "^0.0.0",
    "eslint-plugin-prettier": "^5.0.1",
    "eslint-plugin-react": "^7.33.2",
    "husky": "^8.0.3",
    "postcss": "^8.4.31",
    "prettier": "^3.0.3",
    "tailwindcss": "^3.3.5",
    "tsx": "^4.22.4",
    "typescript": "^5.2.2"
  },
  "engines": {
    "node": ">=18.12.1"
  }
}

```


---
### File: `postcss.config.js`
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```


---
### File: `src\api\index.ts`
```ts
import { SpeedInsights } from "@vercel/speed-insights/next"
import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  return data;
};

export const getBio = async () => {
  const { data } = await axios.get(config.bioUrl);

  return data;
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');

  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

```


---
### File: `src\components\history\History.tsx`
```tsx
import React from 'react';
import { History as HistoryInterface } from '../../interfaces/history';
import { Ps1 } from '../ps1';

interface Props {
  history: Array<HistoryInterface>;
}

export const History: React.FC<Props> = ({ history }) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Ps1 />
            </div>

            <div className="flex-grow">{entry.command}</div>
          </div>

          <p
            className="whitespace-pre-wrap mb-2"
            style={{ lineHeight: 'normal' }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};

export default History;

```


---
### File: `src\components\history\index.tsx`
```tsx
export { default as History } from './History';

```


---
### File: `src\components\input\index.tsx`
```tsx
export { default as Input } from './Input';

```


---
### File: `src\components\input\Input.tsx`
```tsx
import React, { useEffect, useState } from 'react';
import { commandExists } from '../../utils/commandExists';
import { useShell } from '../../utils/shellProvider';
import { handleTabCompletion } from '../../utils/tabCompletion';
import { useTheme } from '../../utils/themeProvider';
import { Ps1 } from '../ps1';

export const Input = ({ inputRef, containerRef }) => {
  const { theme } = useTheme();
  const [value, setValue] = useState('');
  const {
    setCommand, history, lastCommandIndex, setHistory, setLastCommandIndex, clearHistory,
  } = useShell();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    }
  }, [history, containerRef]);

  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const commands: string[] = history.map(({ command }) => command).filter((val: string) => val);

    if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault();
      setValue('');
      setHistory('');
      setLastCommandIndex(0);
    }

    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault();
      clearHistory();
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      handleTabCompletion(value, setValue);
    }

    if (event.key === 'Enter' || event.code === '13') {
      event.preventDefault();
      setLastCommandIndex(0);
      setCommand(value);
      setValue('');
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!commands.length) return;
      const index: number = lastCommandIndex + 1;
      if (index <= commands.length) {
        setLastCommandIndex(index);
        setValue(commands[commands.length - index]);
      }
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!commands.length) return;
      const index: number = lastCommandIndex - 1;
      if (index > 0) {
        setLastCommandIndex(index);
        setValue(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setValue('');
      }
    }
  };

  return (
    <div className="flex flex-row space-x-2">
      <label htmlFor="prompt" className="flex-shrink">
        <Ps1 />
      </label>
      <input
        ref={inputRef}
        id="prompt"
        type="text"
        className="focus:outline-none flex-grow bg-transparent"
        aria-label="prompt"
        style={{ color: commandExists(value) || value === '' ? theme.green : theme.red }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
    </div>
  );
};

export default Input;
```


---
### File: `src\components\layout\index.tsx`
```tsx
export { default as Layout } from './Layout';

```


---
### File: `src\components\layout\Layout.tsx`
```tsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../utils/themeProvider';
import { FaGithub, FaInstagram, FaLinkedin, FaServer, FaCode, FaAward } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiUbuntu, SiDocker, SiReact } from 'react-icons/si';

const Layout = ({ children, onClick }) => {
  const { theme } = useTheme();
  const [mode, setMode] = useState('cli');

  useEffect(() => {
    const handleInitBento = () => setMode('bento');
    window.addEventListener('init-bento', handleInitBento);
    return () => window.removeEventListener('init-bento', handleInitBento);
  }, []);

  if (mode === 'bento') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-10 font-sans selection:bg-blue-500/30 overflow-y-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          
          {/* Main Intro Card */}
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">Umar Khorami</h1>
            <p className="text-xl text-blue-400 mb-4 font-medium">Software Developer & Grade 11 Student</p>
            <p className="text-slate-400 leading-relaxed max-w-lg text-lg">
              Based in Ottawa. I build full-stack web applications, experiment with server architecture, and continuously learn new technologies to solve real problems.
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-center gap-6 shadow-xl">
            <a href="https://github.com/obviously-shadow" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white hover:translate-x-1 transition-all">
              <FaGithub className="text-3xl text-slate-500" /> <span className="font-medium">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/umarkhorami" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white hover:translate-x-1 transition-all">
              <FaLinkedin className="text-3xl text-blue-500" /> <span className="font-medium">LinkedIn</span>
            </a>
            <a href="https://instagram.com/obviouslyshadow" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white hover:translate-x-1 transition-all">
              <FaInstagram className="text-3xl text-pink-500" /> <span className="font-medium">Instagram</span>
            </a>
          </div>

          {/* Tech Stack Card */}
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="text-2xl text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
            </div>
            <div className="flex gap-6 flex-wrap text-4xl text-slate-500">
              <div className="flex flex-col items-center gap-2 group"><SiTypescript className="group-hover:text-blue-400 transition-colors" /><span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">TypeScript</span></div>
              <div className="flex flex-col items-center gap-2 group"><SiReact className="group-hover:text-cyan-400 transition-colors" /><span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">React</span></div>
              <div className="flex flex-col items-center gap-2 group"><SiNextdotjs className="group-hover:text-white transition-colors" /><span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Next.js</span></div>
              <div className="flex flex-col items-center gap-2 group"><SiTailwindcss className="group-hover:text-teal-400 transition-colors" /><span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Tailwind</span></div>
              <div className="w-px h-10 bg-slate-800 mx-2"></div>
              <div className="flex flex-col items-center gap-2 group"><SiUbuntu className="group-hover:text-orange-500 transition-colors" /><span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Ubuntu</span></div>
              <div className="flex flex-col items-center gap-2 group"><SiDocker className="group-hover:text-blue-500 transition-colors" /><span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Docker</span></div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <FaAward className="text-2xl text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">Certifications</h2>
            </div>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Continuously expanding my knowledge base through structured learning paths.
            </p>
            <button 
              onClick={() => window.open('https://01965b72-97fc-4eb8-8d16-6dee14c3e6c2-00-3p0kn903rtz04.picard.replit.dev/', '_blank')}
              className="mt-auto bg-slate-800 hover:bg-slate-700 text-white py-3 px-4 rounded-xl text-sm font-medium transition-colors border border-slate-700"
            >
              View Certificates ↗
            </button>
          </div>

          {/* Return Button */}
          <button 
            onClick={() => setMode('cli')}
            className="md:col-span-3 bg-white text-black font-bold rounded-3xl p-6 hover:bg-slate-200 transition-colors flex items-center justify-center gap-3 text-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 17l6-6-6-6M12 19h8"/></svg>
            Return to Terminal
          </button>

        </div>
      </div>
    );
  }

  return (
    <div
      className="min-w-max text-xs md:min-w-full md:text-base selection:bg-white/30"
      onClick={onClick}
      style={{ color: theme.foreground, background: theme.background }}
    >
      <main className="w-full h-full p-4 md:p-6 max-w-4xl mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
```


---
### File: `src\components\ps1\index.tsx`
```tsx
export { default as Ps1 } from './Ps1';

```


---
### File: `src\components\ps1\Ps1.tsx`
```tsx
import React, { useEffect, useState } from 'react';
import { useTheme } from '../../utils/themeProvider';

export const Ps1 = () => {
  const [hostname, setHostname] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== undefined) {
      setHostname(window.location.hostname);
    }
  }, []);

  return (
    <div>
      <span
        style={{
          color: theme.yellow,
        }}
      >
        guest
      </span>
      <span
        style={{
          color: theme.white,
        }}
      >
        @
      </span>
      <span
        style={{
          color: theme.green,
        }}
      >
        {hostname}
      </span>
      <span
        style={{
          color: theme.white,
        }}
      >
        :$ ~
      </span>
    </div>
  );
};

export default Ps1;

```


---
### File: `src\interfaces\history.ts`
```ts
export interface History {
  id: number;
  date: Date;
  command: string;
  output: string;
}

```


---
### File: `src\interfaces\theme.ts`
```ts
export interface Theme {
  name: string;
  black: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  purple: string;
  cyan: string;
  white: string;
  brightBlack: string;
  brightRed: string;
  brightGreen: string;
  brightYellow: string;
  brightBlue: string;
  brightPurple: string;
  brightCyan: string;
  brightWhite: string;
  foreground: string;
  background: string;
  cursorColor: string;
}

```


---
### File: `src\pages\404.tsx`
```tsx
import { useRouter } from 'next/router';
import React from 'react';

const NotFoundPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.replace('/');
    alert("404 Page Not Found");
  });

  return null;
};

export default NotFoundPage;

```


---
### File: `src\pages\ads.txt`
```txt
google.com, pub-4683229091490977, DIRECT, f08c47fec0942fa0
```


---
### File: `src\pages\index.tsx`
```tsx
import { useMatomo } from '@m4tt72/matomo-tracker-react';
import Head from 'next/head';
import React from 'react';
import { History } from '../components/history';
import { Input } from '../components/input';
import { useShell } from '../utils/shellProvider';
import { useTheme } from '../utils/themeProvider';
import config from '../../config.json';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const { trackPageView } = useMatomo();
  const { history } = useShell();
  const { theme } = useTheme();

  const containerRef = React.useRef(null);

  React.useEffect(() => {
    trackPageView({});
  }, []);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history]);

  return (
    <>
      <Head>
        <title>Umar Khorami | Home</title>
      </Head>

      <div
        className="overflow-hidden h-full rounded"
        style={{
          borderColor: theme.yellow,
          padding: config.border ? 16 : 8,
          borderWidth: config.border ? 2 : 0,
        }}
      >
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input inputRef={inputRef} containerRef={containerRef} />
        </div>
      </div>
    </>
  );
};

export default IndexPage;

```


---
### File: `src\pages\_app.tsx`
```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Layout } from '../components/layout';
import '../styles/global.css';
import { ShellProvider } from '../utils/shellProvider';
import { ThemeProvider } from '../utils/themeProvider';

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    localStorage.setItem('visitedAt', new Date().toString());
  }, []);

  return (
    <ThemeProvider>
      <SpeedInsights />
      <ShellProvider>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <title>Umar Khorami | Terminal</title>
        </Head>
        
        <Layout onClick={onClickAnywhere}>
          <Component {...pageProps} inputRef={inputRef} />
        </Layout>
      </ShellProvider>
    </ThemeProvider>
  );
};

export default App;
```


---
### File: `src\pages\_document.tsx`
```tsx
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#262626" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#D79921" />
          <meta name="description" content="Obviously Shadow | Umar Khorami" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

```


---
### File: `src\styles\ads.txt`
```txt
google.com, pub-4683229091490977, DIRECT, f08c47fec0942fa0
```


---
### File: `src\styles\global.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'CascadiaCode';
  src: url(/assets/fonts/CascadiaCode.ttf);
  display: swap;
}

* {
  font-family: 'CascadiaCode', monospace;
}

html,
body,
body > div:first-child,
div#__next,
div#__next > div {
  height: 100%;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
}

a {
  text-decoration: underline;
}
```


---
### File: `src\utils\ads.txt`
```txt
google.com, pub-4683229091490977, DIRECT, f08c47fec0942fa0
```


---
### File: `src\utils\bin\about.ts`
```ts
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I'm Umar. 

I'm a 16-year-old Grade 11 student living in Ottawa. I taught myself how to code, and now I spend most of my time building full-stack web apps using Next.js. 

When I'm not writing code, I'm usually messing around with my home server or playing video games.`;
};
```


---
### File: `src\utils\bin\calc.ts`
```ts
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
```


---
### File: `src\utils\bin\certificates.ts`
```ts
export const certs = async (args: string[]): Promise<string> => {
    window.open(`https://01965b72-97fc-4eb8-8d16-6dee14c3e6c2-00-3p0kn903rtz04.picard.replit.dev/`);
  
    return 'Opening Certificates...';
  };
```


---
### File: `src\utils\bin\cowsay.ts`
```ts
import * as cow from 'cowsay-browser';
import { getQuote } from '../../api';

export const cowsay = async (args?: string[]): Promise<string> => {
  let output = '';

  if (args.length < 1 || args[0] === '') {
    const quote = (await getQuote()).quote;
    return cow.say({ text: quote });
  } else {
    output = args.join(' ');
    return cow.say({ text: output });
  }
};

```


---
### File: `src\utils\bin\exchange.ts`
```ts
export const exchange = async (args: string[]): Promise<string> => {
  if (args.length < 2) {
    return `Usage: exchange [amount] [currency_from] [currency_to]
Example: exchange 100 USD CAD
Available flags: USD, CAD, EUR, GBP, JPY`;
  }

  const amount = parseFloat(args[0]);
  const from = args[1].toUpperCase();
  const to = args[2] ? args[2].toUpperCase() : 'CAD';

  if (isNaN(amount)) {
    return "Error: First argument must be a number.";
  }

  try {
    // Using a free public API for exchange rates
    const res = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data = await res.json();

    if (data.result !== "success") {
      return `Error: Unsupported currency '${from}'.`;
    }

    const rate = data.rates[to];
    if (!rate) {
      return `Error: Unsupported currency '${to}'.`;
    }

    const converted = (amount * rate).toFixed(2);
    return `📈 LIVE EXCHANGE RATE:
${amount} ${from} = ${converted} ${to}
(Rate: 1 ${from} = ${rate} ${to})`;

  } catch (error) {
    return "Error fetching exchange rates. Please check your network connection.";
  }
};
```


---
### File: `src\utils\bin\handyman.ts`
```ts
export const handyman = async (args: string[]): Promise<string> => {
  return `Nepean Handyman Services

When I'm not writing code, I run a local property maintenance business in the Barrhaven area. 
I handle general repairs, maintenance, and hands-on work.`;
};
```


---
### File: `src\utils\bin\index.ts`
```ts
export * from './about';
export * from './projects';
export * from './social';
export * from './theme';
export * from './utils';
export * from './weather';
export * from './certificates';
export * from './skills';
export * from './setup';
export * from './calc';
export * from './exchange';
```


---
### File: `src\utils\bin\neofetch.ts`
```ts
import { formatDistanceToNow } from 'date-fns';
import packageJson from '../../../package.json';
import themes from '../../../themes.json';

const macos = `
                    'c.
                 ,xNMM.
               .OMMMMo
               OMMM0,
     .;loddo:' loolloddol;.
   cKMMMMMMMMMMNWMMMMMMMMMM0:
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.    
 XMMMMMMMMMMMMMMMMMMMMMMMX.      
;MMMMMMMMMMMMMMMMMMMMMMMM:       
:MMMMMMMMMMMMMMMMMMMMMMMM:       
.MMMMMMMMMMMMMMMMMMMMMMMMX.      
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.    
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk   
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.   
    kMMMMMMMMMMMMMMMMMMMMMMd     
     ;KMMMMMMMWXXWMMMMMMMk.      
       .cooc,.    .,coo:.        
`;

const windows = `
                                ..,
                    ....,,:;+ccllll
      ...,,+:;  cllllllllllllllllll
,cclllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
                                      
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
\`'ccllllllllll  lllllllllllllllllll
       \`' \*::  :ccllllllllllllllll
                       \`\`\`\`''*::cll
`;

const linux = `
            .-/+oossssoo+/-.               
        \`:+ssssssssssssssssss+:\`           
      -+ssssssssssssssssssyyssss+-         
    .ossssssssssssssssssdMMMNysssso.       
   /ssssssssssshdmmNNmmyNMMMMhssssss/      
  +ssssssssshmydMMMMMMMNddddyssssssss+     
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/    
  +sssssssssdmydMMMMMMMMddddyssssssss+     
   /ssssssssssshdmNNNNmyNMMMMhssssss/      
    .ossssssssssssssssssdMMMNysssso.
      -+sssssssssssssssssyyyssss+-
        \`:+ssssssssssssssssss+:\`
            .-/+oossssoo+/-.
`;

const getPlatform = (): 'Unknown' | 'Windows' | 'MacOS' | 'Linux' => {
  let os: 'Unknown' | 'Windows' | 'MacOS' | 'Linux' = 'Unknown';

  if (navigator.userAgent.indexOf('Win') != -1) {
    os = 'Windows';
  }

  if (navigator.userAgent.indexOf('Mac') != -1) {
    os = 'MacOS';
  }

  if (navigator.userAgent.indexOf('Linux') != -1) {
    os = 'Linux';
  }

  return os;
};

const getMainColor = () => {
  const platform = getPlatform();
  const themeName = localStorage.getItem('theme');
  const theme = themes.find((theme) => theme.name.toLowerCase() === themeName);

  switch (platform) {
    case 'MacOS':
      return theme.cyan;
    case 'Windows':
      return theme.blue;
    case 'Linux':
      return theme.red;
  }
};

const getArt = () => {
  const platform = getPlatform();
  const mainColor = getMainColor();

  switch (platform) {
    case 'MacOS':
      return `<p style="color: ${mainColor}">${macos}</p>`;
    case 'Windows':
      return `<p style="color: ${mainColor}">${windows}</p>`;
    case 'Linux':
      return `<p style="color: ${mainColor}">${linux}</p>`;
  }
};

const getInfo = () => {
  const os = getPlatform();
  const visitedAt = new Date(
    localStorage.getItem('visitedAt') || new Date().toString(),
  );
  const hostname = window.location.hostname;
  const theme = localStorage.getItem('theme');
  const resolution = `${window.screen.availWidth}x${window.screen.availHeight}`;
  const packages = Object.keys(packageJson.dependencies);
  const devPackages = Object.keys(packageJson.devDependencies);
  const mainColor = getMainColor();

  let message = '';

  message += `<span style="color: ${mainColor}">Host</span>: ${hostname}\n`;
  message += `<span style="color: ${mainColor}">OS</span>: ${os}\n`;
  message += `<span style="color: ${mainColor}">Packages</span>: ${
    packages.length + devPackages.length
  } (npm)\n`;
  message += `<span style="color: ${mainColor}">Resolution</span>: ${resolution}\n`;
  message += `<span style="color: ${mainColor}">Shell</span>: m4tt72-web\n`;
  message += `<span style="color: ${mainColor}">Theme</span>: ${theme}\n`;
  message += `<span style="color: ${mainColor}">License</span>: ${packageJson.license}\n`;
  message += `<span style="color: ${mainColor}">Version</span>: ${packageJson.version}\n`;
  message += `<span style="color: ${mainColor}">Repo</span>: <a href="${packageJson.repository.url}" target="_blank">${packageJson.repository.url}</a>\n`;
  message += `<span style="color: ${mainColor}">Uptime</span>: ${formatDistanceToNow(
    visitedAt,
  )}\n`;
  message += `<span style="color: ${mainColor}">Author</span>: ${packageJson.author.name} (${packageJson.author.email})\n`;
  return message;
};

export const neofetch = async (args?: string[]): Promise<string> => {
  const art = getArt();
  const info = getInfo();

  return `
  <table>
    <tr>
      <td>${art}</td>
      <td>${info}</td>
    <tr>
  </table>
  `;
};

```


---
### File: `src\utils\bin\projects.ts`
```ts
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
```


---
### File: `src\utils\bin\setup.ts`
```ts
export const setup = async (args: string[]): Promise<string> => {
  return `
Main Rig:
- CPU: AMD Ryzen 5 7600x
- GPU: XFX Radeon RX 7800 XT

Home Server:
- Lenovo ThinkCentre running Ubuntu Server & Docker
`;
};
```


---
### File: `src\utils\bin\skills.ts`
```ts
export const skills = async (args: string[]): Promise<string> => {
  return `
Languages & Frameworks
----------------------
* TypeScript & JavaScript
* React & Next.js
* Tailwind CSS

Infrastructure & Tools
----------------------
* Ubuntu Server
* Docker & Containerization
* Git & GitHub
* Cloudflare Tunnels
`;
};
```


---
### File: `src\utils\bin\social.ts`
```ts
import config from '../../../config.json';

export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/${config.social.instagram}/`);

  return 'Opening instagram....';
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

export const status = async (args: string[]): Promise<string> => {
  window.open(`https://stats.uptimerobot.com/DZPK4FjD9n/`);

  return 'Opening Status...';
};
```


---
### File: `src\utils\bin\telemetry.ts`
```ts
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
```


---
### File: `src\utils\bin\theme.ts`
```ts
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
```


---
### File: `src\utils\bin\utils.ts`
```ts
import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  return `Available Commands:
-------------------
about        A bit about me
skills       My programming languages & tools
setup        My PC and home server specs
projects     Fetch my GitHub repositories
certs        View my active certifications
social       My social media & contact links
exchange     [NEW] Check live currency exchange spreads
calc         Evaluate math (e.g., calc 10 * 5)
weather      Check the local weather
theme        Change the terminal theme
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
██╗   ██╗███╗   ███╗███████╗██████╗ 
██║   ██║████╗ ████║██╔════╝██╔══██╗
██║   ██║██╔████╔██║█████╗  ██████╔╝
██║   ██║██║╚██╔╝██║██╔══╝  ██╔══██╗
╚██████╔╝██║ ╚═╝ ██║███████╗██║  ██║
 ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝ v${packageJson.version}

Hey, I'm Umar. Type 'help' to see a list of available commands.
Type 'gui' to view the visual portfolio.
`;
};
```


---
### File: `src\utils\bin\weather.ts`
```ts
import { getWeather } from '../../api';

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');

  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }

  const weather = await getWeather(city);

  return weather;
};

```


---
### File: `src\utils\commandExists.ts`
```ts
import * as bin from './bin';

export const commandExists = (command: string) => {
  const commands = ['clear', ...Object.keys(bin)];

  return commands.indexOf(command.split(' ')[0]) !== -1;
};

```


---
### File: `src\utils\shellProvider.tsx`
```tsx
import React, { useEffect } from 'react';
import { History } from '../interfaces/history';
import * as bin from './bin';
import { useTheme } from './themeProvider';

interface ShellContextType {
  history: History[];
  command: string;
  lastCommandIndex: number;

  setHistory: (output: string) => void;
  setCommand: (command: string) => void;
  setLastCommandIndex: (index: number) => void;
  execute: (command: string) => Promise<void>;
  clearHistory: () => void;
}

const ShellContext = React.createContext<ShellContextType>(null);

interface ShellProviderProps {
  children: React.ReactNode;
}

export const useShell = () => React.useContext(ShellContext);

export const ShellProvider: React.FC<ShellProviderProps> = ({ children }) => {
  const [init, setInit] = React.useState(true);
  const [history, _setHistory] = React.useState<History[]>([]);
  const [command, _setCommand] = React.useState<string>('');
  const [lastCommandIndex, _setLastCommandIndex] = React.useState<number>(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setCommand('banner');
  }, []);

  useEffect(() => {
    if (!init) {
      execute();
    }
  }, [command, init]);

  const setHistory = (output: string) => {
    _setHistory([
      ...history,
      {
        id: history.length,
        date: new Date(),
        command: command.split(' ').slice(1).join(' '),
        output,
      },
    ]);
  };

  const setCommand = (command: string) => {
    _setCommand([Date.now(), command].join(' '));

    setInit(false);
  };

  const clearHistory = () => {
    _setHistory([]);
  };

  const setLastCommandIndex = (index: number) => {
    _setLastCommandIndex(index);
  };

  const execute = async () => {
    const [cmd, ...args] = command.split(' ').slice(1);

    switch (cmd) {
      case 'theme':
        const output = await bin.theme(args, setTheme);

        setHistory(output);

        break;
      case 'clear':
        clearHistory();
        break;
      case '':
        setHistory('');
        break;
      default: {
        if (Object.keys(bin).indexOf(cmd) === -1) {
          setHistory(`Command not found: ${cmd}. Try 'help' to get started.`);
        } else {
          try {
            const output = await bin[cmd](args);

            setHistory(output);
          } catch (error) {
            setHistory(error.message);
          }
        }
      }
    }
  };

  return (
    <ShellContext.Provider
      value={{
        history,
        command,
        lastCommandIndex,
        setHistory,
        setCommand,
        setLastCommandIndex,
        execute,
        clearHistory,
      }}
    >
      {children}
    </ShellContext.Provider>
  );
};

```


---
### File: `src\utils\tabCompletion.ts`
```ts
import * as bin from './bin';

export const handleTabCompletion = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const commands = Object.keys(bin).filter((entry) =>
    entry.startsWith(command),
  );

  if (commands.length === 1) {
    setCommand(commands[0]);
  }
};

```


---
### File: `src\utils\themeProvider.tsx`
```tsx
import React, { useEffect, useState } from 'react';
import Themes from '../../themes.json';
import { Theme } from '../interfaces/theme';
import config from '../../config.json';

export interface ThemeContextType {
  setTheme: (name: string) => string;
  theme: Theme;
}

const ThemeContext = React.createContext<ThemeContextType>(null);

interface Props {
  children: React.ReactNode;
}

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, _setTheme] = useState<Theme>(Themes[0]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme || config.theme);
  }, []);

  const setTheme = (name: string) => {
    const index = Themes.findIndex(
      (colorScheme) => colorScheme.name.toLowerCase() === name.toLowerCase()
    );

    if (index === -1) {
      return `Theme '${name}' not found. Try 'theme ls' to see the list of available themes.`;
    }

    _setTheme(Themes[index]);
    localStorage.setItem('theme', Themes[index].name);

    return `Theme switched to ${Themes[index].name}!`;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```


---
### File: `tailwind.config.js`
```js
const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = config;
```


---
### File: `themes.json`
```json
[
  {
    "name": "slate",
    "black": "#1a1b26", "red": "#f7768e", "green": "#9ece6a", "yellow": "#e0af68", "blue": "#7aa2f7", "purple": "#bb9af7", "cyan": "#7dcfff", "white": "#a9b1d6",
    "brightBlack": "#414868", "brightRed": "#f7768e", "brightGreen": "#9ece6a", "brightYellow": "#e0af68", "brightBlue": "#7aa2f7", "brightPurple": "#bb9af7", "brightCyan": "#7dcfff", "brightWhite": "#c0caf5",
    "foreground": "#a9b1d6", "background": "#1a1b26", "cursorColor": "#c0caf5"
  },
  {
    "name": "paper",
    "black": "#f4f4f4", "red": "#d70000", "green": "#005f00", "yellow": "#d75f00", "blue": "#005f87", "purple": "#8700af", "cyan": "#005faf", "white": "#444444",
    "brightBlack": "#bcbcbc", "brightRed": "#d70000", "brightGreen": "#008700", "brightYellow": "#875f00", "brightBlue": "#005f87", "brightPurple": "#8700af", "brightCyan": "#005faf", "brightWhite": "#444444",
    "foreground": "#444444", "background": "#f4f4f4", "cursorColor": "#444444"
  },
  {
    "name": "nord",
    "black": "#3B4252", "red": "#BF616A", "green": "#A3BE8C", "yellow": "#EBCB8B", "blue": "#81A1C1", "purple": "#B48EAD", "cyan": "#88C0D0", "white": "#E5E9F0",
    "brightBlack": "#4C566A", "brightRed": "#BF616A", "brightGreen": "#A3BE8C", "brightYellow": "#EBCB8B", "brightBlue": "#81A1C1", "brightPurple": "#B48EAD", "brightCyan": "#8FBCBB", "brightWhite": "#ECEFF4",
    "foreground": "#D8DEE9", "background": "#2E3440", "cursorColor": "#D8DEE9"
  }
]
```
