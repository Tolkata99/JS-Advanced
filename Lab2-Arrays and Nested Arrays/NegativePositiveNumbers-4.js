function SolvePositiveOrNegatice(numbers) {

    let array = [];
    for (let num of numbers) {
        if(num < 0){
            array.unshift(num);
        }else{
            array.push(num);
        }

    }

    console.log(array.join('\n'));
}

SolvePositiveOrNegatice(7, -2, 8, 9)