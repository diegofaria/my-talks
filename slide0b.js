var a = "Hello world!"

function b() {

}

console.log(this.a)
console.log(this.b)


o que vai aparecer no console?
escolhas = {
  "A": null e null,
  "B": undefined e undefined,
  "C": "Hello world!" e function b(){},
  "D": "algum tipo de erro"
}

globalExecutionContext = [
 "global object",
 "this",
 "link to outer environment",
 "your code"
]



//Global Execution context, Global object and this
//Global = is not in a function
