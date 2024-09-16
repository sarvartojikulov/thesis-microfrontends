const mode = import.meta.env.MODE
const base_url = import.meta.env.BASE_URL

export function getImageLink(imgSrc) {
    if(mode === "development") {
        return imgSrc
    }
    return base_url + imgSrc
}