function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestNameRestaurant = '';
      let output = {};

      for (let line of input) {
         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workerData = restaurantInfo[0].split(', ');

         for (let worker of workerData) {
            let [name, salary] = worker.split(' ');

            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            } else {
               output[restaurantName][name] = Number(salary);
            }
         }
      }

      let entries = Object.entries(output);
      for (let entry of entries) {

         let key = entry[0];
         let values = Object.entries(entry[1]);
         for (let [name, salary] of values) {
            totalSalary += salary;
         }
         avgSalary = totalSalary / values.length;

         if (avgSalary > currAvgSalary) {
            currAvgSalary = avgSalary;
            bestNameRestaurant = key;
            totalSalary = 0;
         }
      }
      let result = Object.entries(output[bestNameRestaurant]).sort((a, b) => d[1] - a[1]);

      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `)
      document.querySelector('#bestRestaurant p').textContent = `Name: ${currAvgSalary.toFixed(2)} Average Salary: ${result[0][1]} Best Salary: ${slary}`;
      document.querySelector('#workers p').textContent = print;

   }
}