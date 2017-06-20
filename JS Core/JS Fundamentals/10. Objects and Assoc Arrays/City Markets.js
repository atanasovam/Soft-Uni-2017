function cityMarkets(arr) {
    let towns = new Map();

    for (let row of arr) {
        let [town, product, sales] = row.split(' -> ');
        sales = sales
            .split(' : ')
            .reduce((a, b) => a * b);
        fillMap(town, product, sales);
    }
    for (let [town, products] of towns) {
        console.log(`Town - ${town}`);
        for (let [product, sales] of products) {
            console.log(`$$$${product} : ${sales}`);
        }
    }
    function fillMap(town, product, sales) {
        //Verify town exists
        if (!towns.has(town)) {
            towns.set(town, new Map())
        }
        //Verify product exists
        if (!towns.get(town).has(product)) {
            towns.get(town).set(product, 0)
        }
        let lastSales = towns.get(town).get(product);
        towns.get(town).set(product, lastSales + sales)
    }
}
cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3',
]);