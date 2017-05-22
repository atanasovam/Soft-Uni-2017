/**
 * Created by atama on 14.5.2017 г..
 */
function lastMonth([day, month, year]) {
    let date = new Date();
    date.setYear(year);
    date.setMonth(month - 1);
    date.setDate(day);

    let oneDay = 1000 * 60 * 60 * 24;
    let currentDate = new Date(date.setDate(1));

    currentDate = new Date(currentDate.getTime() - oneDay);
    console.log(currentDate.getDate());
}
lastMonth(['17', '3', '2002']);