// =============== МЕНЮ-БУРГЕР =============================
const iconMenu = document.querySelector('.header__menu_icon');
const menuBody = document.querySelector('.header__menu')
if(iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};

if(menuBody.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
}




// =============== ПЛАВНОЕ ПОЯВЛЕНИЕ =============================
const options = {
    threshold: [0.5]
};

const observer = new IntersectionObserver(onEntry, options);
const ourBlockCardEl = document.querySelectorAll('.our-block__card'); // пишем название класса блока, к которуму хотим применить появление

for (let elm of ourBlockCardEl) {
    observer.observe(elm);
}

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element__show'); // пишем название класса, который будем добавлять к блоку, для появления
        // } else {
        //     change.target.classList.remove('element__show'); // удаляем класс, при скроле
        }
    });
}








// function greet(){
//     const name = prompt('Введите ваше имя');
//     alert('Hellow' + " " + name + ',' + " " + 'how are you doing today?')
// }

// greet();

// function simpleMultiplication(number) {
//     return number % 2 == 0 ? number * 8 : number * 9;
// };

// simpleMultiplication(2)

