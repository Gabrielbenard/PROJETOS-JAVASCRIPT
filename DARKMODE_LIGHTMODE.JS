// PRIMEIRO COLOCAMOS UMA FUNÇÃO UMA QUE VAI ALTERAR CLASSES(ESSA VAI ATUAR JUNTO COM O CSS PARA MUDAR AS CORES) E OUTRA PARA ALTERAR OS TEXTO.
function changemode() {
  changeclasses();
  changetext();

}

/*A FUNÇÃO CHANGECLASSES VAI ADICIONAR OU RETIRAR ,COM O COMANDO .TOGGLE E NAS CLASSES COM O 
.CLASSLIST DE CADA CONSTANTE (QUE GUARDA CADA ELEMENTO DO HTML), NESSE CASO ADICINARARá a string "darkmode" -> CLASS = "darkmode"
toggle = tem a função de um interruptor ao acionar colocará ou retirará.
*/
function changeclasses() {
    body.classList.toggle(darkmodeclass);
    button.classList.toggle(darkmodeclass);
    h1.classList.toggle(darkmodeclass);
    
}
//change text  vai passar por um if , se na classe da body contém a string "darkmode" pegue a constate button que armazena o elemento do html, usa-se o 
// innerHTML para mudar o seu texto colocando a string " LIGHT MODE" MESMA COISA COM H1. Senão executa o  contrário

function changetext() {
    let lightmode = "LIGHT MODE";
    let darkmode = "DARKMODE"

    if(body.classList.contains(darkmodeclass)){
        button.innerHTML = lightmode ;
        h1.innerHTML = darkmode + "  " +"ON" ; 
        return
    }
    button.innerHTML = darkmode;
    h1.innerHTML = lightmode + "  " + "ON";

}

//constates que contém todos os elementos do html. 
const darkmodeclass = 'darkmode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('pagetitle');
const body = document.getElementsByTagName('body')[0];


// A CONSTATE BUTTON que contém o elemento do html acionara um evento através do .addeventlisterner com o 'click', acionará a função chegemode.
button.addEventListener('click', changemode);