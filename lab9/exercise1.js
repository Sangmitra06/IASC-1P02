var start=new Date();
function stopTime(){
  var stop=new Date();
  var diff=Number((stop.getTime()-start.getTime())/1000);
  alert("You have been on the page for: " +diff +" seconds");
}
