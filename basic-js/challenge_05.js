/* 
Create an algorithm that calculates what should be paid for a product, taking into account the normal price tag 
and the choice of payment term.

Use the codes in the following table to let you know which payment term is chosen in order to make the appropriate calculation

1 - debit, you get a 10% discount
2 - cash or pix, receive 15% discount
3 - Twice, normal price
4 - Over two times, normal price plus 10%
*/

const productTagPrice = 50;
const paymentTerm = 4;

let productPrice;

if(paymentTerm === 1){
    productPrice = productTagPrice - (productTagPrice * 0.1);
} else if (paymentTerm === 2){
    productPrice = productTagPrice - (productTagPrice * 0.15);
} else if (paymentTerm === 3){
    productPrice = productTagPrice;
} else if (paymentTerm === 4){
    productPrice = productTagPrice * 1.1;
}

console.log('sub total: $' + productTagPrice.toFixed(2));
console.log('total: $' + productPrice.toFixed(2));