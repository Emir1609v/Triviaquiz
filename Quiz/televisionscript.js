document.getElementById("startbutton").onclick = function() {
  document.getElementById("startbutton").style.display = 'none';
  document.getElementById("quiz").style.display = 'block';
  showQuestion(0);
};



const questions = [
  { 
    question: "What does Tom Holland play in the marvel universe?",
    answers: ["Spiderman", "Hulk", "Black Widow", "Antman"],
    correct: 0
  }, 

  { 
    question: "What marvel movie is the most watched one?", 
    answers: ["Black panther", "Avengers Endgame", "Spiderman 1", "Multiverse of madness"],
    correct: 1
  },

  { 
    question: "What year did the first cinema movie air?",
    answers: ["1878", "1989", "1977", "1992"],
    correct: 0
  },

  { 
    question: "Which movie is considered the biggest flop?",
    answers: ["Mars Needs Moms", "Eddie deddie", "Adventure johnny", "Live action one piece"],
    correct: 0
  },

  { 
    question: "Which actor has the most oscars?",
    answers: ["Vin Diesel", "Leonardio DiCaprio", "Ryan Reynolds", "Katherine Hepburn"],
    correct: 3
  },

  { 
    question: "Who drives a Nissan Skyline in the Fast&Furious?",
    answers: ["Hobbs", "Vin Diesel", "Paul Walker", "Letta"],
    correct: 2
  },

  { 
    question: "What is the most popular saying in the Fast&Furious movies?",
    answers: ["Bigass forehead", "Family", "See you again", "Friends"],
    correct: 2
  },

  { 
    question: "How many Fast&Furious movies are there?",
    answers: ["8", "7", "10", "9"],
    correct: 2
  },

  { 
    question: "Who won the 2024 best actor oscars?",
    answers: ["Robert Downy", "Leonardo DiCaprio", "Brad Pitt", "Cillian Murphy"],
    correct: 3
  },

  { 
    question: "What movie won best movie oscar award in 2002?",
    answers: ["Black panther", "Prison break", "Spiderman", "A beatiful mind"],
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


