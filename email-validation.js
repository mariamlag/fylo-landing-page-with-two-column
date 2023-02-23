
 /*

function validateEmail(inputText){
  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
      alert(valid);
      return true;
    }
    else{
      document.getElementById("fail-text").style.display = "flex";
      document.getElementById("text").style.borderColor = "red";
      return false;
    }
}*/


debugger
const inputText1 = document.getElementById("text");
const error1 = document.getElementById("fail-text");

const inputText2 = document.getElementById("textt");
const error2 = document.getElementById("fail-textt");


const button1 = document.getElementById("button");
const button2 = document.getElementById("buttonn");

/*button1.onclick = validateEmail(inputText1, error1);  
button2.onclick = validateEmail(inputText2, error2); */

error1.style.display = "none";
inputText1.style.borderColor = "black";
error2.style.display = "none";
inputText2.style.borderColor = "black";

button1.addEventListener("click", validateEmail(inputText1, error1));
button2.addEventListener("click", validateEmail(inputText2, error2));


function validateEmail(inputText, errorr){
  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
      alert(valid);
      errorr.style.display = "none";
      inputText.style.borderColor = "black";
      return true;
    }
    else{
      inputText.style.borderColor = "red";
      errorr.style.display = "flex";
      return false;
    }
}


