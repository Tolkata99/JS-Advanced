    function subtract() {
        let first = Number(document.getElementById('firstNumber').value);
        let second = Number(document.getElementById('secondNumber').value);

        let calc = first - second;

        let result = document.getElementById('result');
        
        result.textContent = calc;
    };