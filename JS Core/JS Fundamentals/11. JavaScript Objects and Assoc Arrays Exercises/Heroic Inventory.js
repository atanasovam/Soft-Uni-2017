function heroicInventory(input) {
    let result = [];

    for (let line of input) {
        let [name, level, items] = line.split(' / ');
        items !== undefined ? items = items.split(/\W+/) : items = [];

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };
        result.push(hero);
    }
    console.log(JSON.stringify(result));
}
console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara	'
]));
