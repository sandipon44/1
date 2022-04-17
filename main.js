var display =document.querySelector("#disply");
var input =document.querySelector("#input");
var first_color =document.querySelector("#first_color");
var second_color=document.querySelector("#second_color");
var second_color=document.querySelector("#second_color");
var final_color=document.querySelector("#final_color");
var select=document.querySelector("#select");
var body=document.querySelector("body");
var sss=document.querySelector(".sss");
var hi=document.querySelector("#hi");




first_color.addEventListener("input",color);
second_color.addEventListener("input",color);
select.addEventListener("input",color);


function color() {
    display.style.background ="linear-gradient("+  select.value +   "," + first_color.value + ", " + second_color.value + ")";
   
    hi.innerHTML="background: " + display.style.background;
    input.style.background ="linear-gradient("+  select.value +   "," + first_color.value + ", " + second_color.value + ")";
    sss.style.background ="linear-gradient("+  select.value +   "," + first_color.value + ", " + second_color.value + ")";
    
};












function copyText(htmlElement) {
    if (!htmlElement) {
        return;
    }
    let elementText=htmlElement.innerText;
    let input =document.createElement('input');
    input.setAttribute('value',elementText);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.parentNode.removeChild(input)
  }
  
  
  document.querySelector("#btn1").onclick =
    function (e) {
        e.preventDefault()
        copyText(document.querySelector("#hi"));
        document.querySelector("#btn1").innerHTML="copied";
    }
  

window.addEventListener("change",function () {
    document.querySelector(".btn").innerHTML=`<i class="fa-solid fa-copy"></i> copy`;
})

