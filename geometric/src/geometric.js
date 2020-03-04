anime({
  targets: '.box1',
  keyframes: [
    {translateY: 400},
    {translateX: 250, scale: 2},
    {translateY: 600, scale: 1},
    {translateX: 600, translateY: 100, scale: 2,},
    {translateY: 400, scale: 1},
    {translateX: 1000, translateY: 300, scale: 3},
    {translateY: 1000, translateY: 800, scale: 1}
  ],
  duration: 8000,
  easing: 'cubicBezier(.5, .05, .1, .3)',
  loop: true
});
