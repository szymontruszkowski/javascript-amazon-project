/*
An array representing the cart.
*/
export let cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];

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

/*
Remove product with specified id from the cart.
*/
export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    } 
  });

  cart = newCart;
}