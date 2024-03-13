/*
An array representing the cart.
*/
export const cart = [];

/*
Add product to the cart or increase quantity (if product is already in there).
*/
export function addToCart(productId) { 
  let matchingItem;
      
  // Check if selected product is already in the cart.
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // Get <select> element.
  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

  // Get the value selected in <select> element.
  const quantity = Number(quantitySelector.value);

  // If product is already in the cart, increase the quantity.
  // If it's not, add it to the cart.
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity
    });
  }
}