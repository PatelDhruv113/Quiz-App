const questions = [
    {
        'que' : 'which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct':'a'
    },
    {
        'que': "What does HTML stand for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "a",
    },
    {
        'que': "What year was JavaScript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': "b",
    },
    {
        'que': "What does CSS stands for?",
         'a': "Hypertext Markup Language",
         'b': "Cascading Style Sheet",
         'c': "Jason Object Notation",
         'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "b",
    },
    {
        'que': "What is the correct syntax to write an HTML comment?",
        'a': "<!--comment -->",
        'b': "//comment",
        'c': "#comment",
        'd': "/*comment */",
        'correct': "a",
    },
    {
        'que':" The correct sequence of HTML tags for starting a webpage is?", 
        'a': "Head, Title, HTML, body",
        'b': "HTML, Body, Title, Head",
        'c': "HTML, Head, Title, Body",
        'd': "HTML, Head, Title, Body",
        'correct':"d",   
    },
    {
        'que':" Which of the following element is responsible for making the text bold in HTML?",
          'a' :"<pre>",
          'b' :"<a>",
          'c' :"<b>",
          'd' :"<br></br>",
          'correct':'c',
    },
    {
        'que':"Which of the following tag is used to insert a line-break in HTML?",
        'a': '<br>',
        'b': '<a>',
        'c': '<pre>',
        'd': '<b>',
        'correct': 'a',
    },
    {
        'que':"How to create an unordered list (a list with the list items in bullets) in HTML?",
        'a': '<ul>',
        'b':  '<ol>',
        'c':  '<li>',
        'd':  '<i>',
        'correct': 'a',
    },
    {
        
      'que':  " Which character is used to represent the closing of a tag in HTML? ",
      'a':   'none',
      'b':   '!',
      'c':   '/',
      'd':   '.',
      'correct': 'c',
    },
    {
      'que': " How to create a hyperlink in HTML?",
      'a':   '<a href = "www.javatpoint.com"> javaTpoint.com </a> ',
      'b':   ' <a url = "www.javatpoint.com" javaTpoint.com /a>',
      'c':   '<a link = "www.javatpoint.com"> javaTpoint.com </a> ',
      'd':   ' <a> www.javatpoint.com <javaTpoint.com /a>x',
      'correct': ' a',       
    },
    {
     'que': "How to create an ordered list (a list with the list items in numbers) in HTML? ",
     'a':   '<ul> ',
     'b':   '<ol> ',
     'c':   '<li> ',
     'd':   ' <i>',
     'correct': 'b ',
    },{
      'que': " Which of the following element is responsible for making the text italic in HTML?",
     'a':   '<i> ',
     'b':   ' <italic>',
     'c':   ' <it>',
     'd':   ' <pre>',
     'correct': 'a',
    },
    {
     'que': " How to insert an image in HTML? ",
     'a':   '<img href = "jtp.png" /> ',
     'b':   ' <img url = "jtp.png" />',
     'c':   ' <img link = "jtp.png" />',
     'd':   ' <img src = "jtp.png" />',
     'correct': 'd',
    },
    {
        'que': " How to add a background color in HTML? ",
     'a':   '<marquee bg color: "red"> ',
     'b':   '<marquee bg-color = "red"> ',
     'c':   ' <marquee bgcolor = "red">',
     'd':   ' <marquee color = "red">',
     'correct': 'c',
    },
    {
     'que': "  <input> is -",
     'a':   ' a format tag.',
     'b':   ' an empty tag.',
     'c':   ' All of the above',
     'd':   ' None of the above',
     'correct': 'a',
    },
    {
       'que': "Which of the following tag is used to make the underlined text?",
     'a':   '<i> ',
     'b':   '<ul>',
     'c':   '<u>',
     'd':   '<pre>',
     'correct': 'b',
    },
    {
       'que': " How to create a checkbox in HTML? ",
     'a':   '<input type = "checkbox"> ',
     'b':   ' <input type = "button">',
     'c':   '<checkbox> ',
     'd':   ' <input type = "check">',
     'correct': 'a ', 
    },
    {    
     'que': "  Which of the following tag is used to define options in a drop-down selection list?",
     'a':   ' <select>',
     'b':   ' <list>',
     'c':   ' <dropdown>',
     'd':   ' <option>',
     'correct': 'd',
    },{
     'que': "  HTML tags are enclosed in-",
     'a':   '# and # ',
     'b':   ' { and }',
     'c':   '! and ?',
     'd':   '< and >',
     'correct': 'd',
    },
    {
     'que': "Which of the following tag is used to add rows in the table? ",
     'a':   '<td> and </td> ',
     'b':   '<th> and </th> ',
     'c':   '<tr> and </tr> ',
     'd':   'None of the above ',
     'correct': 'c',
    },
    {
        

     'que': "The <hr> tag in HTML is used for - ",
     'a':   'new line ',
     'b':   'vertical ruler',
     'c':   'new paragraph',
     'd':   ' horizontal ruler',
     'correct': 'd',
    },
    {
     'que': "  Which of the following attribute is used to provide a unique name to an element?",
     'a':   'class ',
     'b':   ' id',
     'c':   ' type',
     'd':   'none of the above ',
     'correct': 'b ',
    },
    {
        'que': "Which type of JavaScript language is ___ ",
     'a':   'Object-Oriented ',
     'b':   'Object-Based ',
     'c':   ' Assembly-language',
     'd':   'High-level ',
     'correct': 'b ',
    },
    {
        'que': "Which one of the following also known as Conditional Expression: ",
     'a':   ' Alternative to if-else',
     'b':   ' Switch statement',
     'c':   'If-then-else statement ',
     'd':   'immediate if ',
     'correct': 'd',
    },
    {
     'que': "In JavaScript, what is a block of statement? ",
     'a':   ' Conditional block',
     'b':   ' block that combines a number of statements into a single compound statement',
     'c':   'both conditional block and a single statement ',
     'd':   ' block that contains a single statement',
     'correct': 'b',
    },
    {
        'que': " When interpreter encounters an empty statements, what it will do: ",
     'a':   'Shows a warning ',
     'b':   'Prompts to complete the statement',
     'c':   'Throws an error ',
     'd':   'Ignores the statements ',
     'correct': 'd',
    },
    {
       'que': " The {function} and {var} are known as:",
     'a':   ' Keywords',
     'b':   'Data types ',
     'c':   'Declaration statements ',
     'd':   'Prototypes',
     'correct': 'c ',
    },
    {
        'que': " Which of the following variables takes precedence over the others if the names are the same? ",
     'a':   'Global variable ',
     'b':   'The local element ',
     'c':   'The two of the above ',
     'd':   ' None of the above',
     'correct': 'b',
    },
    {
        'que': "Which one of the following is the correct way for calling the JavaScript code? ",
     'a':   ' Preprocessor',
     'b':   'Triggering Event ',
     'c':   'RMI ',
     'd':   ' Function/Method',
     'correct': 'd',
    },
    {
        'que': "  When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
     'a':   'Prints an exception error ',
     'b':   'Prints an overflow error ',
     'c':   'Displays "Infinity" ',
     'd':   'Prints the value as such ',
     'correct': 'c ',
    },
    {
        'que': " In the JavaScript, which one of the following is not considered as an error: ",
     'a':   'Syntax error ',
     'b':   ' Missing of semicolons',
     'c':   'Division by zero ',
     'd':   'Missing of Bracket ',
     'correct': 'c ',
    },
    {
        'que': " Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
     'a':   ' toExponential()',
     'b':   ' toFixed()',
     'c':   'toPrecision() ',
     'd':   ' toLocaleString()',
     'correct': ' b',
    },
    {
        'que': " Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
        'a':   'slice() ',
        'b':   'split() ',
        'c':   'substr() ',
        'd':   ' search()',
        'correct': 'c',
    },
    {
        'que': " In JavaScript the x===y statement implies that: ",
        'a':   'Both x and y are equal in value, type and reference address as well. ',
        'b':   ' Both are x and y are equal in value only.',
        'c':   'Both are equal in the value and data type. ',
        'd':   'Both are not same at all. ',
        'correct': 'c',
    },
    {
        'que': "Choose the correct snippet from the following to check if the variable {a} is not equal the {NULL}: ",
        'a':   ' if(a!==null)',
        'b':   ' if (a!)',
        'c':   ' if(a!null)',
        'd':   ' if(a!=null)if(a!=null)',
        'correct': 'a',
    },
    {
        'que': " Suppose we have a text {human} that we want to convert into string without using the {new} operator. Which is the correct way from the following to do so:",
        'a':   'toString() ',
        'b':   'String(human) ',
        'c':   ' String newvariable="human"',
        'd':   'Both human.toString() and String(human) ',
        'correct': 'd ',
    },
    {
        'que': " In JavaScript, what will be used for calling the function definition expression",
        'a':   'Function prototype ',
        'b':   'Function literal ',
        'c':   'Function calling ',
        'd':   'Function declaration',
        'correct': 'b',
    },
    {
        'que': "Which of the following one is the property of the primary expression:",
        'a':   'Contains only keywords ',
        'b':   'basic expressions containing all necessary function',
        'c':   'contains variable references alone ',
        'd':   'stand-alone expressions ',
        'correct': 'd ',
    },
    {
        'que': " The {new Point(3,2)}, is a kind of _______ expression ",
        'a':   'Object Creation Expression ',
        'b':   ' Primary Expression',
        'c':   'Invocation Expression ',
        'd':   'Constructor Calling Expression ',
        'correct': 'a',
    },
    //40
    {
        'que': " Which of the following is the correct syntax for referring the external style sheet?",
        'a':   '<style src = example.css> ',
        'b':   '<style src = "example.css" > ',
        'c':   '<stylesheet> example.css </stylesheet> ',
        'd':   ' <link rel="stylesheet" type="text/css" href="example.css">',
        'correct': 'd',
    },
    {
        'que': " The property in CSS used to change the background color of an element is - ",
        'a':   'bgcolor ',
        'b':   'color ',
        'c':   'background-color ',
        'd':   'All of the above ',
        'correct': 'c',
    },
    {
        'que': " The CSS property used to control the element's font-size is ",
        'a':   'text-style',
        'b':   ' text-size',
        'c':   'font-size ',
        'd':   'None of the above ',
        'correct': 'c',
    },
    {
        'que': " The HTML attribute used to define the inline styles is ",
        'a':   'style ',
        'b':   ' styles',
        'c':   ' class',
        'd':   'None of the above ',
        'correct': 'a',
    },
    {
        'que': " The HTML attribute used to define the internal stylesheet is - ",
        'a':   '<style> ',
        'b':   ' style',
        'c':   '<link>',
        'd':   '<script>',
        'correct': 'a',
    },
    {
        'que': "Which of the following CSS property is used to set the background image of an element?",
        'a':   'background-attachment',
        'b':   'background-image',
        'c':   'background-color',
        'd':   'None of the above',
        'correct': 'b',
    },
    {
        'que': "Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
        'a':   'p {background-color : yellow;} ',
        'b':   'p {background-color : #yellow;}',
        'c':   'all {background-color : yellow;}',
        'd':   'all p {background-color : #yellow',
        'correct': 'a',
    },
    {
        'que': "Which of the following property is used as the shorthand property for the padding properties?",
        'a':   'padding-left ',
        'b':   'padding-right ',
        'c':   'padding',
        'd':   'All of the above ',
        'correct': 'c',
    },
    {
        'que': "The CSS property used to make the text bold is  ",
        'a':   'font-weight : bold',
        'b':   'weight: bold',
        'c':   'font: bold',
        'd':   'style: bold',
        'correct': 'a',
    },
    {
        'que': " Are the negative values allowed in padding property?",
        'a':   ' Yes',
        'b':   'No ',
        'c':   "Can't Say",
        'd':   'May be',
        'correct': 'b',
    }
];

 const shuffleArray = (array)=>{
      for (let i = 0; i < array.length; i++) {
        const j = Math.floor(Math.random() * (i+1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
 }
 
 shuffleArray(questions)
 const selectedQuestions = questions.slice(0, 10)


let index = 0;
let total = selectedQuestions.length;
let right = 0,
    wrong  = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = () => {
    if(index == total){
        return endQuiz()
    }
      reset();  
      const data = selectedQuestions[index];
      quesBox.innerText = ` ${index+1}) ${data.que}`
      
      optionInputs[0].nextElementSibling.innerText = data.a;
      optionInputs[1].nextElementSibling.innerText = data.b;
      optionInputs[2].nextElementSibling.innerText = data.c;
      optionInputs[3].nextElementSibling.innerText = data.d
    }    

const submitQuiz = () =>{
      let data = selectedQuestions[index];
      let ans = getAnswer()
      
      if(ans === data.correct){
         right++;
      }else{
         wrong++;
      }
      index++;
      loadQuestion();
      return;
}

const getAnswer = (answer) =>{
    // let answer;
      optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer =  input.value
            }
        }
      )
      return answer;
}
const reset = () =>{
    optionInputs.forEach(
        (input) =>{
            input.checked = false
        }
    )
}

const endQuiz = () =>{
     document.getElementById("box").innerHTML = `
     <div style="text-align:center">
        <h1>Web Devlopment</h1>
        <h3> Thank you Playing the  Quiz</h3>
        <h2>${right} / ${total} are correct  </h2>
     </div>
      `
}
// //initial call
loadQuestion()




// console.log(Math.random() *10)
// console.log(Math.floor(Math.random() * 50))
// console.log(Math.floor(Math.random() *10)+1)