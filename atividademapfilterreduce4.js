function  somaarray(arr) {
    return arr.reduce(function reduzir(prev,current)  {
        console.log({prev});
        console.log({current});
        return  prev + current;
    },0);
};

const arr= [ 5,8];

console.log(somaarray(arr));