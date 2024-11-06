document.getElementById("startbutton").onclick = function() {
  document.getElementById("startbutton").style.display = 'none';
  document.getElementById("quiz").style.display = 'block';
  showQuestion(0);
};



const questions = [
  { 
    question: "The United States bought Alaska from which country?",
    answers: ["Soviet Union", "Ukraine", "Russia", "Turkiye"],
    correct: 2
  }, 

  { 
    question: "What empire ruled the most of the world?", 
    answers: ["British", "Ottoman", "Russian", "Mongol"],
    correct: 0
  },

  { 
    question: "How much (in %) of the world did the biggest empire rule over?",
    answers: ["15%", "9.20%", "22%", "26.35%"],
    correct: 3
  },

  { 
    question: "Who was the first Roman Emperor?",
    answers: ["Marcus Aurelius", "Plato", "Augustus", "September"],
    correct: 2
  },

  { 
    question: "Which roman emporor was considered the greatest of them all?",
    answers: ["Marcus Aurelius", "Julius Caesar", "Augusutus", "Socrates"],
    correct: 0
  },

  { 
    question: "Who founded the Mongol Empire?",
    answers: ["Mustafa Kemal", "Gengish Kahn", "Genghis Khan", "Xing Loa"],
    correct: 2
  },

  { 
    question: "Who was the first president of the United States?",
    answers: ["Barrack Obama", "John F. Kennedy", "Benjamin Franklin", "George Washington"],
    correct: 3
  },

  { 
    question: "What year did the berlin wall fall?",
    answers: ["1999", "1992", "1988", "1989"],
    correct: 3
  },

  { 
    question: "What year did the german nazies enter The Netherlands?",
    answers: ["1939", "1941", "1942", "1940"],
    correct: 3
  },

  { 
    question: "What year did world war I begin",
    answers: ["1914", "1912", "1913", "1910"],
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


