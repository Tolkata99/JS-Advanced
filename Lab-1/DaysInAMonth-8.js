
function DaysInAMonth(month, year){

    return new Date(year, month,0).getDate();

}
console.log(DaysInAMonth(1, 2012));
