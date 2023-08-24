import { resolve } from "path";
import { readdirSync } from "fs";

const OUT_DIR = "../dist";
const ROOT_PAGE = "./src/index.html";
const PAGES_PATH = "./src/pages";

const htmlToEntries = () => {
  const files = readdirSync(PAGES_PATH);

  if (!files) {
    return null;
  }

  return files.reduce((entries, file) => {
    const filename = file.split(".")[0];

    entries[filename] = `${PAGES_PATH}/${file}`;

    return entries;
  }, {});
};

htmlToEntries();

export default {
  root: "src",
  build: {
    emptyOutDir: OUT_DIR,
    rollupOptions: {
      input: {
        main: resolve(__dirname, ROOT_PAGE),
        ...htmlToEntries(),
      },
    },
  },
};
