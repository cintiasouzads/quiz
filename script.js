 
 
document.addEventListener('DOMContentLoaded', () =>{
let currentQuestionIndex = 0; 
let pontos = 0; 

const questions = document.querySelectorAll('.question'); 
const nextButton = document.getElementById('nextButton'); 
const resultElement = document.getElementById('result'); 
const timerDisplay = document.getElementById('time');
let timer;
let timeLeft = 60;

function showQuestion(index){
    const currentQuestion = questions[index];
    currentQuestion.classList.add('active');
    resetTimer();
}

function goToNextQuestion(){
    const curretQuestion = questions[currentQuestionIndex];
    const selectedAnswer = curretQuestion.querySelector('input[type="radio"]:checked');

    if(selectedAnswer){
        if(selectedAnswer.value === curretQuestion.getAttribute('data-correct')){
            pontos++;
        }

        curretQuestion.classList.remove('active');
        currentQuestionIndex++;

        if(currentQuestionIndex < questions.length){
            showQuestion(currentQuestionIndex);
            
            
        }else {
            
            nextButton.style.display = 'none';
            resultElement.style.display = 'block';
            resultElement.textContent = `Você marcou ${pontos} pontos`;
            clearInterval(timer);
            timerDisplay.textContent = 'Encerrado!'
          
           
            
           
        }
    }
}

function resetTimer(){
    clearInterval(timer);
    timeLeft = 60;
    updateTimerDisplay();

    timer = setInterval(() =>{
        timeLeft--;
        updateTimerDisplay();

        if(timeLeft === 0) {
            clearInterval(timer);
            nextButton.style.display = 'none';
            timerDisplay.textContent = `Tempo finalizado`;
        }
    }, 1000);

}
    function updateTimerDisplay(){
        timerDisplay.textContent = `Tempo restante ${timeLeft}s`;
     }




nextButton.addEventListener('click', goToNextQuestion);

showQuestion(currentQuestionIndex);

});





