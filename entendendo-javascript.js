var calcularResposta = gerarProblema(slide1)
calcularResposta(escolhas)

function gerarProblema(problema) {
  return function(escolhas) {
    var resultado = problema()
    for (var escolha in escolhas) {
      if (escolhas[escolha] === resultado)
        console.log('resposta: ' + escolha)
    }
  }
}


 // Syntax parser e compiling
function slide3() {

  var x = y
  console.log(x)

}
qual o valor de x?
escolhas3 = {
  "A": null,
  "B": undefined,
  "C": 0,
  "D": "não vai rodar"
}


// variable hoisting
function slide1() {

  console.log(x)
  var x = 1

}
qual o valor de x?
escolhas1 = {
  "A": null,
  "C": 1,
  "B": undefined,
  "D": "não vai rodar"
}


// function hoisting
function slide2() {

  var x = soma(1,2)
  console.log(x)
  function soma(a, b) {
    return a + b
  }

}
qual o valor de x?
escolhas2 = {
  "A": null,
  "B": undefined,
  "C": 3,
  "D": "não vai rodar"
}


(function slide2() {
  var x = 0
  function universo() {
    var x = 42
    console.log(x)
  }
  universo()
  console.log(x)
})()
qual o valor de x?
escolhas4 = {
  "A": null,
  "B": undefined,
  "C": 0,
  "D": "não vai rodar"
}


// execution stack
(function slide2() {
  var x = 0
  function universo() {
    console.log(x)
  }
  universo()
})()
qual o valor de x?
escolhas4 = {
  "A": null,
  "B": undefined,
  "C": 0,
  "D": "não vai rodar"
}



function slide2() {
  function universo(x) {
    x = 42
  }
  var z = 0
  universo(z)
  console.log(x)
}
qual o valor de x?
escolhas4 = {
  "A": null,
  "B": undefined,
  "C": 0,
  "D": "não vai rodar"
}


function troca(a, b) {
  var temp = a
  a = b
  b = temp
}
var x = 1
var y = 2
troca(x)
qual o valor de x e y?
A)
















//function challenges

function mesmo(x) {
  return x
}

function applyfunction(funx) {
  return function(x) {
    return function(y){
      return funx(x,y)
    }
  }
}

function add(x,y) {
  return x + y
}

function addf(x) {
  return function(y) {
    return x + y
  }
}

addf(3)(4)


//coloring console
var escolhas = {
  "A": null,
  "B": undefined,
  "C": [],
  "D": "não vai rodar"
}
console.log('%c dado o exemplo: \n\n' +
a +
'\n\nqual o valor de x?\n' +
'A. null\n' +
'B. undefined\n' +
'C. 0\n' +
'D. não vai rodar\n', 'background:#222; color: #bada55;')
