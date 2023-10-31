`script`;

let seattle = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookieSale: 6.3,
    custEachHour: [],
    getCustPerHour: function() {
        for (let i = 6; i <= storeHours.length; i++) {  // i=hour
            let customers = random(this.minCustomers, this.maxCustomers);
        }
    }
}

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


let tokyo = {
    minCustomer: 3,
    maxCustomer: 24,
    avgCookieSale: 1.2,
}


let dubai = {
    minCustomer: 11,
    maxCustomer: 38,
    avgCookieSale: 3.7,
}


let paris = {
    minCustomer: 20,
    maxCustomer: 38,
    avgCookieSale: 2.3
}


let lima = {
    minCustomer: 2,
    maxCustomer: 16,
    avgCookieSale: 4.6
}
