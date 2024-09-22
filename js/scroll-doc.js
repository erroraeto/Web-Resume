let buttons = document.querySelectorAll('.button');
let content = document.querySelector('.content');

document.addEventListener('click', function (e) {
    if (!e.target.closest('.button')) return;

    if (e.target.closest('#aboutMe')) {
        content.style.translate = '';
    } else if (e.target.closest('#skill')) {
        content.style.translate = -e.currentTarget.documentElement.offsetWidth + 'px';
    };
});