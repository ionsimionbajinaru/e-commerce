// ------------  Add / remove cart products  -----------
let cartProducts = [];
const cartProductsContainer = document.querySelector('.cart-products-container');

const addToCart = (product) => {
    const productIndex = cartProducts.findIndex((element) => element.id === product.id);

    if (productIndex === -1) {
        const productToBePushed = {
            ...product, // spread operator
            quantity: 1
        };
        cartProducts.push(productToBePushed);
    } else {
        cartProducts[productIndex].quantity = cartProducts[productIndex].quantity + 1;
    }
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

    emptyCartMessage();
    updateCartProducts();
    updateCartBadge();
    calculateTotal();
};