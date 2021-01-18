//This is fibonacci challenge
let results = []
for (let num = 0; num < 10; num++) {
   if (results.length == 0) {
       results.push(0, 1)
   } 
   results.push(results[results.length - 1] + results[results.length - 2])
  }
console.log(results)
//write 