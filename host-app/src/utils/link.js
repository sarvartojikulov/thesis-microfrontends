const domain = import.meta.env.VITE_PRODUCTION_DOMAIN;
const base_url = import.meta.env.BASE_URL;

export function imageLink(src) {
    if(import.meta.env.DEV) {
        return domain + src;
    }

    if (domain) {
        return domain + base_url + src;
    }
    return base_url + src;
}