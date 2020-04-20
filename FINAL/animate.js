var elements = document.querySelectorAll("polygon");

anime ({
  targets: elements,
  baseFrequency: 0,
  scale: (-2),
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
})
