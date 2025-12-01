// scripts/list-files.ts
import { readdir, stat } from 'fs/promises';
import { join, extname, relative } from 'path';

const TARGET_EXTENSIONS = ['.tsx', '.ts', '.js', '.jsx', '.db'];
const EXCLUDE_DIRS = ['node_modules', '.next', '.git', 'dist', 'build'];

/**
 * Recursively scan directory and collect files with target extensions
 */
async function scanDir(dir: string, baseDir: string = dir): Promise<string[]> {
  let files: string[] = [];

  try {
    const entries = await readdir(dir);

    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const relPath = relative(baseDir, fullPath);
      const ext = extname(entry).toLowerCase();

      // Skip excluded directories
      if (EXCLUDE_DIRS.includes(entry)) continue;

      const stats = await stat(fullPath);

      if (stats.isDirectory()) {
        files = files.concat(await scanDir(fullPath, baseDir));
      } else if (TARGET_EXTENSIONS.includes(ext)) {
        files.push(relPath);
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err);
  }

  return files;
}

/**
 * Main function
 */
async function main() {
  const rootDir = process.cwd(); // Current working directory
  console.log(`Scanning for files in: ${rootDir}\n`);
  console.log(`Target extensions: ${TARGET_EXTENSIONS.join(', ')}\n`);
  console.log('='.repeat(60));

  const files = await scanDir(rootDir);

  if (files.length === 0) {
    console.log('No matching files found.');
    return;
  }

  // Group by extension
  const grouped: Record<string, string[]> = {};
  files.forEach(file => {
    const ext = extname(file);
    if (!grouped[ext]) grouped[ext] = [];
    grouped[ext].push(file);
  });

  // Print grouped
  Object.keys(grouped)
    .sort()
    .forEach(ext => {
      console.log(`\n${ext.toUpperCase().replace('.', '')} Files (${grouped[ext].length}):`);
      console.log('-'.repeat(40));
      grouped[ext]
        .sort()
        .forEach(file => console.log(`  ${file}`));
    });

  console.log('\n' + '='.repeat(60));
  console.log(`Total files found: ${files.length}`);
}

main().catch(err => {
  console.error('Script failed:', err);
  process.exit(1);
});