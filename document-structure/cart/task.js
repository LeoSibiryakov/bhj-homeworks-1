const cart = document.querySelector('.cart__products');
const quantity = document.querySelectorAll('.product__quantity-control');
const add = document.querySelectorAll('.product__add');

for (let button of quantity) {
    button.addEventListener('click', change);
}
for (let button of add) {
    button.addEventListener('click', addToCart);
}

function change(event) {
    let value = event.target.parentNode.querySelector('.product__quantity-value');
    let count = +value.innerText;

    if (event.target.classList.contains('product__quantity-control_inc')) {
        count++;
        value.innerText = count;
    } else {
        if (count > 1) {
            count--;
            value.innerText = count;
        } else {
            value.innerText = 1;
        }
    }
}

function addToCart(event) {
    const product = event.target.closest('.product');
    const id = product.dataset.id;
    const productQuantity = +event.target.parentNode.querySelector('.product__quantity-value').innerText;

    for (let item of cart.children) {
        if (item.dataset.id === id) {
            let productCount = item.querySelector('.cart__product-count');
            let total = +productCount.innerText;
            productCount.innerText = total + productQuantity;
            return false;
        }
    }

    const image = product.querySelector('.product__image').src;
    const count = product.querySelector('.product__quantity-value').innerText;
    const productToCart = `<div class="cart__product" data-id="${id}">
                                <img class="cart__product-image" src="${image}">
                                <div class="cart__product-count">${count}</div>
                            </div>`;
    cart.insertAdjacentHTML('beforeend', productToCart);
}