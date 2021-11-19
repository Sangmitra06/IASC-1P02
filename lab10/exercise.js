var a=Number();
function calculate(a){
  var num1=Number(document.getElementById("firstNum").value);
  var num2=Number(document.getElementById("secondNum").value);
  if (a==0){
    var num3=num1+num2;
    document.getElementById("output").innerHTML=num3;
  }
  if (a==1){
    var num3=num1-num2;
    document.getElementById("output").innerHTML=num3;
  }
  if (a==2){
    var num3=num1*num2;
    document.getElementById("output").innerHTML=num3;
  }
  if (a==3){
    var num3=num1/num2;
    document.getElementById("output").innerHTML=num3;
  }
}
