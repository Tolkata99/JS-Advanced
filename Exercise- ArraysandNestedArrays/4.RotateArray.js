function rotateArray(array, n) {

    for (var i = 0; i < n; i++) {

        let lastEl = array.pop();
        array.unshift(lastEl);

    }
    return array.join(' ');

}

console.log(rotateArray(['1', '2', '3', '4'], 2));