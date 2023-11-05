"use strict";
var telas;
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
var activeSlideShowProjs = false;
var intervalProj;
window.onload = (() => {
    var _a, _b;
    activeSlideShowProjs = false;
    const pFrase = document.querySelectorAll(".frase-bem-vindo p").item(0);
    pFrase.style.visibility = "hidden";
    pFrase.style.opacity = "0";
    document.querySelectorAll('#title-container').forEach(title_container => {
        title_container.style.width = "0";
        title_container.style.opacity = "1";
    });
    setText("");
    const frase = document.querySelectorAll('.frase-bem-vindo p span');
    var widthPage = (_a = document.getElementById('tela-inicial')) === null || _a === void 0 ? void 0 : _a.clientWidth;
    var heightPage = (_b = document.getElementById('tela-inicial')) === null || _b === void 0 ? void 0 : _b.clientHeight;
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
    setInterval(() => {
        sec = 0.1;
        for (let k = 0; k < frase.length; k++) {
            frase[k].style.animation = "transpAniTexto 1s ease";
            frase[k].style.animationDelay = sec + "s";
            sec += 0.15;
        }
    }, 6300);
});
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
        }
        else if (string[i] === "/") {
            text.innerHTML += "\n";
        }
        else {
            text.innerHTML += "<span>" + string[i] + "</span>";
        }
    }
}
window.addEventListener("scroll", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const teini = document.getElementById('tela-inicial');
    const sm = document.getElementById('sobre-mim');
    const con = document.getElementById('conhecimentos');
    const proj = document.getElementById('projetos');
    const cont = document.getElementById('contato');
    var cliHei = document.documentElement.clientHeight;
    var offSet = cliHei * 0.30;
    var scr = (_a = document.documentElement) === null || _a === void 0 ? void 0 : _a.scrollTop;
    telas = [teini, sm, con, proj, cont];
    if (scr >= (((_b = teini === null || teini === void 0 ? void 0 : teini.getClientRects().item(0)) === null || _b === void 0 ? void 0 : _b.top) + scr) && scr <= (((_c = teini === null || teini === void 0 ? void 0 : teini.getClientRects().item(0)) === null || _c === void 0 ? void 0 : _c.bottom) + scr - offSet)) {
        transition(teini === null || teini === void 0 ? void 0 : teini.id);
        pauseSlideShowProjs();
    }
    else if (scr >= (((_d = sm === null || sm === void 0 ? void 0 : sm.getClientRects().item(0)) === null || _d === void 0 ? void 0 : _d.top) + scr - offSet) && scr <= (((_e = sm === null || sm === void 0 ? void 0 : sm.getClientRects().item(0)) === null || _e === void 0 ? void 0 : _e.bottom) + scr - offSet)) {
        transition(sm === null || sm === void 0 ? void 0 : sm.id);
        showSM();
        pauseSlideShowProjs();
    }
    else if (scr >= (((_f = con === null || con === void 0 ? void 0 : con.getClientRects().item(0)) === null || _f === void 0 ? void 0 : _f.top) + scr - offSet) && scr <= (((_g = con === null || con === void 0 ? void 0 : con.getClientRects().item(0)) === null || _g === void 0 ? void 0 : _g.bottom) + scr - offSet)) {
        transition(con === null || con === void 0 ? void 0 : con.id);
        showConhe();
        pauseSlideShowProjs();
    }
    else if (scr >= (((_h = proj === null || proj === void 0 ? void 0 : proj.getClientRects().item(0)) === null || _h === void 0 ? void 0 : _h.top) + scr - offSet) && scr <= (((_j = proj === null || proj === void 0 ? void 0 : proj.getClientRects().item(0)) === null || _j === void 0 ? void 0 : _j.bottom) + scr - offSet)) {
        transition(proj === null || proj === void 0 ? void 0 : proj.id);
        activeSlideShowProjs = true;
        slideShowProjs();
    }
    else if (scr >= (((_k = cont === null || cont === void 0 ? void 0 : cont.getClientRects().item(0)) === null || _k === void 0 ? void 0 : _k.top) + scr - offSet) && scr <= (((_l = cont === null || cont === void 0 ? void 0 : cont.getClientRects().item(0)) === null || _l === void 0 ? void 0 : _l.bottom) + scr - offSet)) {
        transition(cont === null || cont === void 0 ? void 0 : cont.id);
        showCont();
        pauseSlideShowProjs();
    }
});
function transition(nomeTela) {
    var _a, _b, _c, _d, _e, _f, _g;
    for (var i = 0; i < telas.length; i++) {
        if (((_a = telas[i]) === null || _a === void 0 ? void 0 : _a.id) === nomeTela) {
            var grad = (_b = telas[i]) === null || _b === void 0 ? void 0 : _b.children[0];
            if (((_c = telas[i]) === null || _c === void 0 ? void 0 : _c.id) !== 'tela-inicial') {
                var titulo = (_d = telas[i]) === null || _d === void 0 ? void 0 : _d.children[1];
                titulo.style.width = "50%";
                titulo.style.transition = "width 1s ease";
            }
            grad.style.display = "";
            grad.style.opacity = "1";
            grad.style.transition = "opacity 1s linear";
        }
        else {
            let grad = (_e = telas[i]) === null || _e === void 0 ? void 0 : _e.children[0];
            if (((_f = telas[i]) === null || _f === void 0 ? void 0 : _f.id) !== 'tela-inicial') {
                let titulo = (_g = telas[i]) === null || _g === void 0 ? void 0 : _g.children[1];
                titulo.style.width = "0";
                titulo.style.transition = "width 1s ease";
            }
            grad.style.opacity = "0";
            grad.style.transition = "opacity 1s linear";
        }
    }
}
function showSM() {
    let contContainer = document.querySelectorAll("#sobre-mim .conteudo-container")[0];
    let odd = document.querySelectorAll(".paragrafo:nth-child(odd)");
    let even = document.querySelectorAll(".paragrafo:nth-child(even)");
    setInterval(() => {
        contContainer.style.animation = "fadeIn 1s 1 normal ease-in-out forwards";
        for (let i = 0; i < odd.length; i++) {
            odd[i].style.animation = "slide-paragrafos-odd 1s 1 normal forwards ease-in";
            odd[i].style.animationDelay = "0.3s";
        }
        for (let i = 0; i < even.length; i++) {
            even[i].style.animation = "slide-paragrafos-even 1s 1 normal forwards ease-in";
            even[i].style.animationDelay = "0.3s";
        }
    }, 300);
}
function showConhe() {
    const conhes = document.getElementsByClassName("conhe-cell");
    const conheContainer = document.querySelector("#conhecimentos .conteudo-container");
    let speed = 0.75;
    let auxImgs = new Array();
    for (let a = 0; a < conhes.length; a++) {
        auxImgs[a] = conhes[a].getElementsByTagName("i")[0];
    }
    const imgs = auxImgs;
    const fakeLoads = document.getElementsByClassName("fake-load");
    conheContainer === null || conheContainer === void 0 ? void 0 : conheContainer.addEventListener("click", () => {
        speed = 0.2;
    });
    var sec;
    setInterval(() => {
        sec = 0;
        for (let i = 0; i < fakeLoads.length; i++) {
            imgs[i].style.animation = "fadeIn 2s 1 normal ease-in-out forwards";
            imgs[i].style.animationDelay = sec + "s";
            fakeLoads[i].style.animation = "fakeConheLoad " + speed + "s 1 normal linear forwards";
            fakeLoads[i].style.animationDelay = sec + "s";
            sec += speed;
        }
    }, 300);
}
var projShowing = 0;
function showProj(proj) {
    projShowing = proj;
    const projs = document.getElementsByClassName("projeto");
    for (let i = 0; i < projs.length; i++) {
        projs[i].classList.remove("projeto-atual");
    }
    projs[proj].classList.add("projeto-atual");
    projs[proj].scrollIntoView({
        behavior: "auto",
        block: 'nearest',
        inline: "center"
    });
    var imgsProj = projs[proj].getElementsByClassName("imagem-proj");
    var imgProj = imgsProj[slideProjImgIndex - 1];
    var modal = document.getElementById("fullscreen-Modal");
    var menu = document.getElementsByClassName("menu")[0];
    if (imgProj != undefined) {
        imgProj.addEventListener("click", function () {
            var modalImg = document.getElementById("img01");
            menu.style.display = "none";
            modal.style.display = "block";
            modalImg.src = this.src;
            disableScroll();
        });
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        menu.style.display = "flex";
        modal.style.display = "none";
        enableScroll();
    };
}
function disableScroll() {
    var scrollTop = document.documentElement.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft;
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}
function enableScroll() {
    window.onscroll = function () { };
}
function pauseSlideShowProjs() {
    clearInterval(intervalProj);
    intervalProj = undefined;
    activeSlideShowProjs = false;
}
let contSlideProj = 0;
function slideShowProjs() {
    const projs = document.getElementsByClassName("projeto");
    for (let i = 0; i < projs.length; i++) {
        projs[i].addEventListener("click", pauseSlideShowProjs);
    }
    if (intervalProj === undefined) {
        intervalProj = setInterval(function () {
            if (activeSlideShowProjs === true) {
                showProj(contSlideProj);
                contSlideProj += 1;
                if (contSlideProj === projs.length) {
                    contSlideProj = 0;
                }
            }
            else {
                pauseSlideShowProjs();
                contSlideProj = 0;
            }
        }, 2000);
    }
}
var slideProjImgIndex = 1;
showDivs(slideProjImgIndex);
function plusDivs(n) {
    showDivs(slideProjImgIndex += n);
}
function showDivs(n) {
    var i;
    var proj = document.getElementsByClassName("projeto")[projShowing];
    var imgsProj = proj.getElementsByClassName("imagem-proj");
    if (n > imgsProj.length) {
        slideProjImgIndex = 1;
    }
    if (n < 1) {
        slideProjImgIndex = imgsProj.length;
    }
    for (i = 0; i < imgsProj.length; i++) {
        imgsProj[i].style.display = "none";
    }
    imgsProj[slideProjImgIndex - 1].style.display = "block";
    var modalImg = document.getElementById("img01");
    modalImg.src = imgsProj[slideProjImgIndex - 1].src;
}
function showCont() {
    let contContainer = document.getElementById("contato").getElementsByClassName("conteudo-container")[0];
    setInterval(() => {
        contContainer.style.animation = "subirOpacidade 0.7s 1 normal ease-in-out forwards";
    }, 300);
}
