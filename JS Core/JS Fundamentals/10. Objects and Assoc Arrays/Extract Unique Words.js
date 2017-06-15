/**
 * Created by atama on 14.6.2017 г..
 */
function extractUniqueWords(strArr) {
    let result = new Set();
    for (let line of strArr) {
        line.split(/\W+/)
            .filter(e => e !== '')
            .map(e => e.toLowerCase())
            .forEach(e => result.add(e));
    }
    console.log([...result].join(', '));
}
extractUniqueWords([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.',
]);