$(function() {
  $love = $('.circle');
  for( var i = 0; i < 4; i++) {
    $('.wrapper').append($love.clone());
  }
});

const COLORS = [
  '#CC2539',
  '#4065ED',
  '#EA7A42',
  '#EDBC40',
];

document.onclick = () => {
  document.body.style.backgroundColor
    = COLORS[Math.floor(Math.random() * COLORS.length)];
};
