

var quizQuestions = [
{Question:"Who is the Current President of America?",
Answer1: "Donald Trump", Answer2: "Nancy Pelosi", Answer3: "Joseph Biden", Answer4:"Kamala Harris",
Correct: "Answer3"},

{Question:"What does HTML stand for?", Answer1:"Hyper Text Markup Language",
Answer2:"Hyper Text Mockup Learning", Answer3: "High Tempo Money Language",
Answer4:"Huge Motorboard Term Listing", Correct:"Answer1"},

{Question:"------ is considered an Object Oriented Programming Language?", Answer1:"Fortran", Answer2:"Ada", Answer3: "Pascal",
Answer4: "Java", Correct: "Answer4"},

{Question: "What does CSS stand for?",Answer1: "Cascade Store Set", Answer2: "Cheat Shit Style",
Answer3:  "Cascading Style Sheet", Answer4: "Cascading Style Set", Correct: "Answer3"},

{Question: "Who Painted Monalisa?", Answer1: "Leonardo Da Vinci", Answer2: "Picasso", Answer3: "Michelangelo", Answer4: "Pablo Picasso", Correct: "Answer1"},

{Question: "What Temperature does Water Boil At?", Answer1: "98C", Answer2: "100C", Answer3: "150C", Answer4: "120C", Correct:"Answer2"},

{Question: "When was the First World War fought?", Answer1: "1945", Answer2: "1914", Answer3:"1910", Answer4: "1947", Correct: "Answer2"},

{Question: "How Many Bones are there in the Human Body?", Answer1: "222", Answer2:"206", Answer3: "186", Answer4:"306", Correct: "Answer2"},

{Question: "What Vitamin is Present in Citrus Fruits?", Answer1: "Vitamin A", Answer2: "Vitamin C", Answer3: "Viatmin D", Answer4: "Vitamin E", Correct:"Answer2"},

{Question: "Which Planet is Closest to the Sun?", Answer1:"Mercury", Answer2: "Jupiter", Answer3: "Saturn", Answer4: "Mars", Correct:"Answer1"},

{Question: "Mc Donald's is the Fast food Company Founded In?", Answer1: "China", Answer2: "Australia", Answer3: "USA", Answer4: "Brazil", Correct: "Answer3"},

{Question: " The Boy is 'Playing' is an Example of Which Part of Speech?", Answer1:"Verb", Answer2: "Noun", Answer3: "Adjective", Answer4: "Adverb", Correct: "Answer1"}

];

 var selection = document.querySelectorAll('.answer');
 var quiz1 = document.getElementById("quiz");
 var text = document.getElementById('golf');
 var a1El = document.getElementById('A1');
 var b1El = document.getElementById('B1');
 var c1El = document.getElementById('C1');
 var d1El = document.getElementById('D1');
 var submit = document.getElementById('butt');
 var previous = document.getElementById('butt1');



  let currentQuiz = 0;
  let totalScore = 0;
  loadQuiz();
  // score();



  function loadQuiz(){
      deSelect();
    var currentQuizData = quizQuestions[currentQuiz];
    text.textContent = currentQuizData.Question;
    a1El.textContent = currentQuizData.Answer1;
    b1El.textContent = currentQuizData.Answer2;
    c1El.textContent = currentQuizData.Answer3;
    d1El.textContent = currentQuizData.Answer4;
  }




       function getSelected(){

 let userAnswer = undefined;

   selection.forEach((selection) => {
      if (selection.checked){
        userAnswer = selection.id;
      }

   });
   return userAnswer;
  }

    function deSelect(){


      selection.forEach((selection) => {
         selection.checked = false;
       });

    }

   submit.addEventListener('click', ()=> {
     var userAnswer = getSelected();
     console.log(userAnswer);

          // if (userAnswer){
            if(userAnswer == quizQuestions[currentQuiz].Correct){
              totalScore++;
            }
          currentQuiz++;

          if (currentQuiz < quizQuestions.length){
               loadQuiz();

             // score();
           } else {
           quiz1.innerHTML =  `<h4>You got ${totalScore}  out of  ${quizQuestions.length} </h4> <button id = "but" onclick = "location.reload()">Reload</button>`



           }


   });
  previous.addEventListener('click', ()=> {
      history.back(-1);


});
