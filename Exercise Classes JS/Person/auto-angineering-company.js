function solve(input) {

    let brands = new Map();

    while (input.length > 0) {
        let [brand, model, quantity] = input.shift().split(' | ');
       
        let models = new Map();
       

        if (!brands.has(brand)) {
          
            models.set(model, quantity);
            brands.set(brand, Number(quantity));
        }else{
           
            if(!models.has(model)){
                models.set(model, Number(quantity));
            }else{
                let currentQuantity = models.get(brand);
                models.set(model,currentQuantity + Number(quantity));
            }

            brands.set(brand,models)
        }

       
        
    }

    

        console.log(brands['Audi']);

    
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)
