/**
 * Created by atama on 26.5.2017 г..
 */
function locator(input) {
    let x = 0;
    let y = 0;
    let output = [];

    for (let i = 0; i < input.length; i += 2) {
        x = Number(input[i]);
        y = Number(input[i + 1]);

        output.push(getIsland(x, y));
    }
    for (let i of output) {
        console.log(i);
    }

    function getIsland(x, y) {
        let tonga = ((x >= 0 && x <= 2) && (y >= 6 && y <= 8));     //{x1: 0, y1: 6, x2: 2, y2: 8}
        let tuvalu = ((x >= 1 && x <= 3) && (y >= 1 && y <= 3));    //{x1: 1, y1: 1, x2: 3, y2: 3}
        let samoa = ((x >= 5 && x <= 7) && (y >= 3 && y <= 6));     //{x1: 5, y1: 3, x2: 7, y2: 6}
        let cook = ((x >= 4 && x <= 9) && (y >= 7 && y <= 9));      //{x1: 4, y1: 7, x2: 9, y2: 9}
        let tokelau = ((x >= 8 && x <= 9) && (y >= 0 && y <= 1));   //{x1: 8, y1: 0, x2: 9, y2: 1}

        let getIsland = [
            [tonga, 'Tonga'],
            [tuvalu, 'Tuvalu'],
            [samoa, 'Samoa'],
            [cook, 'Cook'],
            [tokelau, 'Tokelau']
        ];
        let result = 'On the bottom of the ocean';

        for (let islandK of getIsland) {
            if (islandK[0] === true) {
                result = islandK[1];
                break;
            }
        }
        return result;
    }
}


locator([4, 2, 1.5, 6.5, 1, 3]);