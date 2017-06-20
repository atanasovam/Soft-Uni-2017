function roadRadar(input) {
    let speed = Number(input[0]);
    let area = input[1];

    let result = checkSpeed(speed, area);

    return result;

    function checkSpeed(speed, area) {
        let limit = 0;
        let diff = 0;
        let output = "-";

        switch (area) {
            case "city":
                limit = 50;
                diff = calcDiff(speed, limit);
                output = chooseOutput(diff, output);
                break;
            case "residential":
                limit = 20;
                diff = calcDiff(speed, limit);
                output = chooseOutput(diff, output);
                break;
            case "interstate":
                limit = 90;
                diff = calcDiff(speed, limit);
                output = chooseOutput(diff, output);
                break;
            case "motorway":
                limit = 130;
                diff = calcDiff(speed, limit);
                output = chooseOutput(diff, output);
                break;
            default:
                break;
        }
        return output;
    }

    function calcDiff(speed, limit) {
        let diff = 0;
        speed > limit ? diff = speed - limit : diff = 0;

        return diff;
    }

    function chooseOutput(diff, output) {
        if (diff === 0) {
            output = ''
        }
        else if (diff <= 20) {
            output = "speeding"
        }
        else if (diff <= 40) {
            output = "excessive speeding"
        }
        else if (diff > 40) {
            output = "reckless driving"
        }

        return output;
    }
}

console.log(roadRadar(['40', 'city']));
console.log(roadRadar(['21', 'residential']));
console.log(roadRadar(['120', 'interstate']));
console.log(roadRadar(['[200', ' motorway]']));