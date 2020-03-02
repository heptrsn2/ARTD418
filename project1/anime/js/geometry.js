// By Class
anime({
  targets: '.box1',
  keyframes: [
    {translateY: -40},
    {translateX: 250},
    {translateY: 40},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});
anime({
  targets: '.box2',
  translateY: 300,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  scale: 2,
  rotate: 180
})

anime({
  targets: '.box3',
  translateY: -300,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  scale: 2,
  rotate: -360
})

anime({
  targets: '.box4',
  translateX: -300,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  scale: 2,
  rotate: -180
})

anime({
  targets: '.box5',
  translateY: -300,
  translateX: 500,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  scale: 2
})

anime({
  targets: '.box6',
  translateY: -300,
  translateX: -100,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  scale: 2
})

anime({
  targets: '.box7',
  translateY: -300,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  scale: 2
})
