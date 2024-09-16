const domain = import.meta.env.VITE_PRODUCTION_DOMAIN
const base_url = import.meta.env.BASE_URL

function imageLink(src) {
    if(domain) {
        return domain + "/events-app/latest" + src
    }
    return base_url + src
}


const events = [
    {
        "name": "Pink Floyd",
        "date": "12.02.2025",
        "location": "London",
        "image": imageLink("/pinkfloyd.jpeg")
    },
    {
        "name": "The Beatles",
        "date": "15.03.2025",
        "location": "Liverpool",
        "image": imageLink("/pinkfloyd.jpeg")
    },
    {
        "name": "Queen",
        "date": "20.04.2025",
        "location": "Manchester",
        "image": imageLink("/pinkfloyd.jpeg")
    }
]


export default events;