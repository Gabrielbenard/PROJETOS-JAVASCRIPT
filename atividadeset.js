
//vai retornar o array apenas com valores unicos chamado de set 

const array = [5,80,5,80,80,144,144,260,350,750,998,1520,1680];

function  valoresunicos(arr) {
    const myset= new Set(arr);

    return myset 
}

console.log(valoresunicos(array));