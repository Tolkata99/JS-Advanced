function SolveFirstLastEl(input) {

    let first = input.shift();
    let second = input.pop();

    let firstNum = +first;

    let result = firstNum + +second;

    return result;
}

let ar = ['20', '30', '40'];
console.log(SolveFirstLastEl(ar))