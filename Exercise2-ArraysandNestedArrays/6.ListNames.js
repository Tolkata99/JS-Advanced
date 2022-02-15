function nameSort(array) {

    array = array.sort(function(a,b) {return b-a})
    return array;
}

console.log(["John", "Bob", "Christina", "Ema"]);