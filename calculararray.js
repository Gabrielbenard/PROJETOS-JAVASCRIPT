const alunos = [
    {
        nome: "rafaela" , 
        idade: 23, 
        nota: 8,
        turma: "mecanica",
        },
        {
            nome: "luiza" ,
            idade: 23, 
            nota: 9,
            turma: "mecanica",
            },
            {
                nome: "Diego" ,
                idade: 25, 
                nota: 5,
                turma: "mecanica",
            }
] ;







function alunosaprovados(array,media) {
    let aprovados = [ ];

    for(let i=0; i< array.length;i++){
      if (array[i].nota >= media){
           aprovados.push(array[i].nome)
      }
    }

    return aprovados;
}

console.log(alunosaprovados(alunos,5));
