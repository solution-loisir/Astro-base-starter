import { favicons } from "favicons";
import fs from "fs/promises";
import path from "path";

const source = process.argv[2];

const destination = {
  path: "public/images/favicons/"
};

(async function generateFavicons() {
  const response = await favicons(source, destination);
  await fs.mkdir(destination.path, { recursive: true });

  await Promise.all(
    response.images.map(async (image) => {
      switch(image.name) {
        case "favicon.ico":
        case "favicon-32x32.png":
        case "android-chrome-192x192.png":
        case "android-chrome-512x512.png":
        case "apple-touch-icon-180x180.png":
          await fs.writeFile(path.join(destination.path, image.name), image.contents);
      }
    })
  );
  console.log(`Favicons have been generated to \`${destination.path}\``);
})();