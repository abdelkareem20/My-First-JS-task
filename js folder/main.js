

const products = document.querySelectorAll('.div-products');

// Loop over each product and add a click event
products.forEach(product => {
  product.addEventListener('click', function() {
    // Get the text from the h3 inside the product
    const productName = this.querySelector('h3').innerText;
    
    // Find the div where the product name should be added
    const addingToCardDiv = this.querySelector('.adding-to-card');
    
    // Set the product name inside the empty div
    addingToCardDiv.innerText = productName;
  });
});


let totalPrice = 0;

const buttons = document.querySelectorAll('.show-price');

const priceDisplay = document.getElementById('total-price');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const productDiv = this.closest('.div-products')
   
    const productPrice = parseInt(productDiv.getAttribute('price'));

    totalPrice += productPrice;

    priceDisplay.textContent = `Total Price: ${totalPrice} EGP;`
  });
});