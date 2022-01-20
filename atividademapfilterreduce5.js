const lista = [
    {
        name: 'sabao em po',
        preço: 20 ,
    },
    {
        name: "cuzcuz",
        preço: 8,
    },
    {
        name: 'arroz',
        preço: 20 ,
    }
];

const saldodisponivel= 100;

function calculasaldo(saldodisponivel, lista) {
   return lista.reduce(function callbacklista(prev, current,index) {
       console.log("rodada do index",index +1);
       console.log({prev});
       console.log({current});
       return prev - current.preço; },saldodisponivel)
};

console.log(calculasaldo(saldodisponivel,lista));