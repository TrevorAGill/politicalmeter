$(document).ready(function(){

  $("#meterform").submit(function(event) {
  var question1 = parseInt($("input:radio[name=environment]:checked").val());
  var question2 = parseInt($("input:radio[name=taxes]:checked").val());
  var question3 = parseInt($("input:radio[name=guns]:checked").val());

  var result = question1 + question2 + question3;

  if(result <=5 && result !==0){
    alert("You are a conservative!");
  } else if( result >5 && result <25 && result !==0){
    alert("You are a moderate!");
  } else if( result >=25 && result !==30){
    alert("You are a liberal!");
  } else if(result === 0) {
    alert("Congratulations, you got your president!");
  } else if(result === 30) {
    alert("Better luck next time, hippie!");
  } else{
    alert("Answer the questions!");
  }


  event.preventDefault();
  });
});
