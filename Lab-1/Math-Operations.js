function MathFunc(num1, num2,arr1) {
//The string may be one of the following: '+', '-', '*', '/', '%', '**'.
   if(arr1 == '+'){
     return num1 + num2;
   }else if(arr1 == '-'){
    return num1 - num2;
   }else if(arr1 == '*'){
    return num1 * num2;
   }else if(arr1 == '/'){
    return num1 / num2;
   }else if(arr1 == '%'){
    return num1 % num2;
   }else if(arr1 == '**'){
    return num1 ** num2;
   }

}

console.log(MathFunc(3, 5.5, '*'))