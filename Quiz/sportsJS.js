document.getElementById("startbutton").onclick = function() {
  document.getElementById("startbutton").style.display = 'none';
  document.getElementById("quiz").style.display = 'block';
  showQuestion(0);
};



const questions = [
  { 
    question: "How tall was the tallest proffesional footballer?",
    answers: ["1.99", "2.10", "2,01", "2,03"],
    correct: 1
  }, 

  { 
    question: "Which country has the most olympic gold medals?", 
    answers: ["China", "America(US)", "Russia", "Belgium"],
    correct: 1
  },

  { 
    question: "Which sport features the terms home run and strikeout?",
    answers: ["Basketball", "Baseball", "Rugby", "Badminton"],
    correct: 1
  },

  { 
    question: "What is the name of the championship game in American football?",
    answers: ["World Cup", "Champions League", "Challengers", "Super Bowl"],
    correct: 3
  },

  { 
    question: "What sport is the most watched in The Netherlands",
    answers: ["Formula 1", "Icehockey", "Kickboxing", "Football"],
    correct: 3
  },

  { 
    question: "Which of these basketballers is nicknamed 'king'? ",
    answers: ["Kobe Bryant", "Michael Jordan", "Jeremy Lin", "Lebron James"],
    correct: 3
  },

  { 
    question: "What is the least popular sport?",
    answers: ["Badminton", "Pingpong", "Horse trick riding", "Ferret legging"],
    correct: 3
  },

  { 
    question: "Which football club has the most champions league trophies?",
    answers: ["Manchester United", "Chelsea", "Juventus", "Real Madrid"],
    correct: 3
  },

  { 
    question: "Who has the most olympic gold medals?",
    answers: ["Michael Phelps", "Lebron James", "Lieke Martens", "Larisa Latynina"],
    correct: 0
  },

  { 
    question: "Which football player is known as el chicharito",
    answers: ["James Rodriguez", "Karim Benzema", "Cole Palmer", "Javier Hernandez"],
    correct: 3
  }];

//score
 //? 
 let currentQuestion = 0;
 let score = 0; 

 
 function showQuestion(index) {
  document.getElementById("question").textContent = questions[index].question; 
  const buttons = document.querySelectorAll(".answerbutton");
  buttons.forEach((button, i) => {
    button.textContent = questions[index].answers[i];

    button.onclick = function() {
      checkAnswer(i);

    };
  });
 }


 //answers?!
 function checkAnswer(answerIndex) {
  let correct = questions[currentQuestion].correct;
  if (answerIndex == correct) {
    score++;
    
  } else {
    
  }
  currentQuestion++; 
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  }      else { 
    endGame();
  }
 }

//end
function endGame() {
  document.getElementById("quiz").style.display = 'none';
  document.getElementById("result").style.display = 'block';
  document.getElementById( "result").textContent ="You scored " + score + " out of " + questions.length;
}

//console log debug, S, Daan, I = 0 = binary


