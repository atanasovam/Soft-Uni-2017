function sumPopulation(arr) {
    let pplInfo = new Map();

    function fillMap(k, v) {
        if (!pplInfo.has(k)) {
            pplInfo.set(k, 0)
        }
        pplInfo.set(k, pplInfo.get(k) + Number(v))
    }

    arr = arr.map(e => e
        .split(` <-> `)
        .filter(e => e !== '')
    );

    for (let i of arr) {
        let key = i[0], value = i[1];
        fillMap(key, value)
    }

    [...pplInfo].forEach(([key, value]) => console.log(`${key} : ${value}`));
}
sumPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Sofia <-> 1'
]);