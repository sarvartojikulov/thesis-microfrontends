const domain = import.meta.env.VITE_PRODUCTION_DOMAIN
const base_url = "/events-app/latest"

function imageLink(src) {
    if(domain) {
        return domain + base_url + src
    }
    return base_url + src
}


const events = [
    {
        "name": "Pink Floyd",
        "dates": ["12.02.2025", "13.02.2025"],
        "location": "London",
        "image": imageLink("/pinkfloyd.jpeg")
    },
    {
        "name": "The Beatles",
        "dates": ["15.03.2025", "16.03.2025"],
        "location": "Liverpool",
        "image": imageLink("/pinkfloyd.jpeg")
    },
    {
        "name": "Queen",
        "dates": ["20.04.2025", "21.04.2025"],
        "location": "Manchester",
        "image": imageLink("/pinkfloyd.jpeg")
    }
]

export default events;