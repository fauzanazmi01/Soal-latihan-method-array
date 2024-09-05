const outers = ["Jackets", "Coats", "Sweaters"];
const females = ["Dresses", "Skirts", "Bikini"];

const customerCarts = [
    ["Shirts", "Pants", "Shoes", "Coats"],
    ["Dresses", "Skirts", "Sweaters"],
    ["Shoes", "Socks"],
    ["Jeans", "Skirts"],
    ["Bikini", "Sunglasses", "T-shirt", "Sun Hats"]
];
console.log("Customer carts:", customerCarts);

const cartCounts = customerCarts.map((cart) => {
    return cart.length;
});

console.log("\nCart counts:", cartCounts);

const customersBuyingOuters = customerCarts.filter((cart) => {
    return cart.some((item) => {
        return outers.includes(item);
    });
});

console.log("Customer that buys outers:", customersBuyingOuters);

const femalesAlsoBuys = customerCarts.map((cart) => {

    const femaleItems = cart.filter((item) => {return females.includes(item)});
    if (!femaleItems) return null

    const remaining = cart.filter((item) => {return !femaleItems.includes(item)});
    return [femaleItems, remaining]

}).filter((rec) => { 
    return rec[0].length != 0 
})

console.log("Customer that buys female items also buys:", femalesAlsoBuys);
