var age=Number(prompt("What is your age?"));
var curDate=new Date();
var curYear=curDate.getFullYear();
var birthYear=curYear-age;
document.write(birthYear);
