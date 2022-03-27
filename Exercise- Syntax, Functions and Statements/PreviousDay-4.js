function PreviousDay (year,month,day) {
 
    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);
    
    //date.setDate(date.setDate());
    date.setDate(date.getDate()-1);

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`);
}

PreviousDay(2016, 9, 30)
