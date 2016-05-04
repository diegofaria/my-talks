function b() {
  var myVar
  console.log(myVar)
}

function a() {
  var myVar = 2
  console.log(myVar)
  b()
}

var myVar = 1
console.log(myVar)
a()
console.log(myVar)



o que vai aparecer no console?
escolhas = {
  "A": [1, 1, 1, 1],
  "B": [1, 2, undefined, 1],
  "C": [1, 2, undefined, undefined],
  "D": [1, 2, 2, 2]
}

//Execution stack and variable environments
