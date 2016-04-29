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



// Syntax parser e hoisting
function slide1() {
  var x = y
  var y = 0

  return x
}
qual o valor de x?
escolhas1 = {
  "A": null,
  "B": undefined,
  "C": 0,
  "D": "não vai rodar"
}

function slide2() {
  var x = soma(1,2)
  function soma(a, b) {
    return a + b
  }

  return x
}
qual o valor de x?
escolhas2 = {
  "A": null,
  "B": undefined,
  "C": 3,
  "D": "não vai rodar"
}

function slide3() {
  var x = z
  return x
}
qual o valor de x?
escolhas3 = {
  "A": null,
  "B": undefined,
  "C": 0,
  "D": "não vai rodar"
}

function slide2() {
  function universo(x) {
    x = 42
  }
  var x = 0
  universo(x)
  return x
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
