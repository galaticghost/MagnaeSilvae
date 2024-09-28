if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    x = false;
    var element = document.getElementById("svg");
    element.classList.toggle("svg-dark");
    var element = document.getElementById("body");
    element.classList.toggle("bodyd");
    document.getElementById("suntop").src = "../assets/sun.webp";
    document.getElementById("sunmiddle").src = "../assets/sun.webp";
    document.getElementById("woods").src = "../assets/darkWoods.jpg";
}
else{
    x = true;
}

function trocaCor(){
    const root = document.querySelector(':root');
    var element = document.getElementById("body");
    element.classList.toggle("bodyd");
    
    if(x){
        root.style.setProperty('--cor-um', '#2E2C2F');
        root.style.setProperty('--cor-dois', 'white');
        root.style.setProperty('--cor-tres', '#475B63');
        root.style.setProperty('--cor-quatro', '#ecf8f8');
        root.style.setProperty('--cor-cinco', 'white');
        root.style.setProperty('--cor-seis', 'black');
        var element = document.getElementById("svg");
        element.classList.toggle("svg-dark");
        document.getElementById("suntop").src = "../assets/sun.webp";
        document.getElementById("sunmiddle").src = "../assets/sun.webp";
        document.getElementById("woods").src = "../assets/darkWoods.jpg";
        document.getElementById("woods").alt = "Um bosque na escuridão";
        var c = document.getElementById("link")
        c.style.setProperty('color','white')
        var c = document.getElementById("flink")
        c.style.setProperty('color','white')
        x = false;
    } else {
        root.style.setProperty('--cor-um', '#F3E8EE');
        root.style.setProperty('--cor-dois', '#2E2C2F');
        root.style.setProperty('--cor-tres', '#BACDB0');
        root.style.setProperty('--cor-quatro', '#475B63');
        root.style.setProperty('--cor-cinco', 'black');
        root.style.setProperty('--cor-seis', 'whitesmoke');
        var element = document.getElementById("svg");
        element.classList.toggle("svg-dark");
        document.getElementById("suntop").src = "../assets/moon.png";
        document.getElementById("sunmiddle").src = "../assets/moon.png";
        document.getElementById("woods").src = "../assets/woods.jpg";
        document.getElementById("woods").alt = "Um bosque";
        var c = document.getElementById("link")
        c.style.setProperty('color','blue')
        var c = document.getElementById("flink")
        c.style.setProperty('color','blue')
        x = true;
    }
}

function showDrawer() {
    document.getElementById('body').classList.add('show-drawer');
  }
  
  function hideDrawer() {
    document.getElementById('body').classList.remove('show-drawer');
  }
