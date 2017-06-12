/**
 * Created by atama on 9.6.2017 г..
 */
function parseEmployeeData(input) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    for (let e of input) {
        let match = regex.exec(e);
        if (match) {
            console.log(`Name: ${match[1]}\n` +
                `Position: ${match[3]}\n` +
                `Salary: ${match[2]} `);
        }
    }
}
parseEmployeeData(['Jeff - 1500 - Staff', 'Ko - 150 - Ne']);