function addRemoveEl(array) {

    let arrayResult = [];

    for (let i = 0; i < array.length; i++){
        if(array[i] === 'add') {
            arrayResult.push(i + 1);

        }else if(array[i] === 'remove'){
            arrayResult.pop();
        }
    }

    if(arrayResult.length === 0){
        return 'Empty';
    }

    return arrayResult.join('\n');
};

console.log(AddRemoveEl(['add', 'add', 'remove', 'add', 'add']));