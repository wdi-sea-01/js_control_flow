var animals = ['dog','hippopotomas','giraffe','gizelle','cat','organgutan'];

var maxLength = 4;

var newAnimal = [];

for (var i=0; i < animals.length; i++) {
  if (animals[i].length < maxLength) {
    newAnimal.push(animals[i]);
  }
}
console.log(newAnimal);
