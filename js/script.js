let x = true;

function trocaCor(){
    const root = document.querySelector(':root');
    var element = document.getElementById("svg");
    element.classList.toggle("svg-dark");
    var element = document.getElementById("body");
    element.classList.toggle("bodyd");
    if(x){
        root.style.setProperty('--cor-um', '#2E2C2F');
        root.style.setProperty('--cor-dois', 'white');
        root.style.setProperty('--cor-tres', '#475B63');
        root.style.setProperty('--cor-quatro', '#ecf8f8');
        root.style.setProperty('--cor-cinco', 'white');
        root.style.setProperty('--cor-seis', 'black');
        x = false;
    } else {
        root.style.setProperty('--cor-um', '#F3E8EE');
        root.style.setProperty('--cor-dois', '#2E2C2F');
        root.style.setProperty('--cor-tres', '#BACDB0');
        root.style.setProperty('--cor-quatro', '#475B63');
        root.style.setProperty('--cor-cinco', 'black');
        root.style.setProperty('--cor-seis', 'whitesmoke');
        x = true;
    }
}