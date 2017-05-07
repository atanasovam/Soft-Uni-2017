function reverseNumbers(args) {
    args.reverse();
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
reverseNumbers([ '10', '15', '20' ]);