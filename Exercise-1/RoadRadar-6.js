function RoadRadar(km, whereDrive) {

    let isDriveSafe = false;
    let difference = 0;
    let status = '';
    let speedLimit = 0;

    if (whereDrive == 'motorway') {
        if (km <= 130) {
            isDriveSafe = true;
        } else {
            difference = km - 130;
        }

        speedLimit = 130;

    } else if (whereDrive == 'interstate') {
        if (km <= 90) {
            isDriveSafe = true;
        } else {
            difference = km - 90;
        }

        speedLimit = 90;


    } else if (whereDrive == 'city') {
        if (km <= 50) {
            isDriveSafe = true;
        } else {
            difference = km = 50;
        }

        speedLimit = 50;


    } else if (whereDrive == 'residential') {

        if (km <= 20) {
            isDriveSafe = true;
        } else {
            difference = km - 20;
        }

        speedLimit = 20;

    }

    if (isDriveSafe) {
        console.log(`Driving ${km} km/h in a ${speedLimit} zone`);

    } else {

        if (difference <= 20) {

            status = 'speeding';
        } else if (difference <= 40) {

            status = 'excessive speeding';
        } else{

            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }

}

    

RoadRadar(200, 'motorway');