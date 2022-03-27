function extract(content){
    let contentElement = document.getElementById(content);


    let pattern = /(\([^(]+\))/g;
    let match = contentElement.textContent.match(pattern);

    console.log(match.join('; '));
}