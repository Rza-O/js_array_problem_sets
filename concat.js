/**Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log(). */

const programmingLanguages = ['JavaScript', 'Python', 'C++', "C"];
const yearOfInvention = [1995, 1991, 1985, 1972];
const years = yearOfInvention.toString();
const yearAndLanguages = programmingLanguages.concat(yearOfInvention);
const yearAndLangs = programmingLanguages.concat(years);

// Concating two arrays
console.log(programmingLanguages);
console.log(yearOfInvention);
console.log(yearAndLanguages);
console.log(yearAndLangs);