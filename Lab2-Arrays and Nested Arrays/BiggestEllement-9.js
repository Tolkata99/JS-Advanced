function BiggestEllement(numbers) {
let bigEl = 0;

    for (arr of numbers) {
        arr.sort((a,b) => b-a);

        if(bigEl < arr[0]){
            bigEl = arr[0];
        }

    }

    console.log(bigEl);
}


let arr = [[20, 50, 10],
[8, 33, 145,88888,88888,999999]];


BiggestEllement(arr)
