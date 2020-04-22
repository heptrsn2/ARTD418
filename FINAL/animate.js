var elements = document.querySelectorAll("polygon");

anime ({
  targets: elements,
  baseFrequency: 0,
  scale: function() { return anime.random(10,20) / 10; },
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
})

anime ({
  targets: 'circle',
  opacity: function() { return anime.random(0,10) / 10; },
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  duration: 800s
})
