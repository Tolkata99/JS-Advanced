function heroic(input) {

    let inputL = input.length;
    //let hero = {};
    let arrayOfObject = [];


    for (let i = 0; i < inputL; i++) {
        let [name, level, arrayOfItems] = input[i].split(' / ');

        arrayOfItems = arrayOfItems ? arrayOfItems.split(', ') : [];

        let hero = {
            name: name,
            level: Number(level),
            items: arrayOfItems,
        };

        arrayOfObject.unshift(hero);



    }

    console.log(JSON.stringify(arrayOfObject));


}

heroic(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);