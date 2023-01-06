//Selectors
const faqQuestions = document.querySelectorAll(".faqQuestions");
const faqAnswers = document.querySelectorAll(".faqAnswers");
const faqArrows = document.querySelectorAll(".faqArrow");
let faqCounter = [0, 0, 0, 0, 0];
let resetCounters = faqCounter.reduce((x, y) => x + y, 0);

//Functions
resetCounters = () => {
  for (let i = 0; i < faqCounter.length; i++) {
    faqCounter[i] = 0;
  }
};

hideAnswers = () => {
  for (let i = 0; i < faqAnswers.length; i++) {
    faqAnswers[i].style.display = "none";
    faqQuestions[i].style.fontWeight = "400";
    faqQuestions[i].style.color = "#54555a";
  }
};

showAnswers = () => {
  for (let i = 0; i < faqAnswers.length; i++) {
    faqAnswers[i].style.display = "block";
  }
};

turnArrows = () => {
  for (let i = 0; i < faqArrows.length; i++) {
    faqArrows[i].style.transform = "rotate(0deg)";
  }
};

//Event Listeners
questionEvents = () => {
  for (let i = 0; i < faqQuestions.length; i++) {
    faqQuestions[i].addEventListener("click", () => {
      //let reduction = faqCounter.reduce((x, y) => x + y, 0);&& reduction % 2 === 0

      if (faqCounter[i] === 1) {
        resetCounters();
        faqQuestions[i].style.fontWeight = "400";
        faqQuestions[i].style.color = "#54555a";
        faqAnswers[i].style.display = "none";
        faqArrows[i].style.transform = "rotate(0deg)";
      } else {
        resetCounters();
        hideAnswers();
        turnArrows();
        faqCounter[i] += 1;
        faqQuestions[i].style.fontWeight = "700";
        faqQuestions[i].style.color = "black";
        faqAnswers[i].style.display = "block";
        faqArrows[i].style.transform = "rotate(180deg)";
      }
      console.log(faqCounter);
    });
  }
};

//Run
questionEvents();
