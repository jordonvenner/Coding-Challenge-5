//Task 1: Object Properties

const customer = {
    name: "Lane Berry",
    age: 23,
    email: "laneb@gmail.com"
};

console.log('Name: ${customer.name}');
console.log('Age: ${customer.age}');
console.log('Email: ${customer.email}');


//Task 2: Object Methods

const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing"
};

const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",

    displayOrder: function() {
        console.log('Order ID: ${this.orderID}');
        console.log('Total Amount: $${this.totalAmount}');
        console.log('Status: ${this.status}');
    }
};

order.displayOrder();


//Task 3: Array Manipulation (push, pop, shift, unshift)

const cartItems = ["TV", "Laptop", "Mouse"];

cartItems.push("Headphones");

cartItems.pop();

cartItems.unshift("Monitor");

cartItems.shift();

console,log(cartItems);


//Task 4: Map Method

const prices =[100, 200, 300];

const discountedPrices = prices.map(price => price * 0.9);

console.log(discountedPrices);