//Task-1
function consoleStyler(color, background, fontSize, txt) {
    let message = "%c" + txt;
    let style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    
    console.log(message, style);
}
//TAsk-2
function celebrateStyler(reason){
    let fontStyle="color: tomato; font-size: 48px";

    if(reason=="birthday"){
        console.log(`%cHappy birthday`,fontStyle);
    }else if(reason=="champions"){
        console.log(`%cCongrats on the title!`,fontStyle);
    }else{
        console.log(message,style);
    }
}
//Task-3
consoleStyler('#1d5c63','#ede6db','42px','Congratulation');
celebrateStyler('birthday');

//Task-4
function styleAndCelebrate(color,background,fontSize,txt,reason){
    consoleStyler(color, background,fontSize,txt);
    celebrateStyler(reason);
}

styleAndCelebrate('ef7c8e','fae8e0','30px','You made it!','champions');