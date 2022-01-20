function filtrarpares(arr) {
    return arr.filter(function callbackpar(item) {
        return item %2 ===0 ;
        
    });
    
}

function filtrarimpares(arr) {
    return arr.filter(function callbackimpares(item) {
        return item %2 !== 0; 
    });
}

const meuarray= [2,6,8,9,11,13,15,16,21];

console.log(filtrarpares(meuarray));

console.log(meuarray);

console.log(filtrarimpares(meuarray));