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
function backHome(){
  window.location="Home_page.html"
}
function increase(){
  i++;
  document.getElementById('numIncrease').innerHTML=i;
}
setInterval('increase()',1000);
function confirm(){
  if(document.getElementById('email').value==""){
    alert("Please enter an email");
  }
  else{
    document.getElementById('message').value="Want to send another query?";
    alert("Sent!");
  }
}
