var telas;
//REATIVAR AO COLOCAR SITE AO VIVO
/*window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}*/
window.onload = (() => {
    const pFrase = document.querySelectorAll(".frase-bem-vindo p").item(0);
    pFrase.style.visibility = "hidden";
    pFrase.style.opacity = "0";
    document.querySelectorAll('#title-container').forEach(title_container => {
        title_container.style.width = "0";
        title_container.style.opacity = "1";
    });

    setText("");
    const frase = document.querySelectorAll('.frase-bem-vindo p span');
    var widthPage = document.getElementById('tela-inicial')?.clientWidth;
    var heightPage = document.getElementById('tela-inicial')?.clientHeight;


    for (let i = 0; i < frase.length; i++) {
        var randW = Math.floor(Math.random() * widthPage - (widthPage * 0.4));
        var randH = Math.floor(Math.random() * heightPage - (heightPage * 0.5));

        frase[i].style.transform = "translate(" + randW + "px, " + randH + "px) rotate(" + (Math.random() * 360) + "deg)";
        frase[i].style.opacity = "0";
    }

    var sec;
    window.scrollTo(0, 0);

    setInterval(() => {
        sec = 0.4;
        pFrase.style.visibility = "visible";
        pFrase.style.opacity = "1";
        pFrase.style.transition = "opacity 1s ease-in-out";
        for (let j = 0; j < frase.length; j++) {
            frase[j].style.transform = "translate(0px,0px)";
            frase[j].style.transition = "transform " + sec + "s ease-in-out, opacity " + sec + "s ease-in-out";
            frase[j].style.opacity = "1";
            sec += 0.4;
        }
    }, 1000);
    console.log


    setInterval(() => {
        sec = 0.1;
        for (let k = 0; k < frase.length; k++) {
            frase[k].style.animation = "transpAniTexto 1s ease";
            frase[k].style.animationDelay = sec + "s";
            sec += 0.15;
        }
    }, 6300);

})


function setText(string) {
    if (string === "") {
        document.querySelectorAll(".frase-bem-vindo p span").forEach(span => {
            string += span.innerHTML.toString();
        });
    }
    let text = document.querySelectorAll(".frase-bem-vindo p")[0];
    string.split("");
    text.innerHTML = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            text.innerHTML += "&nbsp";
        } else {

            text.innerHTML += "<span>" + string[i] + "</span>";
        }
    }
}


window.addEventListener("scroll", function () {


    const teini = document.getElementById('tela-inicial');
    const sm = document.getElementById('sobre-mim');
    const con = document.getElementById('conhecimentos');
    const proj = document.getElementById('projetos');
    const cont = document.getElementById('contato');

    var cliHei = document.documentElement.clientHeight;
    var offSet = cliHei * 0.30;
    var scr = document.documentElement?.scrollTop;
    telas = [teini, sm, con, proj, cont];


    if (scr >= (teini?.getClientRects().item(0)?.top + scr) && scr <= (teini?.getClientRects().item(0)?.bottom + scr  - offSet)) {
        transition(teini?.id);
    }else if (scr >= (sm?.getClientRects().item(0)?.top + scr - offSet) && scr <= (sm?.getClientRects().item(0)?.bottom + scr  - offSet)) {
        transition(sm?.id);
        showSM();
    }else if (scr >= (con?.getClientRects().item(0)?.top + scr - offSet) && scr <= (con?.getClientRects().item(0)?.bottom + scr  - offSet)) {
        transition(con?.id);
        showConhe();
    }else if (scr >= (proj?.getClientRects().item(0)?.top + scr - offSet) && scr <= (proj?.getClientRects().item(0)?.bottom + scr  - offSet)) {
        transition(proj?.id);
    }else if (scr >= (cont?.getClientRects().item(0)?.top + scr - offSet) && scr <= (cont?.getClientRects().item(0)?.bottom + scr  - offSet)) {
        transition(cont?.id);
    }

}
);

function transition(nomeTela) {

    for (var i = 0; i < telas.length; i++) {
        if (telas[i]?.id === nomeTela) {
            var grad = telas[i]?.children[0];
            if (telas[i]?.id !== 'tela-inicial') {
                var titulo = telas[i]?.children[1];
                titulo.style.width = "50%";
                titulo.style.transition = "width 1s ease";
            }

            grad.style.display = "";
            grad.style.opacity = "1";
            grad.style.transition = "opacity 1s linear";

        }
        else {

            let grad = telas[i]?.children[0];
            if (telas[i]?.id !== 'tela-inicial') {
                let titulo = telas[i]?.children[1];
                titulo.style.width = "0";
                titulo.style.transition = "width 1s ease";
            }
            
            grad.style.opacity = "0";
            grad.style.transition = "opacity 1s linear";
        }
    }

}

function showSM(){
  
    const contContainer = document.getElementById("sobre-mim").getElementsByClassName("conteudo-container")[0];

    setInterval(() => {

    
        contContainer.style.animation = "subirOpacidade 1.5s 1 normal ease-in-out forwards";


        
    }, 300);
}

function showConhe(){
    const conhes = document.getElementsByClassName("conhe-cell");
    let auxImgs = new Array();
    for (let a = 0; a < conhes.length; a++) {
        auxImgs[a]=conhes[a].getElementsByTagName("i")[0];

    }
    const imgs = auxImgs;

    const fakeLoads = document.getElementsByClassName("fake-load");
    var sec;
    setInterval(() => {
        sec = 0;
        for (let i = 0; i < fakeLoads.length; i++) {
            
            imgs[i].style.animation = "fadeIn 2s 1 normal ease-in-out forwards";
            imgs[i].style.animationDelay = sec + "s";
            fakeLoads[i].style.animation = "fakeConheLoad 0.75s 1 normal linear forwards";
            fakeLoads[i].style.animationDelay = sec + "s";
            sec += 0.75;
        }
    }, 300);
}

