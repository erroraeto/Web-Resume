let scrollable = document.querySelectorAll('#scrollable');

document.addEventListener('scroll', function(event) {
    for (el of scrollable) {
        let name = el.className;
        let style = document.createElement('style');
        style.innerHTML = `
        .${el.className}::before {
            transform:
                translate(40px, 10px) !important;
        }`;
        document.head.appendChild(style);
    }

})