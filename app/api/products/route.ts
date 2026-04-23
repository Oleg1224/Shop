import { getData, getFileURL } from "../helper";

export const GET = async () => {
    const filePath = getFileURL('products/data.json')
    const data = await getData(filePath)
    return Response.json({ok: true, data})
}
export const POST = () => {
}