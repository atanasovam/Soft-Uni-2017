function solve(args) {
    let n = Number(args[0]);
    let result = '';
    for(let i = 1; i <= n; i++){
        if(isSym("" + i)){
            result += i + " ";
        }
    }
    console.log(result);

function isSym(str) {
    for(let i = 0; i < str.length / 2; i++){
        if(str[i] != str[str.length - i - 1]){
            return false;
        }
        return true;
    }
  }
}
solve();