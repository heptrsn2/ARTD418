// See https://codepen.io/juliangarnier/pen/RRKpgq


// the collection of animated paths
var animatedPaths = [];


function setup() {

    // retrieve all the SVG paths in the html
    var pathEls = document.querySelectorAll('circle');

    for (var i = 0; i < pathEls.length; i++) {

        // for each path
        var pathEl = pathEls[i];

        // Set an offset alonf the path. Here we use thge library anime.js !!Awesome library!!
        // see documentation here: http://animejs.com/documentation/
        var offset = anime.setDashoffset(pathEl);

        pathEl.setAttribute('stroke-dashoffset', offset);

        // Animation parameters
        let tmp = anime({
            targets: pathEl,
            scale: 20,
            duration: 5000,
            loop: true,
            easing: 'easeInOutSine'

        });

        // storage of animated pats in a collection
        animatedPaths.push(tmp);
    }

    scrollPlay()
}

function scrollPlay() {
    // refresh the scroll position
    window.requestAnimationFrame(scrollPlay);

    // retrieve the current scroll position
    scrollPosition = window.pageYOffset;

    // offsetCorrection
    let yOffsetCorrection = 300

    // get the frame for the current scroll position plus Y correction
    let frame = scrollConvertion(scrollPosition + yOffsetCorrection);

    // animate all the paths
    for (let index = 0; index < animatedPaths.length; index++) {
        animatedPaths[index].seek(frame)
    }
}

function scrollConvertion(scrollPosition) {
    let totalHeight = document.body.clientHeight - window.height;
    let nFrames = 6000;
    return Math.floor((scrollPosition / totalHeight) * nFrames);
}



const COLORS = [
  '#EF3E4B',
  'green',
  'blue',
  'yellow',
  'cyan',
  'black',
];

document.onclick = () => {
  document.body.style.backgroundColor
    = COLORS[Math.floor(Math.random() * COLORS.length)];
};
