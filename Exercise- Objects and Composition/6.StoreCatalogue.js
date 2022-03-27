function store(input) {
    let result = input.sort((a, b) => a.localeCompare(b));

    let char = '';

    for (let i = 0; i < result.length; i++) {
        let current = result[i].split(' : ');

        if (result[i][0] != char) {
            console.log(result[i][0]);
            char = result[i][0]
        }

        console.log(`  ${current[0]}: ${current[1]}`);

       // console.log(name);
    }



}
(store(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));