let x = true;

function trocaCor(){
    const root = document.querySelector(':root');
    if(x){
        root.style.setProperty('--cor-um', 'blue');
        root.style.setProperty('--cor-dois', 'blue');
        root.style.setProperty('--cor-tres', 'blue');
        root.style.setProperty('--cor-quatro', 'blue');
        root.style.setProperty('--cor-cinco', 'blue');
        root.style.setProperty('--cor-seis', 'blue');
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