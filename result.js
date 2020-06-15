
var marks = localStorage.getItem("marks")
document.getElementById("marks").innerHTML = marks ;

if(marks > 5){

    document.getElementById("res").innerHTML = "pass";
    document.getElementById("res").classList.add("badge-success");
  
  }
  else{
    document.getElementById("res").innerHTML = "fail";
    document.getElementById("res").classList.add("badge-danger");
  }
  
   
  document.getElementById("wrong").innerHTML = question.length - marks;
  document.getElementById("pass_score").innerHTML = 5 ; //change later dynamicly

  document.getElementById("percentage").innerHTML = marks/question.length * 100 + "%" ;
  document.getElementById("progress_percentage").innerHTML = marks/question.length * 100 + "%" ;
  document.getElementById("progress_fill").classList.add("p"+marks/question.length * 100);

  if(marks < 5){
    document.getElementById("remarks").innerHTML = "Poor" ;
  }
  if(marks >5 && marks < 10){
    document.getElementById("remarks").innerHTML = "Average" ;
  }
  if(marks >10 && marks < 15){
    document.getElementById("remarks").innerHTML = "Good" ;
  }
  if(marks >15 && marks <= 20){
    document.getElementById("remarks").innerHTML = "Very Good" ;
  }