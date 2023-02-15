var lastDiv ;
var currentDiv;
var firstTime = false;
window.addEventListener("scroll", function () {

    
    var scr = document.documentElement?.scrollTop;
    const strc= document.getElementById('start-screen');
    const ab = document.getElementById('about-me');
    
    if(firstTime===false){
        firstTime=true;
        currentDiv=strc;
    }
    
    lastDiv=currentDiv;

    console.log("scr:", scr, " strc Height:", strc?.clientHeight, "strc Bottom: ", strc?.getClientRects().item(0)?.bottom);
    if (strc?.clientHeight !== undefined) {
        if (scr <= strc.clientHeight && strc.getClientRects().item(0)?.bottom >= 50 /*&& canChange===true */) {
            currentDiv=strc;
            if(lastDiv?.id !== currentDiv?.id){
               changeColors(currentDiv, lastDiv);
            }
        }
    }
    if (ab?.clientHeight !== undefined) {
        if (scr >= ab.clientHeight && ab?.getClientRects().item(0)?.bottom >= 0 ) {
            currentDiv=ab;
            if(lastDiv?.id !== currentDiv?.id){
                changeColors(currentDiv, lastDiv);
            }
        }
    }

    console.log("lastDiv:",lastDiv?.id);
    console.log("currentDiv:",currentDiv?.id);
    console.log("lastDiv child",lastDiv?.children[0]);
    console.log("current child",currentDiv?.children[0]);
});

function changeColors(current, last/*colorsBK*/) {
    var cChild  = current?.children[0];
    var lChild = last?.children[0];

    cChild.style.opacity = "1";
    cChild.style.transition = "opacity 1s linear";

    lChild.style.opacity = "0";
    lChild.style.transition = "opacity 1s linear";
    
}