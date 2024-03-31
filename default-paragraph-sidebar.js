const emptyCartMessage = () => {
    const emptyCartMessage = document.querySelector('.default-paragraph-sidebar');
    if (emptyCartMessage) {
        if (cartProducts.length === 0) {
            emptyCartMessage.style.display = 'block';
        } else {
            emptyCartMessage.style.display = 'none';
        }
    }
};