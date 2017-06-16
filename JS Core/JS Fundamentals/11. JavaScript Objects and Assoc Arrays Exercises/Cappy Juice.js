function sumBottles(input) {
    let juiceInfo = new Map();
    let bottles = new Map();

    for (let production of input) {
        let [juiceName, quantity] = production.split(" => ");
        quantity = Number(quantity);
        if (!juiceInfo.has(juiceName)) {
            juiceInfo.set(juiceName, 0);
        }
        juiceInfo.set(juiceName, juiceInfo.get(juiceName) + quantity);

        if (juiceInfo.get(juiceName) >= 1000) {
            let bottlesCount = Math.floor(juiceInfo.get(juiceName) / 1000);
            bottles.set(juiceName, bottlesCount);
        }
    }

    for (let [key, value] of bottles) {
        console.log(`${key} => ${value}`)
    }
}
sumBottles([
    'Orange => 2000',
    'Peach => 1432',
    'Orange => 2',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);