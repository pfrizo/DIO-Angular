/* 
Create an algorithm that calculates what should be paid for a product, taking into account the normal price tag 
and the choice of payment term.

Use the codes in the following table to let you know which payment term is chosen in order to make the appropriate calculation

1 - debit, you get a 10% discount
2 - cash or pix, receive 15% discount
3 - Twice, normal price
4 - Over two times, normal price plus 10%

USING FUNCTIONS
*/

function applyDiscount(price, discount){
    return (price - (price * (discount / 100)));
}

function applyInterest(price, interest){
    return (price + (price * (interest / 100)));
}

function calcNewPrice(paymentTerm, price){
    if(paymentTerm === 1){
        return applyDiscount(price, 10);
    } else if (paymentTerm === 2){
        return applyDiscount(price, 15);
    } else if (paymentTerm === 3){
        return price;
    } else if (paymentTerm === 4){
        return applyInterest(price, 10);
    }
}

//immediately invoked function expression (IIFE)
(function (){
    const productTagPrice = 50;
    const paymentTerm = 1;

    console.log('sub total: $' + productTagPrice.toFixed(2));
    console.log('total: $' + calcNewPrice(paymentTerm, productTagPrice).toFixed(2));
})();