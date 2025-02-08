"use strict";
function getCustomer(id) {
    // Simulate getting customer from database
    if (id === 1) {
        return { name: "John Doe", birthDate: new Date() };
    }
    return undefined; // Simulating no customer found
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthDate);
