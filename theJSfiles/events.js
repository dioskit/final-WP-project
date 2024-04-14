// DOM Manipulation


//event listenres

//elemet.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn(){
    alert('i also love javascript');
}
                
buttonTwo.addEventListener("click",alertBtn);

// mouseover ,,, change the background

const newBackgroundColor = document.querySelector('.box-3');

function changeBgcolor(){
    newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener("mouseover", changeBgcolor);

// reveal event

const revealbtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');
function revealContent(){
    if(hiddenContent.classList.contains('reveal-btn')
    ){
        hiddenContent.classList.remove('reveal-btn');
    } 
    else{
        hiddenContent.classList.add('reveal-btn');
    }
}

revealbtn.addEventListener('click',revealContent);