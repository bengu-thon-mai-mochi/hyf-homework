let products = getAvailableProducts();
console.log(products);

/* testProductName function
let testProductNames = ["mumuci", "rabbit", "laksa leaf"];

function renderProducts(array) { 
    let products = document.querySelector(".products");
    ulList = products.getElementsByTagName("ul");
    for (let i = 0; i < array.length; i++) {  
        listItem = document.createElement("li");
        listItem.innerHTML = testProductNames[i];
        ulList = document.body.appendChild(listItem);
    }
} 
renderProducts(testProductNames);
*/


function renderProducts(array) { 
    for (let i = 0; i < array.length; i++) {  
        let productsList = document.querySelector(".products");
        ulList = productsList.firstElementChild;
        productListItem = document.createElement("li");
        productListItem = ulList.children;
        productItemDetail= document.createElement("ul");
        productItemDetail.innerHTML = ` ${[i+1]} - ${array[i].name}`;
        productListItem = productsList.appendChild(productItemDetail);
        productItemPrice = document.createElement("li");
        productItemPrice.innerHTML = ` Price : ${array[i].price}`;
        productItemPrice.className = ".price";
        productsList.appendChild(productItemPrice);
        productItemRating = document.createElement("li");
        productItemRating.innerHTML = ` Rating : ${array[i].rating}`;
        productItemRating.className = ".rating";
        productsList.appendChild(productItemRating);
        productItemShipsTo= document.createElement("li");
        productItemShipsTo.innerHTML = `Ships To: ${array[i].shipsTo}`;
        productItemShipsTo.className = ".shipping";
        productsList.appendChild(productItemShipsTo);
        productItemId = document.createElement("li");
        productItemId.innerHTML = `Product Id: ${array[i].id}`;
        productItemId.className = ".productId";
        productsList.appendChild(productItemId);
    }
}

renderProducts(products);

console.dir(products);

console.log('Script loaded');

console.log(getAvailableProducts());