
function login(role) {
    alert(role + " login form submitted successfully!");
    return false;
}

let total = 0;
let items = [];

function addToCart(name, price) {
    items.push(name);
    total += price;

    document.getElementById("cart").innerHTML =
        items.join(", ");

    document.getElementById("total").innerHTML =
        "Total: ₹" + total;
}

