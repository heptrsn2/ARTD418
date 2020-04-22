var elements = document.querySelectorAll("polygon");

anime ({
  targets:'.red',
  baseFrequency: 0,
  scale: function() { return anime.random(12,15) / 10; },
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});

anime ({
  targets:'.renewal',
  rotate: 360,
  easing: 'linear',
  loop: true,
  duration: 12000
});

anime ({
  targets:'line',
  keyframes: [
    {scale: 0.5},
    {scale: 3}
  ],
  scale: 3,
  easing: 'easeInOutQuad',
  duration: 8000,
  loop: true
});

anime ({
  targets: pull,
  baseFrequency: 0,
  scale: function() { return anime.random(12,15) / 10; },
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});

var pull = document.querySelectorAll("circle");

anime({
            targets: pull,
            translateY: anime.stagger(1500, {
                grid: [10, 18],
                from: 'center',
                axis: 'y'
            }),
            delay: anime.stagger(100, {
                start: 200,
                grid: [10, 18],
                from: 'center'
            }),
            easing: 'easeInOutQuad',
            direction: 'reverse',
            loop: true
        });

//anime ({
  //targets: 'circle',
  //opacity: function() { return anime.random(0,10) / 10; },
  //easing: 'easeInOutQuad',
  //direction: 'alternate',
  //loop: true,
  //duration: 800
//})
