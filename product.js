let data;
const createProduct = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get('id');

    const serverResponse = await fetch(`https://fakestoreapi.com/products/${productId}`);
     data = await serverResponse.json();

    // aici am creat titlu
    const productTitle = document.querySelector('.product-title');
    productTitle.innerText = data.title;

    // aici am creat descrierea
    const productDescription = document.querySelector('.product-description');
    productDescription.innerText = data.description;

    // aici cam declarat pretul
    const productPrice = document.querySelector('.product-price');
    productPrice.innerText = data.price;

    // aici am declarat imaginea
    const productImage = document.querySelector('.product-image');
    productImage.style.backgroundImage = `url(${data.image})`;
};

createProduct();

const productButton = document.querySelector('.product-button');
productButton.addEventListener("click", () => {
    const productData = {
        id: data.id,
        title: data.title,
        price: data.price,
        image: data.image
    };

    addToCart(productData);
});

const clearCartButton = document.querySelector('.button-clear-cart');

clearCartButton.addEventListener('click', () => {
    cartProducts.length = 0; // Golește array-ul cartProducts
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts)); // Actualizează stocarea locală
    updateCartProducts(); // Actualizează afișarea produselor din coș
    updateCartBadge(); // Actualizează badge-ul coșului
    calculateTotal(); // Recalculează totalul
    emptyCartMessage(); // Verifică dacă coșul este gol și afișează mesajul corespunzător
});

window.onload = () => {
    let storedCartProducts = localStorage.getItem('cartProducts');
    if (storedCartProducts) {
        cartProducts = JSON.parse(storedCartProducts);
    }
    updateCartBadge();
    updateCartProducts();
    emptyCartMessage();
};