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


//Task 5: Filter Method

const inventory = [5, 0, 12, 8, 0]; 
const availableInventory = inventory.filter(quantity => quantity > 0);
console.log(availableInventory);


//Task 6: Reduce Method

const sales = [500, 300, 200, 400];

const totalRevenue = sales.reduce((total, sale) => total + sale, 0);

console.log('Total Revenue: $${totalRevenue}');


//Task 7: find() Method

const customers = ["Alice", "Bob", "Charlie", "David"];

const foundCustomer = customers.find(customer => customer === "Charlie");

console.log(`Found Customer: ${foundCustomer}`);


//Task 8: Function Declaration


function functionName(parameters) {
    // Function logic
    return something;
}

function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

const taxAmount = calculateTax(100, 0.1); // 10% tax on $100
console.log(`Calculated Tax: $${taxAmount}`);


//Task 9: Function Expression

const applyDiscount = function(price, discount) {
    return price - (price * discount);
};

const discountedPrice = applyDiscount(100, 0.2);
console.log(`Discounted Price: $${discountedPrice}`);



//Task 10: Arrow Function

const calculatePoints = (purchaseAmount) => Math.floor(purchaseAmount / 10);

const points = calculatePoints(25);
console.log(`Loyalty Points Earned: ${points}`);
