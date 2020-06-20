
var users = [
    {
      username: "kiruthiga@gmail.com",
      password: "9012"
    },
     {
      username: "kiru@gmail.com",
      password: "1234"
    },
     {
      username: "dhana@gmail.com",
      password: "5678"
    },
     {
      username: "lakshmi@gmail.com",
      password: "2345"
    },
     {
      username: "admin@gmail.com",
      password: "6789"
    },
     {
      username: "test@gmail.com",
      password: "0123"
    }
  ];
  
var test_info =[
    {
        test_name: "Web Development",
        test_duration: "15 minutes",
        Passing_marks: "8",
        no_questions: "20",
    }
];

var duration_of_test = 15; // Enter in Minutes





var question = [
    {
        title: "In which HTML element do we put the javascript?",
        options: ["&lt;head&gt;","&ltbody&gt;","&ltscript&gt;","&ltjs&gt;"],
        answer: "&ltscript&gt;"
    },
    {
        title: "What is the correct JavaScript syntax to change the content of the HTML element below?&lt;p id=\"demo\"&gt;This is a demonstration.&lt;/p&gt;",
        options: ["document.getElementById(\"demo\").inner HTML=\"Hello World!\";","#demo.innerHTML=\"Hello World!\";","demo.getElement=\"hello world\";","document.getElementById(\"p\").inner HTML=\"Hello World!\";"],
        answer: "document.getElementById(\"demo\").inner HTML=\"Hello World!\";"
    },
    {
        title: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        options: ["script&lt;src=\"hjddg\"&gt;","script&lt;href=\"hjddg\"&gt;","script&lt;src=\'\'&gt;","script&lt;name=\"hjddg\"&gt;"],
        answer: "script&lt;src=\"hjddg\"&gt;"
    },
    {   
        title: "Which of the following function of String object returns the calling string value converted to upper case?",
        options: ["toLocaleUpperCase()"," toUpperCase()","toString()","substring()"],           
        answer: " toUpperCase()"
    },
    {
        title: "How do you create a function in JavaScript?",
        options: ["function=myFunction(){}","function myFunction(){}","function:myFunction()"],
        answer: "function myFunction(){}"
    },
    {
        title: "Which of the following is the correct syntax to create a cookie using JavaScript? ",
        options: ["document.cookie = 'key1 = value1; key2 = value2; expires = date';","browser.cookie = 'key1 = value1; key2 = value2; expires = date';","navigator.cookie = 'key1 = value1; key2 = value2; expires = date';","window.cookie = 'key1 = value1; key2 = value2; expires = date';"],
        answer: "document.cookie = 'key1 = value1; key2 = value2; expires = date';"
    },
    {
        title: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        options: ["if(i==5)","if(i&lt;=5)","if(i=5)","if(i!=5)"],
        answer: "if(i!=5)"
    },
    {
        title: "Which of the following function of String object creates an HTML anchor that is used as a hypertext target?",
        options: ["anchor()","big()","blink()","link()"],
        answer: "anchor()"
    },
    {
        title: "How can you add a commentline in js",
        options: ["// this is a script","&lt;!-- this is comment--&gt;","'comment line'","/'comment line'/"],
        answer: "// this is a script"
    },
    {
        title: "What is the correct way to write a JavaScript array? ",
        options: ["var color=(1:\"red\",2:\"green\",3:\"yellow\")","var color=1[red]=2[green]=3[yellow]","var color=\"red\",\"green\",\"yellow\"","var color=[\"red\",\"green\",\"yellow\"]"],
        answer: "var color=[\"red\",\"green\",\"yellow\"]"
    },
    {
        title: "How do you round the number 7.25, to the nearest integer?",
        options: ["Math.rnd(7.25)","Math.round(7.25)","rnd(7.25)","round(7.25)"],
        answer: "Math.round(7.25)"
    },
    {
        title: "Which of the following function of Array object returns true if every element in this array satisfies the provided testing function?",
        options: ["concat()","every()","push()","some()"],
        answer: "every()"
    },
    {
        title: "What is the correct JavaScript syntax for opening a new window called \"w2\" ? ",
        options: ["w2 = windows.open(\"www.onlinequiz\");","w2 = windows.new(\"www.onlinequiz\");"],
        answer: "w2 = windows.open(\"www.onlinequiz\");"
    },
    {
        title: "JavaScript is the same as Java.",
        options: ["True","false"],
        answer: "false"
    },
    {
        title: "Which of the following type of variable takes precedence over other if names are same?",
        options: ["global variable","local variable","Both of the above.","None of the above."],
        answer: "local variable"
    },
    {
        title: "Which event occurs when the user clicks on an HTML element ",
        options: ["onmouseclick","onclick","onmouseover","onchange"],
        answer: "onclick"
    },
    {
        title: "Which of the following function of String object creates a string to blink as if it were in a &lt;blink&gt; tag?",
        options: ["anchor()","big()","blink()","some()"],
        answer: "blink()"
    },
    {
        title: "Which of the following is an advantage of using JavaScript? ",
        options: ["Less server interaction","Immediate feedback to the visitors","Increased interactivity","All of the above"],
        answer: "All of the above"
    },
    
    {
        title: "Which of the following function of Array object removes the first element from an array and returns that element?",
        options: ["reverse()","shift()","slice()","some()"],
        answer: "shift()"
    },
    {
        title: "Which of the following function of String object is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?",
        options: ["concat()","match()","replace()","search()"],
        answer: "replace()"
    },
];

