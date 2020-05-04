const reducer = (acc, currentVal) => acc + currentVal;
const apiKey = "8df58438c8513b601e88d88777ea74e8";

const arrayOfProducts = [];

const listItem1 = document.getElementById("list-item-1");
const listItem2 = document.getElementById("list-item-2");

const userNamePlace = document.getElementById("user-name-spot");
const pricePlace = document.getElementById("total-price");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
    //base currency is euro
    const currencyConventerAPI = `http://data.fixer.io/api/latest?access_key=${apiKey}`;
    fetch(currencyConventerAPI)
      .then(res => res.json())
      .then(data =>
        console.log(
          `${this.name} is ${Math.round(
            this.price * data.rates[currency]
          )} ${currency}`
        )
      );
  }
}

const gum = new Product("gum", 2);
gum.convertToCurrency("DKK");
gum.convertToCurrency("USD");
gum.convertToCurrency("ISK");

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products.forEach(item => {
      if (this.products.indexOf(product) !== -1) {
        const filtered = this.products.splice(
          this.products.indexOf(product),
          1
        );
        return filtered;
      }
    });
  }

  searchProduct(productName) {
    const product = [];
    this.products.forEach(item => {
      if (item.name.includes(productName)) {
        return product.push(item);
      }
    });
    console.log(product);
    return product;
  }

  getTotal() {
    const productPrices = [];
    this.products.forEach(item => productPrices.push(item.price));
    const sum = productPrices.reduce(reducer);
    pricePlace.innerText = `Total: ${sum}`;
    sum;
    return sum;
  }

  renderProducts() {
    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      listItem1.appendChild(document.createElement("td")).innerText =
        product.name;
      listItem2.appendChild(document.createElement("td")).innerText =
        product.price;
    }
  }

  getUser() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    return new Promise(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const userName = data.name;
          userNamePlace.innerText = userName;
        });
    });
  }
}


const flatscreen = new Product("flat-screen", 5000);
const shoppingCart = new ShoppingCart([flatscreen]);

//Second Part

const candy = new Product("candy", 10);
const turtle = new Product("turtle", 1000);

//addProduct
shoppingCart.addProduct(candy);
shoppingCart.addProduct(turtle);
//console.log(shoppingCart);

//removeProduct
shoppingCart.removeProduct(candy);
//console.log(shoppingCart);

//.then(()=> shoppingCart.renderProducts());

//getTotal
shoppingCart.addProduct(candy);
//console.log(shoppingCart);
shoppingCart.getTotal();

//getUser & renderProducts
shoppingCart.getUser().then(shoppingCart.renderProducts());


//renderProducts 
//shoppingCart.renderProducts();

//searchProduct should return an array of product that match the productName parameter
shoppingCart.searchProduct("candy");
