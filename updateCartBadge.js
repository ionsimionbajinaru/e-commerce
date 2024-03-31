let updateCartBadge = () => {
    let cartBadge = document.querySelector('.cart-badge');
    let totalQuantity = cartProducts.reduce((total, product) => total + product.quantity, 0);
    cartBadge.innerText = totalQuantity;
    
        cartBadge.style.display = totalQuantity === 0 ? 'none' : 'block';
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

};