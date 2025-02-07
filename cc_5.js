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


