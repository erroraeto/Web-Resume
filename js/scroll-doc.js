let content = document.querySelector('.content');
let skills = document.querySelector('.skills');
let about = document.querySelector('.about');
let wrapper = document.querySelector('.cntntWrp');

document.addEventListener('click', function (e) {
    if (!e.target.closest('.button')) return;
    
    let winSize = window.innerWidth;
    content.style.transformOrigin = window.innerWidth / 2 + 'px';

    if (e.target.closest('#aboutMe')) {
        content.style.translate = '';
        content.style.scale = '80%';
    } else if (e.target.closest('#skill')) {
        content.style.translate = -e.currentTarget.documentElement.offsetWidth + 'px';
        content.style.scale = '80%';
    };

    setTimeout(() => content.style.scale = '', 500)
});