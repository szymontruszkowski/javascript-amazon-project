/*
Change price in cents to price in dollars with 2 decimals.
*/
export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}