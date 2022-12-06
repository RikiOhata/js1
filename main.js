/*global $*/
$(document).ready(function(){
  
  let ms = 0;
  let sec = 0;
  let min = 0;
  let hour = 0;
  let timer = 0;
  
  function count(){
    $("#ms").html(ms);
    $("#sec").html(sec);
    $("#min").html(min);
    $("#hour").html(hour);

    ms++;
    if(ms == 10){
      ms = 0;
      sec++;
    };
    if(sec == 60){
      sec = 0;
      min++;
    };
    if(min == 60){
      min = 0;
      hour++;
    };
  };
    
  /*start*/
  $("#start").click(function(){
    
    $("#start").prop("disabled",true);
    $("#stop").prop("disabled",false);
    $("#reset").prop("disabled",false);
    
    timer = setInterval(count,100);

  });
  
  /*stop*/
  $("#stop").click(function(){
    
    $("#start").prop("disabled",false);
    $("#stop").prop("disabled",true);
    $("#reset").prop("disabled",false);
    
    clearInterval(timer);

  });
  
  /*reset*/
  $("#reset").click(function(){
    
    $("#start").prop("disabled",false);
    $("#stop").prop("disabled",true);
    $("#reset").prop("disabled",true);
    
    clearInterval(timer);

    ms = 0;
    sec = 0;
    min = 0;
    hour = 0;
    
    $("#ms").html(ms);
    $("#sec").html(sec);
    $("#min").html(min);
    $("#hour").html(hour);

  });
  
});