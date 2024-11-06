document.getElementById("startbutton").onclick = function() {
  document.getElementById("startbutton").style.display = 'none';
  document.getElementById("quiz").style.display = 'block';
  showQuestion(0);
};



const questions = [
  { 
    question: "What engine is in a Nissan Skyline R32?",
    answers: ["J2Z", "V8", "RB26DETT", "M256 "],
    correct: 2
  }, 

  { 
    question: "What engine is in a Toyota Supra mk2?", 
    answers: ["J2Z", "2JZ", "AE9", "OPPO2"],
    correct: 1
  },

  { 
    question: "What is the most expensive car ever?",
    answers: ["Mercedes300 SLR Uhlenhaut Coupé", "Ferrari Daytona", "Buggati Chichiro", "Pagani Valenti"],
    correct: 0
  },

  { 
    question: "What is it called when a car uses the breaks to slide on the side?",
    answers: ["Biffing", "Japanese riding", "Drifting", "Powersliding"],
    correct: 2
  },

  { 
    question: "Which manufacturer made the first electric cars?",
    answers: ["Baker Motor", "Tesla", "XingHing", "TOGG"],
    correct: 0
  },

  { 
    question: "Who is credited with inventing the first practical automobile?",
    answers: ["John Doe", "Enzo Ferrari", "Karl Benz", "Manuel Emenike"],
    correct: 2
  },

  { 
    question: "What is the name of the luxury division of Toyota?",
    answers: ["Ford", "ToyotaS", "Cypra", "Lexus"],
    correct: 3
  },

  { 
    question: "In what year was the first electric car built?",
    answers: ["1890", "1990", "2004", "1830"],
    correct: 3
  },

  { 
    question: "Which car brand is known for its luxury SUV, the X5?",
    answers: ["Mercedes", "Toyota", "Audi", "BMW"],
    correct: 3
  },

  { 
    question: "How many cars are there in the world? (approx)",
    answers: ["1.475B", "1.15B", "900M", "950M"],
    correct: 0
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


