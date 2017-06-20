function moviePrice(input) {
    let [movie, day] = input.map(e => e.toLowerCase());

    return calcPrice(movie, day);

    function calcPrice(movie, day) {
        switch (movie) {
            case 'the godfather' :
                if (day === 'monday') {
                    return 12;
                }
                else if (day === 'tuesday') {
                    return 10;
                }
                else if (day === 'wednesday' || day === 'friday') {
                    return 15;
                }
                else if (day === 'thursday') {
                    return 12.50;
                }
                else if (day === 'saturday') {
                    return 25;
                }
                else if (day === 'sunday') {
                    return 30;
                }
                else {
                    return 'error';
                }
            case 'schindler\'s list' :
                if (day === 'saturday' || day === 'sunday') {
                    return '15';
                }
                else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
                    return 8.50;
                }
                else {
                    return 'error';
                }
            case 'casablanca' :
                if (day === 'saturday' || day === 'sunday') {
                    return '10';
                }
                else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
                    return 8;
                }
                else {
                    return 'error';
                }
            case 'the wizard of oz':
                if (day === 'saturday' || day === 'sunday') {
                    return '15';
                }
                else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
                    return 10;
                }
                else {
                    return 'error';
                }
            default:
                return 'error';
        }
    }
}
console.log(moviePrice(["The Godfather", "Friday"]));