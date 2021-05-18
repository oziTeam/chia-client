import {homedir} from "os";
import {resolve} from "path";
import {readFileSync} from "fs";
import {parse} from "yaml";
import {ChiaConfig} from "./types/ChiaConfig";

let chiaRootPath: string = "";

export const getChiaRootPath = (): string => {
    if (chiaRootPath) return chiaRootPath;
    const chiaFolderPath = process.env["CHIA_FOLDER_PATH"]

    if (process.env["CHIA_NET"] && process.env["CHIA_NET"].toLowerCase() === "testnet") {
        chiaRootPath = (chiaFolderPath ? chiaFolderPath : process.env["CHIA_ROOT"]) || ".chia/testnet7"
    } else {
        chiaRootPath = chiaFolderPath ? chiaFolderPath : resolve(
            homedir(),
            process.env["CHIA_ROOT"] || ".chia/mainnet"
        );
    }

    return chiaRootPath;
};

export const getChiaConfig = (): ChiaConfig => {
    const configFilePath = resolve(getChiaRootPath(), "config", "config.yaml");
    return parse(readFileSync(configFilePath, "utf8")) as ChiaConfig;
};

export const getChiaFilePath = (relativePath: string): string => {
    return resolve(getChiaRootPath(), relativePath);
};
