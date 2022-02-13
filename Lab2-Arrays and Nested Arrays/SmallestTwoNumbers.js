function Smallest(numbers){

    let arr = [];
   numbers.sort((a,b) => a-b);
   arr = numbers.slice(0,2);


   console.log(arr.join(' '));
}

let arr = [30, 15, 50, 5];
Smallest(arr);