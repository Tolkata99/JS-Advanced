function main(lines) {

    lines = lines.map(Number);

    let max = lines.reduce((accumulator, currentValue) => {

        return accumulator > accumulator ? accumulator : currentValue;
    });
    
    return max;
}

console.log(main([1, 2, 3, 4000]));