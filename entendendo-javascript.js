// Syntax parser e hoisting
var x = y
var y = 0
qual o valor de x?
A) null
B) undefined
C) 0
D) não vai rodar

var x = soma(1,2)
function soma(a, b) {
  return a + b
}
qual o valor de x?
A) null
B) undefined
C) 3
D) não vai rodar

var x = z
qual o valor de x?
A) null
B) undefined
C) 0
D) não vai rodar

function slide2() {
  function universo(x) {
    x = 42
  }
  var x = []
  universo(x)
  return x
}
escolhas = {
  "A": null,
  "B": undefined,
  "C": [],
  "D": "não vai rodar"
}
/*
qual o valor de x?
A) null
B) undefined
C) []
D) não vai rodar
*/

var calcularResposta = gerarProblema(slide2)
calcularResposta(escolhas)

function gerarProblema(problema) {
  return function(respostas) {
    var resultado = problema()
    repostas[resultado]
  }
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
