const calculeBtn = document.getElementById("calcule");
const textInput = document.getElementById("text");
const resEl = document.getElementById("res");
const voyelle ="aeiouyAEIOUY";
var nb =0;
calculeBtn.addEventListener("click",function(){
    let text = textInput.value;
    for (let i=0;i<text.length;i++){
        if(voyelle.includes(text[i])){
            nb++;
        }
    }
    resEl.innerHTML =`${nb} vowels in your text.`;
    nb=0;
});