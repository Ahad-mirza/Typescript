type Customer = {
  name: string;
  birthDate?: Date; // birthDate is optional
};

function getCustomer(id: number): Customer | undefined {
  // Simulate getting customer from database
  if (id === 1) {
    return { name: "John Doe", birthDate: new Date() };
  }
  return undefined; // Simulating no customer found
}

let customer = getCustomer(1);
console.log(customer?.birthDate);