function addAndRemove(input) {
    let nums = [];

    for (let i = 0, n = 1; i < input.length; i++, n++) {
        input[i] === 'add'
            ? nums.push(n)
            : nums = nums.filter((e, ide) => ide < nums.length - 1);
    }
    return nums.length !== 0 ? nums.join('\n') : 'Empty';
}
console.log(addAndRemove(['add', 'add', 'remove', 'add', 'add']));
console.log();
console.log(addAndRemove(['add', 'add', 'add', 'add']));
console.log();
console.log(addAndRemove(['remove', 'remove', 'remove']));
