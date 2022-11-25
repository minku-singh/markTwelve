const quizForm = document.querySelector(".quiz-container");
const submitFormBtn = document.querySelector(".submit-form");
const msg = document.querySelector("#msg");

const answers = ["90°", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "100°", "30°", "a + b + c", "no", "45°"]

function showMsg(message){
    msg.innerText = message;
    msg.style.display = "block";
}

function calculateScore(){
    let score = 0;
    let i = 0;
    const myFormData = new FormData(quizForm);
    
    for(let value of myFormData.values()){
        if(value === answers[i]){
            score++;
            i++;
        }
    }

    showMsg(`Your SCORE is: ${score}`);
}

submitFormBtn.addEventListener("click", calculateScore);