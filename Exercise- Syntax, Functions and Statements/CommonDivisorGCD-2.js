function division(number1,number2){


    let num1 = Number(number1);
    let num2 = Number(number2);


    while(num1 !== num2){

        if(num1 > num2){
            num1 -= num2
        }
        else{
            num2 -= num1
        }
    }
   

    return num1;
}

console.log(division(15,5));