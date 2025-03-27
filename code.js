const btn = document.querySelector('.but');
let isAnimating = false;  // Флаг для визначення, чи анімація включена
let currentRotation = 0;   // Змінна для збереження поточної позиції обертання
const rotate = document.querySelector('.rotate');  // Додаємо отримання елемента rotate
const input = document.querySelector('input')
const bat = document.querySelector('.bat')
//оброблюємо інпут та даємо користувачу можливість керувати швидкістю 
bat.addEventListener('keydown', (event) => {
    if(event.key === "Enter"){
    let zc = input.value
    let szybk = rotate.style.animation = 'rotate ' + zc + "s " + "infinite linear"
    }
})
bat.addEventListener('click', () => { 
    if(input.value !== ""){
        let zc = input.value
        let szybk = rotate.style.animation = 'rotate ' + zc + "s " + "infinite linear"
}})
// Подія кліку
btn.addEventListener('click', () => {
    if (!isAnimating) {
        // Запускаємо анімацію, але відразу встановлюємо її на поточний кут
        szybk
        rotate.style.animationPlayState = 'running';  // Запускаємо анімацію
        rotate.style.transform = `rotate(${currentRotation}deg)`;  // Встановлюємо поточну позицію
        isAnimating = true;
    } else {
        // Зупиняємо анімацію та заморожуємо її на поточному стані
        rotate.style.animationPlayState = 'paused';  // Зупиняємо анімацію
        currentRotation = parseFloat(getComputedStyle(rotate).transform.split(',')[4]);  // Отримуємо поточний кут
        rotate.style.transform = `rotate(${currentRotation}deg)`;  // "Заморожуємо" об'єкт
        isAnimating = false;
        szybk = rotate.style.animation = 'rotate ' + 0 + "s " + "infinite linear"
    }
});
