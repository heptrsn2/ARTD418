var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,

});

anime ({
  targets: '.st1',
  scale: 5,
  direction: 'reverse',
  easing: 'linear',
  duration: 3000
})


tl
.add({
  targets: '#sm',
  keyframes: [
    {translateX: 90},
    {opacity: 0},
  ],
  duration: 500,
  easing: 'linear',
})
.add({
  targets: '#med',
  keyframes: [
    {opacity: 1},
    {translateX: 100},
    {opacity: 1},
  ],
  duration: 500,
  easing: 'linear',
}, 500);



const COLORS = [
  '#EF3E4B',
];

document.onclick = () => {
  document.body.style.backgroundColor
    = COLORS[Math.floor(Math.random() * COLORS.length)];
};
