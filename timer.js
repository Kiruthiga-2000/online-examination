var m = duration_of_test;
var rev_total= 1;
var mi = m * 60;
var total = m * 60
var count = m * 60;
var counter = setInterval(timer, 1000);
function timer() {
    
   
    if(rev_total !== mi+1){
        percent = rev_total/total * 100;
    }
    
    
    document.getElementById("progress").style.width = percent+"%";
    rev_total++;
    count = count - 1;
    if (count == -1) {
        clearInterval(counter);
        answer_manipulation();
        return;
    }

    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 60;

    document.getElementById("timer").innerHTML ="Time Remaining:"+ hours + ":" + minutes + ":" + seconds;

    
   
}


