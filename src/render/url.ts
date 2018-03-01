import { join } from "path";

function getPath(path: string): string {
    return join( __dirname, path);
}

let html = getPath('../view/html');
export const index = `${html}\\index.html`;
export const dataPath = getPath('../data')