array = [5,7,8,9,10,11,12,13];
numero = 5;

function alfa(array,number){
    if(!array && !number) throw new ReferenceError("voce não envious os parametros, ou seja, envie ");

    
    if(typeof array !== 'object' ) throw new TypeError("precisa ser do tipo object");

    if(typeof array !== 'number' ) throw new TypeError("precisa ser do tipo number");
    
    if(array.length !== number) throw new RangeError("tamanho invalido ");

    return array;
}


console.log(alfa([],5));