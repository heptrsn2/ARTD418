var circles = document.querySelectorAll('circle');

anime({
  targets: circles,
  translateX: anime.stagger(10, {grid: [17, 10], from: 'center', axis: 'x'}),
});

anime ({
  targets: 'polygon',
  scale: (2, {from: 'center'}),
  direction: 'alternate',
  easing: 'linear'
})

anime ({
  targets: '.flower',
})
