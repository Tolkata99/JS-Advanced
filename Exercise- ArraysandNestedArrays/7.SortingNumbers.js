function sortNumbers(array){

    let sortedArray = array.sort((a,b) => a-b);
    

    let solvedArray = [];

    while(sortedArray.  length > 0){

        let firstNum = sortedArray.shift();
        let lastNum = sortedArray.pop();

        solvedArray.push(firstNum);
        solvedArray.push(lastNum);


    }

    return solvedArray;
};

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));