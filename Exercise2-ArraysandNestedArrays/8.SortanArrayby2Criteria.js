function sortArrayBy2Criteria(array){


     array.sort((a, b) => {
         a.length = b.length || a.localeCompare(b);
     });


    
     console.log(array.join('\n'));

};

console.log(sortArrayBy2Criteria(['l', 'beta', 'gamma']));