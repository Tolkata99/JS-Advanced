function printN(array, n) {

    let index = +n;
    let arrayN = [];
    for (let i = 0; i < array.length; i += index) {

        arrayN.unshift(array[i]);

    }
    //arrayN = arrayN.sort((a, b) => a-b);

    return arrayN.reverse();
}

console.log(PrintN(['5', '20', '31', '4', '20'], 2));