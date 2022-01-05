let progressSection = document.querySelector('.progress-section');
let progressBar = document.querySelector('.progress-bar');
let progressNum = document.querySelector('.progress-num');


let x, y;

function updateProgressBar() {
    progressBar.style.height = `${getScrollPercent()}%`;
    // progressNum.innerText = `${Math.ceil(getScrollPercent())}%`;
    requestAnimationFrame(updateProgressBar);
}

function getScrollPercent() {
    return ((window.scrollY)/(document.body.scrollHeight-window.innerHeight)*100)
}

updateProgressBar()