function Cooking(num, p1, p2, p3, p4, p5) {

    let number = Number(num);
    let ArraysOfP = [p1, p2, p3, p4, p5];

    const chop = 'chop';
    const dice = 'dice';
    const spice = 'spice';
    const bake = 'bake';
    const fillet = 'fillet';

    for(let i = 0; i < ArraysOfP.length;i++)
    {
        if(ArraysOfP[i] == chop){
            number /= 2;
        }else if(ArraysOfP[i] == dice){
            number = Math.sqrt(number);
        }else if(ArraysOfP[i] == spice){
            number += 1;
        }else if(ArraysOfP[i] == bake){
            number *= 3;
        }else if(ArraysOfP[i] == fillet){
            let fillet20 = number * 0.2;
            number -= fillet20;
        }

        console.log(number);
    }


}

Cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');

// •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from the number
