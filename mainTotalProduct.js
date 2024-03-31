
let mainTotalCart = document.querySelector(".main-total");


let calculateTotal = () => {
   let total = 0;
   cartProducts.forEach(product => {
    //    total += product.price * product.quantity;
       total += product.price * product.quantity
      
   });
   mainTotalCart.innerText = `Total: $${total.toFixed(2)}`;
}