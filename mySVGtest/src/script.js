// the collection of animated paths
var animatedPaths = [];

// the boolean variable controlling the mouse button action
var animationPaused = true;

function setup() {

    // retrieve all the SVG paths in the html
    var pathEls = document.querySelectorAll('path');

    for (var i = 0; i < pathEls.length; i++) {

        // to animate path 3
        var pathEl = pathEls[2];

        // Set an offset along the path.
        var offset = anime.setDashoffset(pathEl);

        pathEl.setAttribute('stroke-dashoffset', offset);

        // Animation parameters
        let tmp = anime({
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            duration: anime.random(1000, 3000),
            delay: anime.random(0, 2000),
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine',
            autoplay: false
        });

        tmp.play()
            // storage of animated pats in a collection
        animatedPaths.push(tmp);
    }

}

function mousePressed() {
    anime({
        targets: document.querySelectorAll('image'),
        translateY: -100,
        scale: 0.25
    })

}
