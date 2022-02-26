function carFactory(objCar) {

    let resultCar = {};
    let engine = {};
    let cariege = {};;
    let wheel = {};


    resultCar.model = objCar.model;

    if (objCar.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (objCar.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    }
    else if (objCar.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    if (objCar.carriage == 'hatchback') {
        cariege.type = 'hatchback';
        cariege.color = objCar.color;
    } else if (objCar.carriage == 'coupe') {
        cariege.type = 'coupe';
        cariege.color = objCar.color;
    }

    if (objCar.wheelsize % 2 === 0) {
        objCar.wheelsize--;
    }

    resultCar.engine = engine;
    resultCar.carriage = cariege;
    resultCar.wheels = [
        objCar.wheelsize,
        objCar.wheelsize,
        objCar.wheelsize,
        objCar.wheelsize
    ];


    return resultCar;
}


console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));