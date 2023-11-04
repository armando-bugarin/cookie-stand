const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStand(location, minCustomers, maxCustomers, avgCookiesSale) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesSale = avgCookiesSale;
    this.sales = this.estimateSales();
}

CookieStand.prototype.estimateSales = function () {
    const sales = [];
    for (let i = 0; i < hours.length; i++) {
        const numCustomers = randomInRange(this.minCustomers, this.maxCustomers);
        const hourSales = Math.ceil(numCustomers * this.avgCookiesSale);
        sales.push(hourSales);
    }
    return sales;
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = new CookieStand('Seattle', 23, 65, 6.3);
const tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
const dubai = new CookieStand('Dubai', 11, 38, 3.7);
const paris = new CookieStand('Paris', 20, 38, 2.3);
const lima = new CookieStand('Lima', 2, 16, 4.6);

console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);

const container = document.getElementById('root');

const tableElem = document.createElement('table');
container.appendChild(tableElem);

CookieStand.prototype.render = function () {

    const salesData = document.createElement('tr');
    tableElem.appendChild(salesData);

    const salesLocation = document.createElement('td');
    salesData.appendChild(salesLocation);
    salesLocation.textContent = this.location;

    for (let i = 0; i < this.sales.length; i++) {
        const hourlySalesCell = document.createElement('td');
        salesData.appendChild(hourlySalesCell);
        hourlySalesCell.textContent = this.sales[i];
    }

    /*const dataRow = document.createElement('tr');
    tableElem.appendChild(dataRow);

    const storeDataCell = document.createElement('td');
    dataRow.appendChild(storeDataCell);
    storeDataCell.textContent = this.location;

    return tableElem;*/
}

function renderTableHeader() {

    const tableHeader = document.createElement('tr');
    tableElem.appendChild(tableHeader);

    const headerCell = document.createElement('th');
    tableHeader.appendChild(headerCell);
    headerCell.textContent = ''; // leaves blank spot at top left

    for (let i = 0; i < hours.length; i++) {
        const headerData = document.createElement('th');
        tableHeader.appendChild(headerData);
        headerData.textContent = hours[i];
    }
}

function renderTableFooter() {

    const tableFooter = document.createElement('tr');
    tableElem.appendChild(tableFooter);

    const footerCell = document.createElement('td');
    tableFooter.appendChild(footerCell);
    footerCell.textContent = 'Total';

    for (let i = 0; i < estimateSales; i++) {
        const footerData = document.createElement('tfoot');
        tableFooter.appendChild(footerData);
        footerData.textContent = 'need data';
    }

}

renderTableHeader();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

renderTableFooter();











/* initialize sales
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

render(seattle); // can git rid of all below


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
*/
