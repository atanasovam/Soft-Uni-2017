function transformCrystals(input) {
    let aim = input[0];

    for (let i = 1; i < input.length; i++) {
        let crystal = input[i];
        console.log(`Processing chunk ${crystal} microns`);

        let cutCount = 0;
        while (crystal / 4 >= aim) {
            crystal /= 4;
            cutCount++
        }
        if (cutCount !== 0) {
            console.log(`Cut x${cutCount}`);
            console.log('Transporting and washing');
            crystal = Math.floor(crystal);
        }

        let lapCount = 0;
        while (crystal - crystal * 0.2 >= aim) {
            crystal -= crystal * 0.2;
            lapCount++;
        }
        if (lapCount !== 0) {
            console.log(`Lap x${lapCount}`);
            console.log('Transporting and washing');
            crystal = Math.floor(crystal);
        }

        let grindCount = 0;
        while (crystal - 20 >= aim) {
            crystal -= 20;
            grindCount++;
        }
        if (grindCount !== 0) {
            console.log(`Grind x${grindCount}`);
            console.log('Transporting and washing');
            crystal = Math.floor(crystal);
        }

        let etchCount = 0;
        while (crystal - 2 >= aim - 1) {
            crystal -= 2;
            etchCount++
        }
        if (etchCount !== 0) {
            console.log(`Etch x${etchCount}`);
            console.log('Transporting and washing');
            crystal = Math.floor(crystal)
        }

        if (crystal < aim) {
            crystal++;
            console.log(`X-ray x1`);
        }

        console.log(`Finished crystal ${aim} microns`);
    }
}
console.log(transformCrystals([1375, 50000]));
console.log("-----------------");
console.log(transformCrystals([1000, 4000]));
console.log("-----------------");
console.log(transformCrystals([1000, 8100]));
