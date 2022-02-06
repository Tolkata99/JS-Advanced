function CircleArea(input)
{
    //'string
    if(typeof(input) != 'number')
    {
        return `We can not calculate the circle area, because we receive a ${typeof(input)}.`
    }
    else
    {
        var result = Math.pow(input, 2) * Math.PI;

        return `${result.toFixed(2)}`;
    }
}

