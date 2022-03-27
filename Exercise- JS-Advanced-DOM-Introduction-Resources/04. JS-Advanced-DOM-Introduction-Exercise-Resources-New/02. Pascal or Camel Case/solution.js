function solve() {
  let text = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  let result = document.getElementById('result');

  // let arr = Array.from(text.split(' '));

  let resultText = '';

  if (currentCase == 'Camel Case') {

    for (let i = 0; i < text.length; i++) {

      if (text[i] === ' ') {
        resultText += (text[i + 1].toUpperCase());
        i++;
      } else {
        resultText += (text[i].toLowerCase());
      }
    }

    result.textContent = resultText;

  } else if (currentCase == 'Pascal Case') {

    resultText += (text[0][0].toUpperCase());

    for (let i = 1; i < text.length; i++) {

      
      if (text[i] === ' ') {
        resultText += (text[i + 1].toUpperCase());
        i++;
      } else {
        resultText += (text[i].toLowerCase());
      }
    }

    result.textContent = resultText;

  } else {

    result.textContent = 'Error!';

  }


}
