//------------------------------------------------------------------------------------------------------------------------
//                                          1. CALCULATE & RENDER PRICES
//------------------------------------------------------------------------------------------------------------------------

//1. INITIALIZE PRICES

let subtotalPrice = 0;
let shippingPrice = 0;
let totalPrice = 0;
let itemsCount = 3;

//2. CALCULATE PRICES FUNCTION

function calculatePrices(subtotal, shipping, total, itemsCount) {
  subtotalPrice = subtotal;
  shippingPrice = shipping;

  totalPrice = total;
  itemsCount = itemsCount;
}

//SELECT THE FOOTER SECTION
const footerEl = document.querySelector("footer");
const itemsCountEl = document
  .querySelector(".items-count")
  .querySelector("span");

//3. RENDER PRICES FUNCTION
function renderPrices(subtotal, shipping, total, itemsCount) {
  calculatePrices(subtotal, shipping, total, itemsCount);
  footerEl.innerHTML = `
          <h3 class="subtitle">SubTotal: <span class="subtotal-price">${subtotal}</span> $</h3>
          <h3 class="subtitle">Shipping: <span class="shipping-price">${shipping}</span> $</h3>
          <h2 class="title">Total: <span class="total-price">${total}</span> $</h2>
      `;
  itemsCountEl.innerText = itemsCount;
}

renderPrices();

//------------------------------------------------------------------------------------------------------------------------
//                                            1. RENDERING PRODUCTS
//------------------------------------------------------------------------------------------------------------------------

//1. SELECT THE PRODUCTS WRAPPER
const productsWrapper = document.querySelector(".products-wrapper");

//2. RENDER PRODUCTS FUNCTION
function renderProducts() {
  const initialSubtotal =
    products[0].price + products[1].price + products[2].price;
  const initialShipping =
    products[0].shipping + products[1].shipping + products[2].shipping;
  const initialTotal = initialSubtotal + initialShipping;
  const initialItemsCount = 3;

  calculatePrices(
    initialSubtotal,
    initialShipping,
    initialTotal,
    initialItemsCount
  );
  renderPrices(
    initialSubtotal,
    initialShipping,
    initialTotal,
    initialItemsCount
  );

  let emptyCart = document.querySelector(".empty-msg");

  if (emptyCart !== null) {
    productsWrapper.removeChild(emptyCart);
  }

  //products is a global variable declared in the file products.js linked before script.js in index.html
  products.forEach((product) => {
    // += to append instead of overriding the existing elements in the products wrapper (the titles row)
    productsWrapper.innerHTML += `
        <div class="product-row" id=${product.id}>
            <div class="product-column product-img">
                <img src=${product.img} alt="" />
            </div>
            <div class="product-column product-name">
                <h2>${product.name}</h2>
            </div>
            <div class="product-column unit-price ">
                <span>${product.price} </span> $
            </div>
            <div class="product-column product-price">
                <span>${product.price} </span> $
            </div>
            <div class="product-column product-quantity">
                <button class="btn plus" onclick="decreaseQtyAndPrice(${product.id})">-</button>
                <span class="qty-number">1</span>
                <button class="btn minus" onclick="increaseQtyAndPrice(${product.id})">+</button>
            </div>
            <div class="product-column product-action">
                <button class="btn like">
                    <i class="fa-regular fa-heart"></i> Like
                </button>
                <button class="btn remove" onclick="removeProduct(${product.id})">
                    <i class="fa-solid fa-trash"></i> Remove
                </button>
            </div>
        </div>
    `;
  });
}

renderProducts();

//------------------------------------------------------------------------------------------------------------------------
//                                            3. REMOVE PRODUCTS FROM CART
//------------------------------------------------------------------------------------------------------------------------

//1. SELECT THE FOOTER SECTION
function removeProduct(id) {
  const elementToRemove = document.getElementById(id);

  //GET THE PRICES TO REMOVE
  const priceToRemove = products[id].price;
  const shippingToRemove = products[id].shipping;

  //GET THE PREVIOUS SUBTOTAL AND SHIPPING PRICE VALUES FROM THE FIRST RENDERING
  subtotalPrice = Number((subtotalPrice - priceToRemove).toFixed(2));
  shippingPrice = Number((shippingPrice - shippingToRemove).toFixed(2));

  //CALCULATE THE NEW TOTAL PRICE BASED ON THE NEW PRICES
  totalPrice = subtotalPrice + shippingPrice;

  //GET THE ELEMENTS WHERE THE RESULTS ARE GOING TO BE DISPLAYED

  itemsCount = Number(itemsCountEl.innerText);
  itemsCount--;

  const subtotalEl = document.querySelector(".subtotal-price");
  const shippingEl = document.querySelector(".shipping-price");
  const totalEl = document.querySelector(".total-price");

  //SET THE NEW DATA IN THE RIGHT ELEMENTS
  subtotalEl.innerHTML = subtotalPrice;
  shippingEl.innerHTML = shippingPrice;
  totalEl.innerHTML = totalPrice;
  itemsCountEl.innerText = itemsCount;

  //REMOVE THE ASSOCIATED ELEMENT FROM THE DOM
  productsWrapper.removeChild(elementToRemove);

  if (productsWrapper.querySelector("[id]") === null) {
    productsWrapper.innerHTML = `<div class="empty-msg"><h1>Empty Cart!</h1> <button class="show-products btn remove" onclick=renderProducts()>Show products again!</button></div>`;
  }
}

//------------------------------------------------------------------------------------------------------------------------
//                                            4. CHANGE LIKE BUTTON ON CLICK
//------------------------------------------------------------------------------------------------------------------------

//1. SELECT THE LIKE BUTTON

let likeButtons = document.querySelectorAll(".like");
for (likeButton of likeButtons) {
  likeButton.addEventListener("click", function (event) {
    let target = event.target;

    //CHANGE THE BUTTON BACKGROUND
    target.classList.toggle("liked");

    //CHANGE THE ICON
    let buttonIcon = target.querySelector(".fa-heart");

    buttonIcon.classList.toggle("fa-solid");
    buttonIcon.classList.toggle("fa-regular");
  });
}

//------------------------------------------------------------------------------------------------------------------------
//                                            5. CHANGE PRODUCT QUANTITY
//------------------------------------------------------------------------------------------------------------------------

function increaseQtyAndPrice(id) {
  const currentProduct = document.getElementById(`${id}`);

  const currentStock = products[id].stock;
  const UnitPrice = products[id].price;

  const currentPriceSpan = currentProduct.querySelector(".product-price span");
  let currentPrice = Number(currentPriceSpan.innerText);

  const qtySpan = currentProduct.querySelector(".qty-number");
  let qty = Number(qtySpan.innerText);

  if (qty <= currentStock) {
    qty++;
    qtySpan.innerText = qty;

    currentPrice = Number((currentPrice + UnitPrice).toFixed(2));
    currentPriceSpan.innerText = currentPrice;

    console.log(subtotalPrice, UnitPrice);
    subtotalPrice = Number((subtotalPrice + UnitPrice).toFixed(2));

    totalPrice = Number((totalPrice + UnitPrice).toFixed(2));

    itemsCount++;

    renderPrices(subtotalPrice, shippingPrice, totalPrice, itemsCount);
  } else {
    alert("This product is out of stock!");
  }
}

function decreaseQtyAndPrice(id) {
  const currentProduct = document.getElementById(`${id}`);

  const currentStock = products[id].stock;
  const UnitPrice = products[id].price;

  const currentPriceSpan = currentProduct.querySelector(".product-price span");
  let currentPrice = Number(currentPriceSpan.innerText);

  const qtySpan = currentProduct.querySelector(".qty-number");
  let qty = Number(qtySpan.innerText);

  qty--;
  if (qty != 0) {
    qtySpan.innerText = qty;

    currentPrice = Number((currentPrice - UnitPrice).toFixed(2));
    currentPriceSpan.innerText = currentPrice;

    console.log(subtotalPrice, UnitPrice);
    subtotalPrice = Number((subtotalPrice - UnitPrice).toFixed(2));

    totalPrice = Number((totalPrice - UnitPrice).toFixed(2));
    itemsCount--;

    renderPrices(subtotalPrice, shippingPrice, totalPrice, itemsCount);
  } else {
    removeProduct(id);
  }
}
