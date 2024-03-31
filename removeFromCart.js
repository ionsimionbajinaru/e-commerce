const removeFromCart = (productId) => {
    const productIndex = cartProducts.findIndex((element) => element.id === productId);

    if (cartProducts[productIndex].quantity === 1) {
        cartProducts.splice(productIndex, 1);
    } else {
        cartProducts[productIndex].quantity = cartProducts[productIndex].quantity - 1;
    }
    updateCartProducts();
    updateCartBadge();
    calculateTotal();
};
