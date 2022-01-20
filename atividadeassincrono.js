const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
 const catbtn = document.getElementById('change-cat');
 

const getcats = async () => {
    try {
        const data =await fetch(BASE_URL);
        const json = await data.json;

        return json.webpurl;
    }


    catch(e){
        console.log(e.message);
     }


};


const loadimg = async () => {
    const catimg = document.getElementById('cat');
    catimg.src = await getcats();
};


catbtn.addEventListener('click',loadimg);

loadimg();