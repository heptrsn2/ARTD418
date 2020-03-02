// See https://codepen.io/juliangarnier/pen/RRKpgq

let myPath = document.querySelectorAll('path')

var myPath = anime.path('.path');

    anime({
      targets: '.path',
      translateX: 100,
      translateY: 100,
      rotate: 50,
      easing: 'linear',
      duration: 2000,
      loop: true
    });
