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


let container = document.getElementById('root'); // link to sales.html

function render(store) {   //how to copy coding from seattle to others, need to take out hard code

    // need an article per cookie stand
    let cookieStandArticle = document.createElement('article');
    container.appendChild(cookieStandArticle);

    let heading = document.createElement('h2');
    cookieStandArticle.appendChild(heading);
    heading.textContent = seattle.location;

    let hoursList = document.createElement('ul');
    cookieStandArticle.appendChild(hoursList);

    let totalSold = 0;

    for (let i = 0; i < seattle.sales.length; i++) {
        let salesItem = document.createElement('li');
        hoursList.appendChild(salesItem);
        let cookiesSoldThisHour = seattle.sales[i];
        let salesInfo = `${hours[i]}: ${seattle.sales[i]} cookies`;
        salesItem.textContent = salesInfo
    }

    // add total line
    const totalItem = document.createElement('li');
    hoursList.appendChild(totalItem);
    const totalInfo = `Total: ${hoursList} cookies sold`; // need to find value for "${hoursList}"
    totalItem.textContent = totalInfo;
}

render(seattle);


const tokyo = {
    minCustomer: 3,
    maxCustomer: 24,
    avgCookiesSale: 1.2,
    sales: [],
    estimate: function () {
        this.sales = estimateSales(this);
    },
}
 
render(tokyo);
tokyo.estimate();


const dubai = {
    minCustomer: 11,
    maxCustomer: 38,
    avgCookiesSale: 3.7,
    sales: [],
    estimate: function () {
        this.sales = estimateSales(this);
    },
}
render(dubai);
dubai.estimate();


const paris = {
    minCustomer: 20,
    maxCustomer: 38,
    avgCookiesSale: 2.3,
    sales: [],
    estimate: function () {
        this.sales = estimateSales(this);
    },
}
render(paris);
paris.estimate();


const lima = {
    minCustomer: 2,
    maxCustomer: 16,
    avgCookiesSale: 4.6,
    sales: [],
    estimate: function () {
        this.sales = estimateSales(this);
    },
}
render(lima);
lima.estimate();
