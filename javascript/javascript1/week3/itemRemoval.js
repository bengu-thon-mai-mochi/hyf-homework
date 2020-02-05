const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala"
];
const nameToRemove = "Ahmad";
  
function removeName(array, name) {
    if (array.includes(name) == true) {
      const nameIndex = array.indexOf(name);
      array.splice(nameIndex, 1);
    }
    return;
}
  
removeName(names, nameToRemove);
console.log(names);
