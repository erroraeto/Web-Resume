let blockR = document.querySelector('.blockR');
let frames = blockR.children;

// blockR.addEventListener('click', scrollFrame);

window.addEventListener('load', scrollFrame);


function scrollFrame() {

    let n = 0;
    let p = 1;
    let state = false;
    let last = false;

    function move() {

        if (state) {
            frames[n - 1].id = 'hidd';

            setTimeout(() => {
                last ? frames[8].id = '' : frames[n - 2].id = '';
            }, 500);
        }

        frames[n] ? frames[n].id = 'pos1' : frames[p - 3].id = 'pos1';
        
        frames[n + 1] ? frames[n + 1].id = 'pos2' : frames[p - 2].id = 'pos2';
        
        frames[n + 2] ? frames[n + 2].id = 'pos3' : frames[p - 1].id = 'pos3';

        if (n < 7) {
            n += 1;
            state = true;
            last = false;
        } else if (n < 9) {
            n += 1;
            p += 1;
        } else {
            n = 1;
            p = 1;
            last = true;
        };
        
        setTimeout(() => {
            move();
        }, 2000)
    }

    setTimeout(() => {
        move();
    }, 200)
}