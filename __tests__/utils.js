const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT = path.resolve(__dirname, '..');

/**
 * Parse YAML front matter from a markdown string.
 * Returns { data, content } where data is the parsed YAML object.
 */
function parseFrontMatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;
  try {
    const data = yaml.load(match[1]);
    return { data, content: match[2] };
  } catch {
    return null;
  }
}

/**
 * Read and parse a YAML file from the workspace root.
 */
function readYaml(relativePath) {
  const fullPath = path.join(ROOT, relativePath);
  const content = fs.readFileSync(fullPath, 'utf8');
  return yaml.load(content);
}

/**
 * Read a file from the workspace root.
 */
function readFileContent(relativePath) {
  const fullPath = path.join(ROOT, relativePath);
  return fs.readFileSync(fullPath, 'utf8');
}

/**
 * Recursively list files under a directory (relative to ROOT),
 * filtered by predicate on the relative path.
 */
function globFiles(dir, filter) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return [];
  const entries = fs.readdirSync(abs, { withFileTypes: true });
  return entries.flatMap((e) => {
    const rel = path.join(dir, e.name);
    if (e.isDirectory()) return globFiles(rel, filter);
    return filter(rel) ? [rel] : [];
  });
}

module.exports = {
  ROOT,
  parseFrontMatter,
  readYaml,
  readFileContent,
  globFiles,
};
