const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const seattle = {
    location: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesSale: 6.3,
    sales: [],
    estimate: function () {
        this.sales = estimateSales(this);
    },
}

// initialize sales
seattle.estimate();


function estimateSales(store) {
    const sales = [];
    for (let i = 0; i < hours.length; i++) {
        const numCustomers = randomInRange(store.minCustomers, store.maxCustomers);
        console.log(numCustomers);
        const hourSales = Math.ceil(numCustomers * store.avgCookiesSale);
        sales.push(hourSales);
    }
    return sales;
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let container = document.getElementById('salesData'); // link to sales.html

function render(store) {   //how to copy coding from seattle to others, need to take out hard code

    // article per cookie stand
    let cookieStandArticle = document.createElement('article');
    container.appendChild(cookieStandArticle);

    let heading = document.createElement('h2');
    cookieStandArticle.appendChild(heading);
    heading.textContent = store.location;

    let hoursList = document.createElement('ul');
    cookieStandArticle.appendChild(hoursList);

    let totalSold = 0;

    for (let i = 0; i < store.sales.length; i++) {
        let salesItem = document.createElement('li');
        hoursList.appendChild(salesItem);
        let cookiesSoldThisHour = store.sales[i];
        let salesInfo = `${hours[i]}: ${store.sales[i]} cookies`;
        salesItem.textContent = salesInfo
        totalSold = totalSold + store.sales[i];
    }

    // add total line
    const totalItem = document.createElement('li');
    hoursList.appendChild(totalItem);
    const totalInfo = `Total: ${totalSold} cookies sold`; // need to find value for "${hoursList}"
    totalItem.textContent = totalInfo;
}

render(seattle);


const tokyo = {
    location: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesSale: 1.2,
    sales: [],
    estimate: function () {
        this.sales = estimateSales(this);
    },
}

tokyo.estimate();
render(tokyo);


const dubai = {
    location: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiesSale: 3.7,
    sales: [],
    estimate: function () {
        this.sales = estimateSales(this);
    },
}

dubai.estimate();
render(dubai);


const paris = {
    location: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiesSale: 2.3,
    sales: [],
    estimate: function () {
        this.sales = estimateSales(this);
    },
}

paris.estimate();
render(paris);


const lima = {
    location: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiesSale: 4.6,
    sales: [],
    estimate: function () {
        this.sales = estimateSales(this);
    },
}

lima.estimate();
render(lima);
