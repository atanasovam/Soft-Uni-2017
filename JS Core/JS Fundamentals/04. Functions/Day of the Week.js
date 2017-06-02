/**
 * Created by atama on 23.5.2017 г..
 */
//Friday, Saturday, Sunday
function numOfDay(day) {
    let output = '';
    switch (day) {
        case "Monday":
            output = 1;
            break;
        case "Tuesday":
            output = 2;
            break;
        case "Wednesday":
            output = 3;
            break;
        case "Thursday":
            output = 4;
            break;
        case "Friday":
            output = 5;
            break;
        case "Saturday":
            output = 6;
            break;
        case "Sunday":
            output = 7;
            break;
        default:
            console.log("error");
            break;
    }
    return output;
}
numOfDay("Monday");
numOfDay("Tuesday");
numOfDay("Wednesday");
numOfDay("Thursday");
numOfDay("Friday");
numOfDay("Saturday");
numOfDay("Sunday");
