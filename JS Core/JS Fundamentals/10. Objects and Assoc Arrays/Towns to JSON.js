/**
 * Created by atama on 12.6.2017 г..
 */
function parseTowns(input) {
    input.shift();
    let towns =[];
    for (let line of input) {
        let curr = line.split('|')
            .filter(e => e !== '')
            .map(e => e.trim());
        let town = {
            Town: curr[0],
            Latitude: Number(curr[1]),
            Longitude: Number(curr[2])
        };
        towns.push(town)
    }
    return JSON.stringify(towns)
}
console.log(parseTowns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));
