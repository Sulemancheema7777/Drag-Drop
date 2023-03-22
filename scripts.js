const empty_elem = document.querySelectorAll('.empty');
let selected;
let score=0;
const start_button = document.querySelector('#playAgain');
start_button.style.display = 'none';

function endGame(){
start_button.style.display='block';
document.querySelector('.drag-section').style.border = 'none';
}

function startGame(){
    window.location.reload();
}

start_button.addEventListener('click',startGame);

function allowDrop(e){
e.preventDefault();
}
empty_elem.forEach(function(elem){
 elem.addEventListener('dragover',allowDrop);
});

function handleDragStart(e){
    //console.log('drad start');
    selected = e.target;
    e.target.style.opacity=0.5;
}
document.addEventListener('dragstart',handleDragStart);

function handleDrop(e){
    //console.log('dropped');
    if(document.querySelector('.drag-section').childElementCount === 1){

        endGame();
    }
    if(e.target.classList.contains(selected.className)){
        selected.remove();
        e.target.classList.remove('empty');
        score++;
        document.querySelector('#score').innerText = score;
        return;
    }
    score--;
    document.querySelector('#score').innerText = score;
}
empty_elem.forEach(function(elem){
elem.addEventListener('drop',handleDrop);
});


function handleDragEnd(e){
    //console.log('drag end');
    e.target.style.opacity=1;
}
document.addEventListener('dragend',handleDragEnd);