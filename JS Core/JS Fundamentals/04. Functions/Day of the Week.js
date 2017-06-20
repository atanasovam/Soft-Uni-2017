function numOfDay(day) {
    switch (day) {
        case "Monday": return 1;
        case "Tuesday": return 2;
        case "Wednesday": return 3;
        case "Thursday": return 4;
        case "Friday": return 5;
        case "Saturday": return 6;
        case "Sunday": return 7;
        default: return "error";
    }
}
console.log(numOfDay("Monday"));
console.log(numOfDay("Tuesday"));
console.log(numOfDay("Wednesday"));
console.log(numOfDay("Thursday"));
console.log(numOfDay("Friday"));
console.log(numOfDay("Saturday"));
console.log(numOfDay("Sunday"));
console.log(numOfDay("afv"));