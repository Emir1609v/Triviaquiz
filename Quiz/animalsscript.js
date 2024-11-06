document.getElementById("startbutton").onclick = function() {
  document.getElementById("startbutton").style.display = 'none';
  document.getElementById("quiz").style.display = 'block';
  showQuestion(0);
};



const questions = [
  { 
    question: "Which animal is called the king of the jungle?",
    answers: ["Unicorn", "Ant", "Lion", "Giraffe"],
    correct: 2
  }, 

  { 
    question: "Which animal has the highest IQ?", 
    answers: ["Chimpanzee", "Gorilla", "Dolphin", "Cat"],
    correct: 1
  },

  { 
    question: "What animal is considered the dumbest animal on earth?",
    answers: ["Ostrich", "Panda", "Sloth", "Fly"],
    correct: 0
  },

  { 
    question: "What animal is the strongest animal on earth?",
    answers: ["African Elephant", "Silverback Gorilla", "Chimpanzee", "Red ants"],
    correct: 2
  },

  { 
    question: "What is the most important animal for human survival?",
    answers: ["Bees", "Sheep", "Cows", "Dogs"],
    correct: 0
  },

  { 
    question: "What animal is considered unkillable?",
    answers: ["Pig", "Ant", "Jellyfish", "Whale"],
    correct: 2
  },

  { 
    question: "What animal is hunted the most?",
    answers: ["Pangolins", "Elephants", "Crows", "Cheetas"],
    correct: 0
  },

  { 
    question: "How many years do dogs live for on average?",
    answers: ["13", "7", "16", "9"],
    correct: 0
  },

  { 
    question: "What animal are the dirtiest?",
    answers: ["Owls", "Swines", "Tigers", "Pigs"],
    correct: 3
  },

  { 
    question: "How many dogs are there in the world?(approx)",
    answers: ["1.1B", "115M", "900M", "550M"],
    correct: 2
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


