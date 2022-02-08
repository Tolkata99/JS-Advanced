
function Calculated(fruit, grams, price){

    let nameFruit = fruit;
    let gramsFruit = Number(grams);
    let priceKg = Number(price);

    let kg = gramsFruit / 1000;
    let priceResult = kg * priceKg;

    return `I need $${priceResult.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${nameFruit}.`
}

console.log(Calculated('apple', 1563, 2.35));



