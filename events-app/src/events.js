const domain = import.meta.env.VITE_PRODUCTION_DOMAIN;
const base_url = "/events-app/latest";

function imageLink(src) {
    if(import.meta.env.DEV) {
        return domain + src;
    }

    if (domain) {
        return domain + base_url + src;
    }
    return base_url + src;
}

const events = [
    {
        id: 0,
        name: "Pink Floyd",
        dates: ["12.02.2025", "13.02.2025"],
        location: "London",
        image: imageLink("/images/Pink_Floyd.jpg"),
    },
    {
        id: 99,
        name: "Daft Punk",
        dates: ["12.02.2025", "13.02.2025"],
        location: "London",
        image: imageLink("/images/DaftPunk.jpeg"),
    },
    {
        id: 1,
        name: "The Beatles",
        dates: ["15.03.2025", "16.03.2025"],
        location: "Liverpool",
        image: imageLink("/images/The_Beatles.jpg"),
    },
    {
        id: 2,
        name: "Queen",
        dates: ["20.04.2025", "21.04.2025"],
        location: "Manchester",
        image: imageLink("/images/Queen.jpg"),
    },
    {
        id: 3,
        name: "The Rolling Stones",
        dates: ["05.05.2025", "06.05.2025"],
        location: "Birmingham",
        image: imageLink("/images/The_Rolling_Stones.jpg"),
    },
    {
        id: 4,
        name: "Led Zeppelin",
        dates: ["10.06.2025", "11.06.2025"],
        location: "Glasgow",
        image: imageLink("/images/Led_Zeppelin.jpg"),
    },
    {
        id: 5,
        name: "David Bowie",
        dates: ["15.07.2025", "16.07.2025"],
        location: "Edinburgh",
        image: imageLink("/images/David_Bowie.jpg"),
    },
    {
        id: 6,
        name: "Nirvana",
        dates: ["22.08.2025", "23.08.2025"],
        location: "Seattle",
        image: imageLink("/images/Nirvana.jpg"),
    },
    {
        id: 7,
        name: "AC/DC",
        dates: ["10.09.2025", "11.09.2025"],
        location: "Sydney",
        image: imageLink("/images/AC_DC.jpg"),
    },
    {
        id: 8,
        name: "Guns N' Roses",
        dates: ["15.10.2025", "16.10.2025"],
        location: "Los Angeles",
        image: imageLink("/images/Guns_N_Roses.jpg"),
    },
    {
        id: 9,
        name: "The Who",
        dates: ["01.11.2025", "02.11.2025"],
        location: "New York",
        image: imageLink("/images/The_Who.jpg"),
    },
    {
        id: 10,
        name: "Jimi Hendrix",
        dates: ["20.11.2025", "21.11.2025"],
        location: "San Francisco",
        image: imageLink("/images/Jimi_Hendrix.jpg"),
    },
    {
        id: 11,
        name: "The Doors",
        dates: ["01.12.2025", "02.12.2025"],
        location: "Los Angeles",
        image: imageLink("/images/The_Doors.jpg"),
    },
    {
        id: 12,
        name: "The Eagles",
        dates: ["15.01.2026", "16.01.2026"],
        location: "Dallas",
        image: imageLink("/images/The_Eagles.jpg"),
    },
    {
        id: 13,
        name: "Metallica",
        dates: ["05.02.2026", "06.02.2026"],
        location: "Chicago",
        image: imageLink("/images/Metallica.jpg"),
    },
    {
        id: 14,
        name: "Black Sabbath",
        dates: ["20.03.2026", "21.03.2026"],
        location: "Birmingham",
        image: imageLink("/images/Black_Sabbath.jpg"),
    },
    {
        id: 15,
        name: "Fleetwood Mac",
        dates: ["01.04.2026", "02.04.2026"],
        location: "Dublin",
        image: imageLink("/images/Fleetwood_Mac.jpg"),
    },
    {
        id: 16,
        name: "Radiohead",
        dates: ["12.05.2026", "13.05.2026"],
        location: "Paris",
        image: imageLink("/images/Radiohead.jpg"),
    },
    {
        id: 17,
        name: "U2",
        dates: ["22.06.2026", "23.06.2026"],
        location: "Dublin",
        image: imageLink("/images/U2.jpg"),
    },
    {
        id: 18,
        name: "Pearl Jam",
        dates: ["10.07.2026", "11.07.2026"],
        location: "Seattle",
        image: imageLink("/images/Pearl_Jam.jpg"),
    },
    {
        id: 19,
        name: "Red Hot Chili Peppers",
        dates: ["01.08.2026", "02.08.2026"],
        location: "Los Angeles",
        image: imageLink("/images/Red_Hot_Chili_Peppers.jpg"),
    },
    {
        id: 20,
        name: "Coldplay",
        dates: ["05.09.2026", "06.09.2026"],
        location: "London",
        image: imageLink("/images/Coldplay.jpg"),
    },
    {
        id: 21,
        name: "Foo Fighters",
        dates: ["10.10.2026", "11.10.2026"],
        location: "Berlin",
        image: imageLink("/images/Foo_Fighters.jpg"),
    },
    {
        id: 22,
        name: "The Clash",
        dates: ["15.11.2026", "16.11.2026"],
        location: "London",
        image: imageLink("/images/The_Clash.jpg"),
    },
];

export default events;
