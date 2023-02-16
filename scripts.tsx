var views;
window.addEventListener("scroll", function () {

    var scr = document.documentElement?.scrollTop;
    const strc = document.getElementById('start-screen');
    const ab = document.getElementById('about-me');
    const kno = document.getElementById('knowledge');

    views = [strc, ab, kno];


    console.log("scr:", scr);
    if (strc?.clientHeight !== undefined) {
        if (scr >= (strc?.getClientRects().item(0)?.top + scr) && scr <= (strc?.getClientRects().item(0)?.bottom + scr)) {
            changeColors(strc?.id);

        }
    }

    console.log("ab Height:", ab?.getClientRects().item(0)?.top + scr);
    console.log("ab Bottom:", ab?.getClientRects().item(0)?.bottom + scr);
    if (ab?.clientHeight !== undefined) {
        if (scr >= (ab?.getClientRects().item(0)?.top + scr) && scr <= (ab?.getClientRects().item(0)?.bottom + scr)) {
            changeColors(ab?.id);

        }
    }
    console.log("Kno Height:", kno?.getClientRects().item(0)?.top);
    console.log("Kno Bottom:", kno?.getClientRects().item(0)?.bottom);
    if (kno?.clientHeight !== undefined) {
        if (scr >= (kno?.getClientRects().item(0)?.top + scr) && scr <= (kno?.getClientRects().item(0)?.bottom + scr)/*scr >= kno?.getClientRects().item(0)?.top && kno?.getClientRects().item(0)?.bottom <= 0 */) {
            changeColors(kno?.id);

        }
    }

}
);

function changeColors(viewName/*current, last*/) {

    for (let i = 0; i < views.length; i++) {
        if (views[i]?.id === viewName) {
            var grad = views[i]?.children[0];
            if (views[i]?.id !== 'start-screen') {
                var title = views[i]?.children[1]
                title.style.width = "100%";
                title.style.transition = "width 1s ease";
            }

            grad.style.opacity = "1";
            grad.style.transition = "opacity 1s linear";

        }
        else {
            var grad = views[i]?.children[0];
            if (views[i]?.id !== 'start-screen') {
                var title = views[i]?.children[1]
                title.style.width = "0";
                title.style.transition = "width 1s ease";
            grad.style.opacity = "0";
            grad.style.transition = "opacity 1s linear";
        }
    }

}