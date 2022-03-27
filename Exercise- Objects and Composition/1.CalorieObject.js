function object(input) {

    let calorieObject = {};

    
    for (let i = 0; i < input.length - 1; i+=2) {

        let nameFood = input[i];
        let calories = Number(input[i+1]);
        

        calorieObject[nameFood] = calories;
    }

    return calorieObject;

}

console.log(object(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));
console.log(object(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));