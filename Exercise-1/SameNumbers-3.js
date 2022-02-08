function SameNumbers (number){

    let string = number.toString();
    let number1 = Number(string[0]);
    let isTheSame = true;

    const stringL = string.length;

    let totalResult = number1;

    for(let i = 1 ;i < stringL;i++){

        let num = Number(string[i])
        totalResult += num;

     if(number1 !== num){
         isTheSame = false;
     }

    }

    return isTheSame + '\n' +totalResult;  
      

}

console.log(SameNumbers(2222222));