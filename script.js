




function validation(){
  var uemail=document.getElementById("email").value;
  var upass=document.getElementById("pass").value;
  if (uemail==""){
    alert("Enter the email");
    return;
  }
  if(upass==""){
    alert("Enter the password");
    return ;
  }
  for(i = 0; i < users.length; i++){

    if(uemail == users[i].username && upass == users[i].password){
      ses = uemail ;
      localStorage.setItem("session", uemail);
      window.location = "main.html";
      return;
    }
  }
  alert("invalid");
}




$(document).ready(function(){

  

  var question_no = 1;
  for(q=0; q<question.length; q++){

    
    $("#question_group").append('<a class="btn btn-secondary" href="#'+q+'" id="'+question_no+'q">'+question_no+'</a>')
    $("#main").append('<div class="mt-4" id="'+q+'">');
    $("#"+q+"").append('<h5 class="card-title">'+question_no+'.'+question[q].title+'</h5>');
    $("#"+q+"").append('<div class="ml-4" id="'+q+'a">');
    for(o=0; o<question[q].options.length; o++){
        $("#"+q+"a").append('<div class="custom-control custom-radio mb-1" id="'+q+'-'+o+'b">');
        $("#"+q+"-"+o+"b").append('<input type="radio" data-qno="'+q+'" value='+o+' id="customRadio'+q+'a'+o+'" name="customRadio'+q+'a" class="custom-control-input">');
        $("#"+q+"-"+o+"b").append('<label class="custom-control-label" for="customRadio'+q+'a'+o+'">'+question[q].options[o]+'</label>');
    }
    question_no++;
  }
});

function showresult(){
  window.location = "result.html";
  localStorage.removeItem("session");
}


var user_answers = [];

function answer_manipulation(){
  
for(i = 0; i<question.length; i++ ){

  user_answers.push(
  {
    index: $("input:radio[name=customRadio"+i+"a]:checked").length == 0 ? "kiruthiga_passcode" : document.querySelector('input[name="customRadio'+i+'a"]:checked').value,
    
    
    q_no: $("input:radio[name=customRadio"+i+"a]:checked").length == 0 ? "0" : document.querySelector('input[name="customRadio'+i+'a"]:checked').getAttribute("data-qno"),
    val: function(){
      return question[this.q_no].options[this.index];
      //question[0].options[2]
    }
  
  });
}


calculate_result();

}
function calculate_result(){

  var result= 0;

for(i = 0; i < question.length; i++){

  if(user_answers[i].val() == question[i].answer ){

    console.log(i);

    ++result;
  }
}

localStorage.setItem("marks",result);
  console.log("result:"+result);
  showresult();
}