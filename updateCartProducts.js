const updateCartProducts = () => {
    cartProductsContainer.innerHTML = '';

    for (let i = 0;i < cartProducts.length;i++) {
        const productSection = document.createElement('div');
        productSection.classList.add('cart-product-container');

        // aici am creat sectiunea din stanga a produsului din sidebar
        const productData = document.createElement('div');

        productData.innerHTML = `
            <h3> ${cartProducts[i].title} </h3>
            <div class="cart-product-prices">
                <p> Price: $${cartProducts[i].price} </p>
                <p> Total: $${(cartProducts[i].price * cartProducts[i].quantity).toFixed(2)} </p>
            </div>
            <div class="cart-product-buttons">
                <button class="cart-product-button minus-button"> - </button>
                <p> ${cartProducts[i].quantity} </p>
                <button class="cart-product-button plus-button"> + </button>
            </div>
        `;

        const plusButton = productData.querySelector('.plus-button');
        plusButton.addEventListener('click', () => {
            const productData = {
                id: cartProducts[i].id,
                title: cartProducts[i].title,
                price: cartProducts[i].price,
                image: cartProducts[i].image
            };

            addToCart(productData);
            emptyCartMessage();
        });

        const minusButton = productData.querySelector('.minus-button');
        minusButton.addEventListener('click', () => {
            removeFromCart(cartProducts[i].id);
            emptyCartMessage();
        });

        productSection.appendChild(productData);

        // aici am creat imaginea din sectiunea produsului din sidebar
        const productImage = document.createElement('div');
        productImage.classList.add('cart-product-image');
        productImage.style.backgroundImage = `url(${cartProducts[i].image})`;

        productSection.appendChild(productImage);
        
        cartProductsContainer.appendChild(productSection);
    }
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

    const clearCartButton = document.querySelector('.button-clear-cart');

clearCartButton.addEventListener('click', () => {
        clearCartButton.style.display = 'block';
        cartProducts.length = 0;
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        updateCartProducts(); 
        updateCartBadge(); 
        calculateTotal(); 
        emptyCartMessage();
        clearCartButton.style.display = 'none';
});
    const updateClearCartButtonDisplay = () => {
        const clearCartButton = document.querySelector('.button-clear-cart');
        clearCartButton.style.display = cartProducts.length > 0 ? 'block' : 'none';

        let totalQuantity = 0;
        for (let i = 0; i < cartProducts.length; i++) {
            totalQuantity += cartProducts[i].quantity;
        }
        clearCartButton.style.display = totalQuantity >= 2 ? 'block' : 'none';
    };
    updateClearCartButtonDisplay();
};