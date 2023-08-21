var telas;
//REATIVAR AO COLOCAR SITE AO VIVO
/*window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}*/
var activeSlideShowProjs = false;
var intervalProj;
window.onload = (function () {
    var _a, _b;
    activeSlideShowProjs = false;
    var pFrase = document.querySelectorAll(".frase-bem-vindo p").item(0);
    pFrase.style.visibility = "hidden";
    pFrase.style.opacity = "0";
    document.querySelectorAll('#title-container').forEach(function (title_container) {
        title_container.style.width = "0";
        title_container.style.opacity = "1";
    });
    setText("");
    var frase = document.querySelectorAll('.frase-bem-vindo p span');
    var widthPage = (_a = document.getElementById('tela-inicial')) === null || _a === void 0 ? void 0 : _a.clientWidth;
    var heightPage = (_b = document.getElementById('tela-inicial')) === null || _b === void 0 ? void 0 : _b.clientHeight;
    for (var i = 0; i < frase.length; i++) {
        var randW = Math.floor(Math.random() * widthPage - (widthPage * 0.4));
        var randH = Math.floor(Math.random() * heightPage - (heightPage * 0.5));
        frase[i].style.transform = "translate(" + randW + "px, " + randH + "px) rotate(" + (Math.random() * 360) + "deg)";
        frase[i].style.opacity = "0";
    }
    var sec;
    window.scrollTo(0, 0);
    setInterval(function () {
        sec = 0.4;
        pFrase.style.visibility = "visible";
        pFrase.style.opacity = "1";
        pFrase.style.transition = "opacity 1s ease-in-out";
        for (var j = 0; j < frase.length; j++) {
            frase[j].style.transform = "translate(0px,0px)";
            frase[j].style.transition = "transform " + sec + "s ease-in-out, opacity " + sec + "s ease-in-out";
            frase[j].style.opacity = "1";
            sec += 0.4;
        }
    }, 1000);
    console.log;
    setInterval(function () {
        sec = 0.1;
        for (var k = 0; k < frase.length; k++) {
            frase[k].style.animation = "transpAniTexto 1s ease";
            frase[k].style.animationDelay = sec + "s";
            sec += 0.15;
        }
    }, 6300);
});
function setText(string) {
    if (string === "") {
        document.querySelectorAll(".frase-bem-vindo p span").forEach(function (span) {
            string += span.innerHTML.toString();
        });
    }
    var text = document.querySelectorAll(".frase-bem-vindo p")[0];
    string.split("");
    text.innerHTML = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            text.innerHTML += "&nbsp";
        }
        else {
            text.innerHTML += "<span>" + string[i] + "</span>";
        }
    }
}
window.addEventListener("scroll", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var teini = document.getElementById('tela-inicial');
    var sm = document.getElementById('sobre-mim');
    var con = document.getElementById('conhecimentos');
    var proj = document.getElementById('projetos');
    var cont = document.getElementById('contato');
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
            var grad_1 = (_e = telas[i]) === null || _e === void 0 ? void 0 : _e.children[0];
            if (((_f = telas[i]) === null || _f === void 0 ? void 0 : _f.id) !== 'tela-inicial') {
                var titulo_1 = (_g = telas[i]) === null || _g === void 0 ? void 0 : _g.children[1];
                titulo_1.style.width = "0";
                titulo_1.style.transition = "width 1s ease";
            }
            grad_1.style.opacity = "0";
            grad_1.style.transition = "opacity 1s linear";
        }
    }
}
function showSM() {
    var contContainer = document.getElementById("sobre-mim").getElementsByClassName("conteudo-container")[0];
    setInterval(function () {
        contContainer.style.animation = "subirOpacidade 1.5s 1 normal ease-in-out forwards";
    }, 300);
}
function showConhe() {
    var conhes = document.getElementsByClassName("conhe-cell");
    var auxImgs = new Array();
    for (var a = 0; a < conhes.length; a++) {
        auxImgs[a] = conhes[a].getElementsByTagName("i")[0];
    }
    var imgs = auxImgs;
    var fakeLoads = document.getElementsByClassName("fake-load");
    var sec;
    setInterval(function () {
        sec = 0;
        for (var i = 0; i < fakeLoads.length; i++) {
            imgs[i].style.animation = "fadeIn 2s 1 normal ease-in-out forwards";
            imgs[i].style.animationDelay = sec + "s";
            fakeLoads[i].style.animation = "fakeConheLoad 0.75s 1 normal linear forwards";
            fakeLoads[i].style.animationDelay = sec + "s";
            sec += 0.75;
        }
    }, 300);
}
var projShowing = 0;
function showProj(proj) {
    projShowing = proj;
    var projs = document.getElementsByClassName("projeto");
    for (var i = 0; i < projs.length; i++) {
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
    imgProj.addEventListener("click", function () {
        var modalImg = document.getElementById("img01");
        menu.style.display = "none";
        modal.style.display = "block";
        modalImg.src = this.src;
        disableScroll();
    });
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
function slideShowProjs() {
    var contSlideProj = 0.0;
    var projs = document.getElementsByClassName("projeto");
    for (var i = 0; i < projs.length; i++) {
        projs[i].addEventListener("click", pauseSlideShowProjs);
    }
    intervalProj = setInterval(function () {
        if (activeSlideShowProjs !== false) {
            showProj(contSlideProj);
            contSlideProj += 1;
            if (contSlideProj === projs.length) {
                contSlideProj = 0.0;
            }
            console.log("contSlideProj:", contSlideProj);
        }
        else {
            contSlideProj = 0.0;
            pauseSlideShowProjs();
        }
    }, 2000);
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
