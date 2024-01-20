const loadingAreaFirst = document.querySelector('#loading');
const loadingAreaSecond = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () =>{
    loadingAreaFirst.animate(
      {
        opacity: [1,0],
        visibility: 'hidden'
      },
      {
        duration:2000,
        delay:1200,
        easing:'ease',
        fill:'forwards'
      }
    );

    loadingAreaSecond.animate(
        {
            translate:['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration:2000,
            delay:800,
            easing:'ease',
            fill:'forwards'
        }
    );

    loadingText.animate(
        [
            {
                opacity:1,
                offset: .8
            },
            {
                opacity: 0,
                offset: 1
            }
        ],
        {
            duration:1200,
            easing: 'ease',
            fill:'forwards'
        }
    );
});
    
