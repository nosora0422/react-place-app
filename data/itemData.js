export function getPlaceData(){
    return PlaceData;
}

export function getPlaceById(id){
    return PlaceData.find(item => item.id === id);    
}

// resort list data
export const PlaceData = [
    {
        id:1,
        area:'Vancouver',
        category: 'Cafe',
        name: 'Breka Bakery & Café',
        googleLink: 'https://maps.app.goo.gl/AksvXocq8sT6QZzJ9',
        img: require('../assets/breka.jpg'),
        address:'812 Bute St, Vancouver, BC V6E 1Y4',
        open: 'Open 24 hours',
        close: 'Open 24 hours',
        website: 'http://breka.ca/',
        phone: '+16046208200',
        popularTimes: '7-9 p.m.',
    },
    {
        id:2,
        area:'Richmond',
        category: 'Cafe',
        name: 'Breka Richmond',
        googleLink: 'https://maps.app.goo.gl/AksvXocq8sT6QZzJ9',
        img: require('../assets/breka.jpg'),
        address:'812 Bute St, Vancouver, BC V6E 1Y4',
        open: 'Open 24 hours',
        close: 'Open 24 hours',
        website: 'http://breka.ca/',
        phone: '+16046208200',
        popularTimes: '7-9 p.m.', 
    },
    {
        id:3,
        area:'Burnaby',
        category: 'Cafe',
        name: 'Breka Burnaby',
        googleLink: 'https://maps.app.goo.gl/AksvXocq8sT6QZzJ9',
        img: require('../assets/breka.jpg'),
        address:'812 Bute St, Vancouver, BC V6E 1Y4',
        open: 'Open 24 hours',
        close: 'Open 24 hours',
        website: 'http://breka.ca/',
        phone: '+16046208200',
        popularTimes: '7-9 p.m.', 
    },
    {
        id:4,
        area:'Coquitlam',
        category: 'Cafe',
        name: 'Breka Coquitlam',
        googleLink: 'https://maps.app.goo.gl/AksvXocq8sT6QZzJ9',
        img: require('../assets/breka.jpg'),
        address:'812 Bute St, Vancouver, BC V6E 1Y4',
        open: 'Open 24 hours',
        close: 'Open 24 hours',
        website: 'http://breka.ca/',
        phone: '+16046208200',
        popularTimes: '7-9 p.m.', 
    }
]