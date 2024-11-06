document.getElementById("startbutton").onclick = function() {
  document.getElementById("startbutton").style.display = 'none';
  document.getElementById("quiz").style.display = 'block';
  showQuestion(0);
};



const questions = [
  { 
    question: "Which year was the first Call of Duty released?",
    answers: ["2003", "1999", "2002", "2001"],
    correct: 0
  }, 

  { 
    question: "What game has sold the most copies ever?", 
    answers: ["GTA5", "Minecraft", "Cuphead", "World of Warcraft"],
    correct: 1
  },

  { 
    question: "What is the highest level a player can reach in Pac-Man?",
    answers: ["256", "666", "1000", "999"],
    correct: 0
  },

  { 
    question: "What was the first console game that allowed the game to be saved?",
    answers: ["Final Fantasy", "GTA4", "Zelda", "Mario Kart"],
    correct: 2
  },

  { 
    question: "What is thought to be the first video game ever?",
    answers: ["Fortnite", "Pac-Man", "Bomb seeker", "Pong"],
    correct: 3
  },

  { 
    question: "What is the name of the sidekick of Mario and Luigi? ",
    answers: ["Bowser", "Peach", "Yoshi", "Donkey Kong"],
    correct: 2
  },

  { 
    question: "What view does the World Health Organization have about gaming?",
    answers: ["Disorder", "Sickness", "Healthy habit", "Poisonous"],
    correct: 0
  },

  { 
    question: "Did someone die from literally gaming too much in one sitting?",
    answers: ["No", "No", "Yes", "No"],
    correct: 2
  },

  { 
    question: "For how much $ does the most expensive pokemon card sell for?",
    answers: ["5.275.000", "4.000.000", "6.000.000", "4.250.000"],
    correct: 0
  },

  { 
    question: "Whats the most expensive game ever? (production)",
    answers: ["Fornite", "God of War", "Pokemon Pikachu", "GTA5"],
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


