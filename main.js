const quiz_questions = [
    {
        "question": "What is Jotaro's Stand?",
        "answers": [
            {"text": "Gold Experience", "correct": false},
            {"text": "Star Platinum", "correct": true},
            {"text": "The World", "correct": false},
            {"text": "Anubis", "correct": false}
        ]
    },
    {
        "question": "Which of these apply to DIO?",
        "answers": [
            {"text": "He is a vampire.", "correct": true},
            {"text": "He is a Hamon User", "correct": false},
            {"text": "He Is a alien", "correct": false}
        ]
    },
    {
        "question": "How did Caesar die?",
        "answers": [
            {"text": "Crushed by a cross-shaped rock.", "correct": true},
            {"text": "Sliced in half.", "correct": false},
            {"text": "Sustained too much damage.", "correct": false}
        ]
    },
    {
        "question": "How did Kars become the Ultimate Life Form?",
        "answers": [
            {"text": "The Red Stone of Aja and the Stone Mask", "correct": true},
            {"text": "The Stone Mask", "correct": false},
            {"text": "The Red Stone of Aja", "correct": false},
            {"text": "The power of Hamon", "correct": false}
        ]
    },
    {
        "question": "Who trained Joseph and Caesar?",
        "answers": [
            {"text": "Lisa Lisa", "correct": true},
            {"text": "Holly Kujo", "correct": false},
            {"text": "Will. A Zeppeli", "correct": false},
            {"text": "Noriaki Kakyoin", "correct": false}
        ]
    },
    {
        "question": "What is Joseph's Stand Ability in part 3?",
        "answers": [
            {"text": "Hermit Purple", "correct": true},
            {"text": "Hierophant Green", "correct": false},
            {"text": "The Sun", "correct": false},
            {"text": "The High Priestess", "correct": false}
        ]
    },
    {
        "question": "What is Noriaki Kakyoin's Stand?",
        "answers": [
            {"text": "Hierophant Green", "correct": true},
            {"text": "Dark Blue Moon", "correct": false},
            {"text": "Silver Chariot", "correct": false},
            {"text": "Tohth", "correct": false}
        ]
    },
    {
        "question": "What is Avdol's Stand?",
        "answers": [
            {"text": "Magician's Red", "correct": true},
            {"text": "Wheel Of Fortune", "correct": false},
            {"text": "The Fool", "correct": false},
            {"text": "Geb", "correct": false}
        ]
    },
    {
        "question": "Which of these apply to Jonathan Joestar?",
        "answers": [
            {"text": "He is a nigger", "correct": false},
            {"text": "He is a Vampire", "correct": false},
            {"text": "He is a Hamon user", "correct": true},
            {"text": "He is a Stand user", "correct": false}
        ]
    }
]
;


const question_element = document.getElementById("question");
const answer_button = document.getElementById("buttons");
const next_button = document.getElementById("next");

let current_question_index = 0;
let score = 0;

function start_quiz(){
    current_question_index=0;
    score=0;
    next_button.innerHTML="next";
    show_question()
}

function show_question(){
    reset_state();
    let current_question = quiz_questions[current_question_index];
    let current_question_no = current_question_index + 1;
    question_element.innerHTML=current_question_no+"."+current_question.question;

    current_question.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answer_buttons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",select_answer)
    });
}

 function reset_state(){
     next_button.style.display="none";
     while (answer_buttons.firstChild) {
         answer_buttons.removeChild(answer_buttons.firstChild);
     }
 }

 function select_answer(e){
    const select_button =e.target;
    const is_correct = select_button.dataset.correct ==="true";
    if (is_correct) {
        select_button.classList.add("correct");
        score++;
    }else{
        select_button.classList.add("incorrect") ;
    }
    Array.from(answer_buttons.children).forEach(aha=> {
        if(aha.dataset.correct==="true") {
            aha.classList.add("correct");            
        }
        aha.disabled = true;
    });
    next_button.style.display= "block"
 }



 function handle_next_button(){
    current_question_index++;
    if (current_question_index<quiz_questions.length) {
        show_question();   
    } else {
        show_score();
    }
 }

 function show_score(){
    reset_state();
    question_element.innerHTML = `your score is ${score}/${quiz_questions.length}`
    next_button.innerHTML="play again"
    next_button.style.display="block"
 }

 next_button.addEventListener("click",()=>{
    if (current_question_index< quiz_questions.length) {
        handle_next_button();
    }
    else{
        start_quiz();
    }
 });
start_quiz()