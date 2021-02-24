const fs = require("fs");
const path = require("path");

// todo - should set these in env
const DOCS_DIR = "docs";
const ARTIFACT_DIR = ".docs-artifacts";

const COMPONENT_TYPES = [
  "builders",
  "datasources",
  "post-processors",
  "provisioners",
];

runJob();

async function runJob() {
  await Promise.all(
    COMPONENT_TYPES.map(async (type) => {
      return await snapshotDocs(DOCS_DIR, ARTIFACT_DIR, type);
    })
  );
}

async function snapshotDocs(sourceRoot, destRoot, subpath = "") {
  const rootDir = path.join(process.cwd(), sourceRoot);
  const sourceDir = path.join(process.cwd(), sourceRoot, subpath);
  const destDir = path.join(process.cwd(), destRoot, subpath);
  // Copy all MDX files from the sourceDir to the destDir
  await copyMdxFiles(sourceDir, destDir);
  //  Copy navData
  // If there is a nav-data file in the source directory, then use that.
  // Otherwise, generate the nav data by reading files and folders.
  const navDataFile = "nav-data.json";
  const customNavFile = path.join(sourceDir, navDataFile);
  const navData = fs.existsSync(customNavFile)
    ? JSON.parse(fs.readFileSync(customNavFile), "utf-8")
    : await generateNavData(rootDir, subpath);
  //  Write out the navData to the destDir
  const outFile = path.join(destDir, navDataFile);
  const fileString = JSON.stringify(navData, null, 2);
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(outFile, fileString);
}

async function copyMdxFiles(sourceDir, destDir) {
  const allFiles = await walk(sourceDir);
  const mdxFiles = allFiles.filter((f) => path.extname(f) === ".mdx");
  await Promise.all(
    mdxFiles.map(async (filePath) => {
      const relPath = path.relative(sourceDir, filePath);
      const destPath = path.join(destDir, relPath);
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(filePath, destPath);
    })
  );
}

async function generateNavData(contentDir, subpath = "", parentRoute = "") {
  const files = fs.readdirSync(path.join(contentDir, subpath, parentRoute));
  const validFiles = files
    .map((f) => {
      const isMdxFile = path.extname(f) === ".mdx";
      const resolved = path.resolve(contentDir, subpath, parentRoute, f);
      const stat = fs.statSync(resolved);
      const isDirectory = stat && stat.isDirectory();
      return { isMdxFile, isDirectory, fullPath: f };
    })
    .filter((f) => f.isMdxFile || f.isDirectory);
  const navData = await Promise.all(
    validFiles.map(async (file) => {
      const { isMdxFile, isDirectory, fullPath } = file;
      if (isMdxFile) {
        // TODO: use gray-matter instead
        const fileString = fs.readFileSync(
          path.resolve(contentDir, subpath, parentRoute, fullPath),
          "utf-8"
        );
        const title = fileString.match(/nav_title: (.*)\n/)[1];
        // TODO: ☝️
        const fileNoExt = fullPath.replace(path.extname(fullPath), "");
        const baseName = path.basename(fileNoExt);
        const routePath =
          baseName === "index"
            ? parentRoute
            : path.join(parentRoute, fileNoExt);
        const navLeaf = {
          title,
          path: routePath,
          filePath: path.join(parentRoute, fullPath),
        };
        return navLeaf;
      } else if (isDirectory) {
        const routes = await generateNavData(contentDir, subpath, fullPath);
        const navBranch = { title: fullPath, routes };
        return navBranch;
      }
      // we shouldn't have any other types
      return false;
    })
  );
  return navData;
}

async function walk(dir) {
  const files = fs.readdirSync(dir);
  const list = await Promise.all(
    files.map(async (file) => {
      const resolved = path.resolve(dir, file);
      const stat = fs.statSync(resolved);
      if (stat && stat.isDirectory()) {
        return await walk(resolved);
      } else {
        return resolved;
      }
    })
  );
  return list.reduce((acc, entry) => acc.concat(entry), []);
}
