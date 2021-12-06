var i=0;
function checkButton(){
  if(document.getElementById('amazon').checked){
    window.location="amazon.html" ;
  }
  else if(document.getElementById('australia').checked){
    window.location="australia.html" ;
  }
  else if(document.getElementById('india').checked){
    window.location="india.html" ;
  }
  else{
    alert("Select a region");
  }
}

function increase(){
  i++;
  document.getElementById('numIncrease').innerHTML=i;
}
setInterval('increase()',1000);

function sendMail(){
  if(document.getElementById('email').value==""){
    alert("Please enter an email");
  }
  else{
  // Gabriel. (2015, July). How to send HTML form data to email. Retrieved on 3rd December, 2021. Website. https://stackoverflow.com/questions/31435012/how-to-send-html-form-data-by-email-to-an-email-id-by-using-javascript-without
    var link = "mailto:me@example.com"
         + "?cc=myCCaddress@example.com"
         + "&subject=" + escape("Queries/Comments")
         + "&body=" + escape(document.getElementById('email').value)  + escape("\n") + escape(document.getElementById('message').value);
    window.location.href=link;
    document.getElementById("message").value="Send another query";
  }
}
