function OddPosition(arr) {
    let result = arr.filter((num, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(' ');
 
        console.log(result);
}

let arr = [10, 15, 20, 25];
OddPosition(arr)