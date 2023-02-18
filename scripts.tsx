var telas;
window.onload = (() => {
    var title_containers = document.querySelectorAll('#title-container').forEach(title_container => {
        title_container.style.width = "0";
        title_container.style.opacity = "1";
    });
})
window.addEventListener("scroll", function () {


    let teini = document.getElementById('tela-inicial');
    let sm = document.getElementById('sobre-mim');
    let con = document.getElementById('conhecimentos');
    let proj = document.getElementById('projetos');
    let cont = document.getElementById('contato');

    var cliHei = document.documentElement.clientHeight;
    var offSet = cliHei * 0.30;
    var scr = document.documentElement?.scrollTop;
    telas = [teini, sm, con, proj, cont];

    console.log("CH", document.documentElement.clientHeight);
    console.log("scr:", scr);
    if (teini?.clientHeight !== undefined) {
        if (scr >= (teini?.getClientRects().item(0)?.top + scr) && scr <= (teini?.getClientRects().item(0)?.bottom + scr)) {
            changeColors(teini?.id);

        }
    }

    if (sm?.clientHeight !== undefined) {
        if (scr >= (sm?.getClientRects().item(0)?.top + scr - offSet) && scr <= (sm?.getClientRects().item(0)?.bottom + scr)) {
            changeColors(sm?.id);

        }
    }
    if (con?.clientHeight !== undefined) {
        if (scr >= (con?.getClientRects().item(0)?.top + scr - offSet) && scr <= (con?.getClientRects().item(0)?.bottom + scr)) {
            changeColors(con?.id);

        }
    }

    if (proj?.clientHeight !== undefined) {
        if (scr >= (proj?.getClientRects().item(0)?.top + scr - offSet) && scr <= (proj?.getClientRects().item(0)?.bottom + scr)) {
            changeColors(proj?.id);

        }
    }

    console.log("cont Height:", cont?.getClientRects().item(0)?.top + scr - offSet);
    console.log("cont Bottom:", cont?.getClientRects().item(0)?.bottom + scr - offSet);
    if (cont?.clientHeight !== undefined) {
        if (scr >= (cont?.getClientRects().item(0)?.top + scr - offSet) && scr <= (cont?.getClientRects().item(0)?.bottom + scr)) {
            changeColors(cont?.id);

        }
    }

}
);

function changeColors(nomeTela) {
    console.log("NOME TELA:", nomeTela);
    for (let i = 0; i < telas.length; i++) {
        if (telas[i]?.id === nomeTela) {
            var grad = telas[i]?.children[0];
            if (telas[i]?.id !== 'tela-inicial') {
                var titulo = telas[i]?.children[1];
                titulo.style.width = "50%";
                titulo.style.transition = "width 1s ease";
            }
                console.log(nomeTela," ENTROU IF");

            grad.style.display = "";
            grad.style.opacity = "1";
            grad.style.transition = "opacity 1s linear";

        }
        else {
            console.log(nomeTela," ENTROU ELSE");
            var grad = telas[i]?.children[0];
            if (telas[i]?.id !== 'tela-inicial') {
                var titulo = telas[i]?.children[1];
                titulo.style.width = "0";
                titulo.style.transition = "width 1s ease";
            }
            if(telas[i]?.id === nomeTela){//caso primeiro if (telas[i]?.id === nomeTela) { falhe
                setTimeout(() => {
                        grad.style.display = "none";
                    }, 1000);
            }
            grad.style.opacity = "0";
            grad.style.transition = "opacity 1s linear";
        }
    }
}
