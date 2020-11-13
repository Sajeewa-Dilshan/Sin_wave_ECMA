/*var spanElement=document.createElement('span');
spanElement.setAttribute("class","char");

var stage=document.getElementById("stage");
stage.append(spanElement);*/

var text="Hi i am Sajeewa Dilshan, How are you?";
var txtArray=[];
console.log(text.length);


/*
for (i = 0; i <text.length; i++) {
   /!*  console.log(text[i]);*!/
    var spanElement=document.createElement('span');
    spanElement.setAttribute("class","char");
    spanElement.innerText=text[i];
    var stage=document.getElementById("stage");
    stage.append(spanElement);

    spanElement.style.left=((200*i/text.length))+"px";
    spanElement.style.bottom=100+100*Math.sin(i*2*Math.PI/text.length)+"px";
    console.log(Math.sin(Math.sin(i*2*Math.PI/text.length)));
}
*/

var j=0;
var k=0;

for (i = 0; i <text.length; i++) {
    /*  console.log(text[i]);*/
    var spanElement=document.createElement('span');
    spanElement.setAttribute("class","char");
    spanElement.innerText=text[i];
    var stage=document.getElementById("stage");
    stage.append(spanElement);

    spanElement.style.left=+((200*i/text.length))+"px";
    spanElement.style.bottom=+100+100*Math.sin((i+j)*2*Math.PI/text.length)+"px";



}
function animateTitle() {
    for (i = 0; i <text.length; i++) {
        var spanChild=stage.children[i];
        spanChild.style.left = (j*5)+((200 * i / text.length)) + "px";
        spanChild.style.bottom = +100 + 50 * Math.sin((i + j) * 2 * Math.PI / text.length) + "px";





    }
    j++;

    if(j==220){
        j=0;
    }


}

setInterval(animateTitle, 80);

