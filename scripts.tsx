/*var lastDiv ;
var currentDiv;
var firstTime = false;*/
var views;
window.addEventListener("scroll", function () {

    var scr = document.documentElement?.scrollTop;
    const strc= document.getElementById('start-screen');
    const ab = document.getElementById('about-me');
    const kno= document.getElementById('knowledge');

    views=[strc,ab,kno];

    /*if(firstTime===false){
        firstTime=true;
        currentDiv=strc;
    }*/
    
   // lastDiv=currentDiv;

    console.log("scr:", scr);
    if (strc?.clientHeight !== undefined) {
        if (scr>= (strc?.getClientRects().item(0)?.top+scr) && scr<= (strc?.getClientRects().item(0)?.bottom+scr)) {
            changeColors(strc?.id);
            /*currentDiv=strc;
            if(lastDiv?.id !== currentDiv?.id){
               changeColors(currentDiv, lastDiv);

            }*/
        }
    }

    console.log("ab Height:",ab?.getClientRects().item(0)?.top+scr);
    console.log("ab Bottom:",ab?.getClientRects().item(0)?.bottom+scr);
    if (ab?.clientHeight !== undefined) {
        if (scr>= (ab?.getClientRects().item(0)?.top+scr) && scr<= (ab?.getClientRects().item(0)?.bottom+scr)) {
            changeColors(ab?.id);
            /* currentDiv=ab;
            if(lastDiv?.id !== currentDiv?.id){
                changeColors(currentDiv, lastDiv);
            }*/
        }
    }
console.log("Kno Height:",kno?.getClientRects().item(0)?.top);
console.log("Kno Bottom:",kno?.getClientRects().item(0)?.bottom);
    if (kno?.clientHeight !== undefined) {
        if (scr>= (kno?.getClientRects().item(0)?.top+scr) && scr<= (kno?.getClientRects().item(0)?.bottom+scr)/*scr >= kno?.getClientRects().item(0)?.top && kno?.getClientRects().item(0)?.bottom <= 0 */) {
            changeColors(kno?.id);
            /* currentDiv=kno;
            if(lastDiv?.id !== currentDiv?.id){
                changeColors(currentDiv, lastDiv);
            }*/
        }
    }

    /*console.log("lastDiv:",lastDiv?.id);
    console.log("currentDiv:",currentDiv?.id);
    console.log("lastDiv child",lastDiv?.children[0]);
    console.log("current child",currentDiv?.children[0]);*/
}
);

function changeColors(viewName/*current, last*/) {
    
    for(let i=0;i<views.length;i++){
        if(views[i]?.id ===viewName){
            var grad = views[i]?.children[0];
            grad.style.opacity = "1";
            grad.style.transition = "opacity 1s linear";
        }
        else{
            var grad = views[i]?.children[0];
            grad.style.opacity = "0";
            grad.style.transition = "opacity 1s linear";
        }
    }
    /*var cChild  = current?.children[0];
    var lChild = last?.children[0];
    
    console.log("Pai current child",cChild.parentElement);
    cChild.style.opacity = "1";
    cChild.style.transition = "opacity 1s linear";
    
    console.log("Pai last child",lChild.parentElement);
    lChild.style.opacity = "0";
    lChild.style.transition = "opacity 1s linear";*/
    
}