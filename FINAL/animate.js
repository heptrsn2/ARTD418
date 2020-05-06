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
  targets: 'rect',
  opacity: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(200, {grid: [13, 7]}),
  loop: true
});


anime ({
  targets:'line',
  keyframes: [
    {scale: 1},
    {scale: 3}
  ],
  scale: 3,
  easing: 'easeInOutQuad',
  duration: 2000,
  direction: 'alternate',
  loop: true
});

var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 750,
  loop: true
});

tl
.add({
  targets: '#explode',
  scale: 1,
})
.add({
  targets: '#explode',
  scale: 3,
})
.add({
  targets: '#explode',
  scale: 1,
});



anime ({
  targets: '#abundance',
  baseFrequency: 0,
  scale: function() { return anime.random(12,15) / 10; },
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});

anime ({
  targets: '#star',
  baseFrequency: 0,
  opacity: function() { return anime.random(0,10) / 10; },
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  delay: anime.stagger(50)
});

anime({
            targets: '#abundance',
            translateY: anime.stagger(1500, {
                grid: [10, 18],
                from: 'center',
                axis: 'y'
            }),
            delay: anime.stagger(150, {
                start: 1000,
                grid: [10, 18],
                from: 'center'
            }),
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        });




function randomValues() {
  anime({
    targets: '#orb',
    translateX: function() {
      return anime.random(0, 20);
    },
    translateY: function() {
      return anime.random(0,20);
    },
    easing: 'easeInOutQuad',
    duration: function() {
      return anime.random(500,1000);
    },
    complete: randomValues
  });


  anime({
    targets: '#play',
    translateX: function() {
      return anime.random(0, 40);
    },
    translateY: function() {
      return anime.random(0,40);
    },
    easing: 'easeInOutQuad',
    duration: function() {
      return anime.random(500,1000);
    },
    complete: randomValues
  });
}

randomValues();

anime({
  targets: '#random',
  baseFrequency: 0,
  rotate: 360,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
})

//anime ({
  //targets: 'circle',
  //opacity: function() { return anime.random(0,10) / 10; },
  //easing: 'easeInOutQuad',
  //direction: 'alternate',
  //loop: true,
  //duration: 800
//})
