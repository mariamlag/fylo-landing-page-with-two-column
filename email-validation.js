

function validateEmail(inputText){
  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
      alert(valid);
      document.form1.Email.focus()
      return true;
    }
    else{
      document.form1.Email.focus()
      document.getElementById("fail-text").style.display = "flex";
      document.getElementById("text").style.borderColor = "red";
      return false;
    }
}



