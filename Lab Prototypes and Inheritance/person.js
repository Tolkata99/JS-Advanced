function Person(first, last) {
    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, 'fullName', {
        set: (value) => {

            let arrayName = value.split(' ');
            if (arrayName.length == 0) {
                this.fullName = arrayName[0];
                this.firstName = arrayName[0];

            }else if (arrayName.length == 1) {
                this.firstName = arrayName[0];
                this.lastName = arrayName[1];
                this.fullName = firstName + ' ' + lastName;
            }

        },
        get: () =>{
            return this.fullName;
        }


    })


}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
