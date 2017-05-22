/**
 * Created by atama on 9.5.2017 г..
 */

function calcNextDay([year, month, day]) {
    let date = new Date(year, month - 1, day);
    let oneDayMiliSec = 24 * 60 * 60 * 1000;
    let nextDate = new Date(date.getTime() + oneDayMiliSec);

    return nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + '-' + nextDate.getDate();
}
calcNextDay(['2016', '9', '30']);
