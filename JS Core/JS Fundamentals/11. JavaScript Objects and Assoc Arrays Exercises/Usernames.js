function sortUsernames(input) {
    let set = new Set(input.sort());
    input = input.join(' ').split(' ').sort((a, b) => a.length - b.length);
    console.log([...set].sort(nameComparator).join('\n'));

    function nameComparator(a, b) {
        if (a.length < b.length) {
            return -1
        }
        if (a.length > b.length) {
            return 1
        }
        return a.localeCompare(b);
    }
}
console.log(sortUsernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]));
