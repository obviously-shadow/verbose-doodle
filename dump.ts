import * as fs from 'fs';
import * as path from 'path';

// Fix: Use import.meta.dirname for ES Modules
const ROOT_DIR = import.meta.dirname;
const OUTPUT_FILE = path.join(ROOT_DIR, 'code_dump.md');

const IGNORE_DIRS = new Set(['node_modules', '.next', '.git', 'public', '.vscode']);
const IGNORE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2']);
const IGNORE_FILES = new Set(['package-lock.json', 'dump.ts', 'code_dump.md', '.DS_Store', 'tsconfig.json', 'next.config.js', 'README.md', 'yarn.lock', 'pnpm-lock.yaml', '.eslintrc.json', '.prettierrc', '.gitignore', '.npmrc']);

function buildTree(dir: string, prefix: string = ''): string {
    let treeStr = '';
    const items = fs.readdirSync(dir).filter(item => !IGNORE_DIRS.has(item) && !IGNORE_FILES.has(item));
    
    items.forEach((item, index) => {
        const fullPath = path.join(dir, item);
        const isLast = index === items.length - 1;
        const stat = fs.statSync(fullPath);
        const ext = path.extname(item).toLowerCase();

        if (stat.isDirectory()) {
            treeStr += `${prefix}${isLast ? '└── ' : '├── '}${item}/\n`;
            treeStr += buildTree(fullPath, prefix + (isLast ? '    ' : '│   '));
        } else if (!IGNORE_EXTS.has(ext)) {
            treeStr += `${prefix}${isLast ? '└── ' : '├── '}${item}\n`;
        }
    });
    return treeStr;
}

function dumpFiles(dir: string): string {
    let contentStr = '';
    const items = fs.readdirSync(dir).filter(item => !IGNORE_DIRS.has(item) && !IGNORE_FILES.has(item));

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        const ext = path.extname(item).toLowerCase();

        if (stat.isDirectory()) {
            contentStr += dumpFiles(fullPath);
        } else if (!IGNORE_EXTS.has(ext)) {
            const relativePath = path.relative(ROOT_DIR, fullPath);
            const fileContent = fs.readFileSync(fullPath, 'utf-8');
            contentStr += `\n\n---\n### File: \`${relativePath}\`\n\`\`\`${ext.replace('.', '')}\n${fileContent}\n\`\`\`\n`;
        }
    }
    return contentStr;
}

function main() {
    console.log('Generating code dump...');
    const tree = `## Directory Tree\n\`\`\`text\n${path.basename(ROOT_DIR)}/\n${buildTree(ROOT_DIR)}\`\`\`\n`;
    const files = dumpFiles(ROOT_DIR);
    
    fs.writeFileSync(OUTPUT_FILE, `# Source Code Dump\n\n${tree}\n## File Contents\n${files}`);
    console.log(`Success! Dumped to ${OUTPUT_FILE}`);
}

main();