import { readFile } from "fs/promises"
import path from "path"

export const getFileURL = (url: string) => path.join(process.cwd() + '/app/api/', url)
export const getData = async (filePath: string) => {
    const response = await readFile(filePath, "utf-8")
    const data = JSON.parse(response)
    return data
}