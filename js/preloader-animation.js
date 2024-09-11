let stat = false;
let loading = this.document.getElementById('loading');


function fTypeText() {
    if (stat) return;
    let anyString = loading.textContent;
    let i = 7;
    let width = loading.clientWidth;
    let fType = function() {
      if (i <= anyString.length) {
        loading.innerHTML = anyString.substring(0, i);
        loading.style.width = width + 'px';
        setTimeout(arguments.callee, 100);
      } else {
        fTypeText();
        i = 7;
      };
      i++;
    }
    fType();    
};

fTypeText();

window.addEventListener('load', function() {
    loading.style.display = 'none';
    stat = true;

    function animate({timing, draw, duration}) {
        let start = performance.now();
        let preloader = document.getElementById('preloader');

        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) {
                timeFraction = 1;
                preloader.style.display = 'none';
            }

            let progress = timing(timeFraction);

            draw(progress);

            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }

        });
    };

    animate({
        duration: 1000,
        timing(timeFraction) {
            return timeFraction;
        },
        draw(progress) {
            preloader.style.opacity = 100 - (progress * 100) + '%';
        }
    });

})