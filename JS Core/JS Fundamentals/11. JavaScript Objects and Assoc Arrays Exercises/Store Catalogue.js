function store(input) {
    let priceAndProduct = new Map();
    let result = {};

    for (let row of input) {
        let [product, price] = row.split(/() : ()/).filter(e => e !== '');

        if (!priceAndProduct.has(product)) {
            priceAndProduct.set(product, price);
        } else {
            priceAndProduct.get(product).set(price);
        }
    }

    let objKeys = priceAndProduct.keys();
    for (let key of objKeys) {
        if (!result.hasOwnProperty(key[0])) {
            result[key[0]] = new Map();
        }
    } // Set the keys of the result

    let keys = Object.keys(result);
    for (let key of keys.sort()) {
        let currValuesToFill = [...priceAndProduct].filter(e => e[0][0] === key); // Get current value for this key
        console.log(key);
        for (let item of currValuesToFill.sort()) {
            console.log(`  ${item[0]}: ${item[1]}`);
        }
    } //Print the result
}
store([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);