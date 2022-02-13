function EvenElement(input) {
    let result = '';

    for (let i = 0; i < input.length; i++) {

        if( i % 2 == 0){
          result += input[i] + ' ';
        }

    }

    console.log(result);
}


EvenElement(20, 40,50);
EvenElement('a', 'b');

