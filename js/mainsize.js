const headerHeight = document.querySelector('header').clientHeight;
const footerHeight = document.querySelector('footer').clientHeight;
const greetingClock = document.querySelector('#greeting-clock');
const todos = document.querySelector('#todos');

function mainSizeChange(){
    const bodyHeight = document.querySelector('body').clientHeight;
    const mainHeight = bodyHeight - headerHeight - footerHeight;
    greetingClock.style.height = `${mainHeight * 0.25}px`;
    todos.style.height = `${mainHeight * 0.55}px`;
}
mainSizeChange();
window.addEventListener('resize',mainSizeChange);


