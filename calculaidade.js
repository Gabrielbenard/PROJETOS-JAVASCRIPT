// CALCULA A IDADE DA PESSOA EM ALGUM ANOS QUE VOCÊ VAI ESCOLHER COMO PARÂMETRO. 
 function calculadora(anos){
     return `daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} de idade`;
 }

 const pessoa1 = {
     nome: "jailson",
     idade: 30 ,

 }
 const pessoa2 = {
     nome: "george",
     idade: 29,   
 }

 console.log(calculadora.call(pessoa2,30));

 console.log(calculadora.apply(pessoa2,[20]));