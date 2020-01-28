const cart = document.querySelector('.cart__products');
const quantity = document.querySelectorAll('.product');
const add = document.querySelectorAll('.product__add');

quantity.forEach((product) => {
const countProducts = product.querySelector('.product__quantity-value');

const high = product.querySelector('.product__quantity-control_inc')
  high.addEventListener('click', () => {
    countProducts.textContent = +countProducts.textContent + 1;
  });

const low = product.querySelector('.product__quantity-control_dec');
  low.addEventListener('click', () => {
    countProducts.textContent = +countProducts.textContent === 1 ? 1 : +countProducts.textContent - 1;
  });
});

for (let prop of add) {
    prop.addEventListener('click', addCart);
}

 function addCart (event) {
    const prod = event.target.closest('.product');
    const id = prod.dataset.id;
    const count = + event.target.parentNode.querySelector('.product__quantity-value').innerText;

    for (let prop of cart.children) {
        if (prop.dataset.id === id) {
            let productCount = item.querySelector('.cart__product-count');
            let total = + productCount.innerText;
            productCount.innerText = total + count;
            return false;
        }
    }

    const img = prod.querySelector('.product__image').src;
    const value = prod.querySelector('.product__quantity-value').innerText;
    const prodCart = `<div class="cart__product" data-id="${id}">
                                <img class="cart__product-image" src="${img}">
                                <div class="cart__product-count">${value}</div>
                            </div>`;
    cart.insertAdjacentHTML('beforeend', prodCart);
}