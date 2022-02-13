function Biggest(numbers) {

    numbers.sort((a, b) => b - a);
    let end = (numbers.length / 2) + 0.5;
    let arr = numbers.slice(0, end)

    return (`[${arr.join(', ')}]`);
}

let arr = [ 7, 2, 19, 6];
Biggest(arr);