import { getPlaiceholder } from "plaiceholder";

const getImage = async (src: string) => {
    try {
        const res = await fetch(src)
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        const buffer = await res.arrayBuffer()
        const { base64 } = await getPlaiceholder(Buffer.from(buffer));
        return base64
    } catch (err) {
        err;
    }
}
export default getImage