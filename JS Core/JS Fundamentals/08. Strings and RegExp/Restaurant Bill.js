/**
 * Created by atama on 9.6.2017 г..
 */
function calcBill(purchases) {
    let billProducts = [];
    let price = 0;
    let tempProduct = 0;
    let tempPrice = 0;

    for (let i = 0; i < purchases.length-1; i += 2) {
        tempProduct = purchases[i];
        tempPrice = Number(purchases[i + 1]);

        billProducts.push(tempProduct);
        price += tempPrice;
    }
    console.log(`You purchased ` + billProducts.join(', ') + ` for a total sum of ${price}`)
}
calcBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
calcBill(['Cola', '1.35', 'Pancakes', '2.88']);