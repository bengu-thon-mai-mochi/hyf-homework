console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
//console.log(productsUl);

function renderProducts(products) {
    productsUl.innerHTML = '';

    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

//renderProducts(products);


//I need to debug this one since it adds products each time I click after the first iteration of code. 

function displayShipping(){
    let shipsTo = document.querySelectorAll('.country option');
    shipsTo.forEach(country => country.addEventListener("click",function(e) {
    shippingCountry = country.innerHTML;
    filteredProducts = products.filter(product => product.shipsTo.includes(shippingCountry));
    renderProducts(filteredProducts);
    }))
}

displayShipping()


//I want to simply this function later

const userInput = document.querySelector('.search input' )

function searchUserInput(e) { 
    userInput.textContent = e.target.value;
    input = userInput.textContent;
    filteredProducts = products.filter(function(products) {
        if(products.name === input){
            return products.name;
    }});
    renderProducts(filteredProducts); 
}

userInput.addEventListener("input", searchUserInput);

//


//Extra Feature : later I want to settime for event. but hadn't had time before deadline.

const cheapest = document.querySelector('.sort select option[value=cheap]')

function clickHeart() {
    heart = document.createElement("img")
    heart.src = "https://1mundoreal.org/png/20380211/decoded_what_do_the_different_coloured_heart_emojis_mean_decoded_what_do_the_different_coloured_heart_emojis_mean.jpg"
    heart.position = "absolute";
    document.body.appendChild(heart)
} 

cheapest.addEventListener("click", clickHeart)