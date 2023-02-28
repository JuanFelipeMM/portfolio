var telas;
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
window.onload = (() => {

    document.querySelectorAll(".frase-bem-vindo p").item(0).style.visibility = "hidden";
    document.querySelectorAll(".frase-bem-vindo p").item(0).style.opacity = "0";
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

    var sec = 0.4;
    window.scrollTo(0, 0);

    setInterval(() => {
        document.querySelectorAll(".frase-bem-vindo p").item(0).style.visibility = "visible";
        document.querySelectorAll(".frase-bem-vindo p").item(0).style.opacity = "1";
        document.querySelectorAll(".frase-bem-vindo p").item(0).style.transition = "opacity 1s ease-in-out";
        for (var j = 0; j < frase.length; j++) {
            frase[j].style.transform = "translate(0px,0px)";
            frase[j].style.transition = "transform " + sec + "s ease-in-out, opacity " + sec + "s ease-in-out";
            frase[j].style.opacity = "1";
            sec += 0.4;
        }
    }, 1000);



    setInterval(() => {
        sec = 0.1;
        for (var k = 0; k < frase.length; k++) {
            frase[k].style.animation = "brilhoAni 1s ease-out";
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
    var text = document.querySelectorAll(".frase-bem-vindo p")[0];
    string.split("");
    text.innerHTML = "";
    for (var i = 0; i < string.length; i++) {
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


    if (scr >= (teini?.getClientRects().item(0)?.top + scr) && scr <= (teini?.getClientRects().item(0)?.bottom + scr)) {
        changeColors(teini?.id);

    }

    if (scr >= (sm?.getClientRects().item(0)?.top + scr - offSet) && scr <= (sm?.getClientRects().item(0)?.bottom + scr)) {
        changeColors(sm?.id);

    }

    if (scr >= (con?.getClientRects().item(0)?.top + scr - offSet) && scr <= (con?.getClientRects().item(0)?.bottom + scr)) {
        changeColors(con?.id);

    }

    if (scr >= (proj?.getClientRects().item(0)?.top + scr - offSet) && scr <= (proj?.getClientRects().item(0)?.bottom + scr)) {
        changeColors(proj?.id);

    }


    if (scr >= (cont?.getClientRects().item(0)?.top + scr - offSet) && scr <= (cont?.getClientRects().item(0)?.bottom + scr)) {
        changeColors(cont?.id);

    }

}
);

function changeColors(nomeTela) {

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

            var grad = telas[i]?.children[0];
            if (telas[i]?.id !== 'tela-inicial') {
                var titulo = telas[i]?.children[1];
                titulo.style.width = "0";
                titulo.style.transition = "width 1s ease";
            }
            if (telas[i]?.id === nomeTela) {//caso primeiro if (telas[i]?.id === nomeTela) { falhe
                setTimeout(() => {
                    grad.style.display = "none";
                }, 1000);
            }
            grad.style.opacity = "0";
            grad.style.transition = "opacity 1s linear";
        }
    }
}

