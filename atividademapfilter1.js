//messa atividade utilizamos o map e com this para criar um novo array 

const maca ={
    value: 2,
};

const laranja = {
    value: 3,
};


const nums= [1,2];



function  mapcomthis(arr, thisarg) {
    return arr.map(function(item) {return  item *this.value;}, thisarg);
    
};

console.log(mapcomthis(nums,maca));


console.log(mapcomthis(nums,laranja));