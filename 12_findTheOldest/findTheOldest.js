const findTheOldest = function(arr) {
      const mappedAges = arr.map(person => {
        if (person.yearOfDeath) {
          return person
        } else {
          return {
            ...person,
            yearOfDeath: new Date().getFullYear()
          }
        }
      });

      const sortedAges = mappedAges.sort((a, z) => {
        const person1Age = a.yearOfDeath - a.yearOfBirth;
        const person2Age = z.yearOfDeath - z.yearOfBirth;
        if (person1Age < person2Age) {
          return 1
        } else {
          return -1
        }
      })      
        
    
    
      return sortedAges[0];
      };
      

// Do not edit below this line
module.exports = findTheOldest;






