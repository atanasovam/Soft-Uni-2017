/**
 * Created by atama on 14.6.2017 г..
 */
function lowestPrices(arr) {
    let products = new Map();
    for (let row of arr) {
        let [town, product, price] = row.split(' | ');
        if (!products.has(product)) {           //Set new product
            products.set(product, new Map())
        }
        products.get(product).set(town, Number(price));
    }       //---> Fill the object
    for (let [key, value] of products) {
        let lowestPrice = ([...value].reduce(function (a, b) {
            if (a[1] < b[1]) {
                return a
            } else if (a[1] > b[1]) {
                return b;
            }
            return a;
        }));

        console.log(`${key} -> ${lowestPrice[1]} (${lowestPrice[0]})`);
    }       //---> reduce and take the lowest
}
lowestPrices([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);
