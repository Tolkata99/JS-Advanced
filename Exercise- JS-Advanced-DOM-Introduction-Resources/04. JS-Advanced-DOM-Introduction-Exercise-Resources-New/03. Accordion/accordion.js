function toggle() {
    // let infoButton = document.getElementsByClassName("button");
    // console.log(infoButton.textContent)
    let idExtra = document.querySelector('#extra');
    let button = document.querySelector('.button');

    if (button.textContent === 'Less') {
        button.textContent = 'More';
        idExtra.style.display = 'none';
      

    }else {
        button.textContent = 'Less';
        idExtra.style.display = 'block';
       

    }
}