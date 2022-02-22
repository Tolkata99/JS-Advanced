function demo(){


    let object = { 

        firstName: 'anatoli',
        lastName:'mihaylov',
        age: 89,
        Exering(input){
            return input;
        },
        
    };

    let copy = JSON.parse(JSON.stringify(object));//0;
    
    
     object.age;
    
    console.log(object);
    console.log(copy)
}


demo();