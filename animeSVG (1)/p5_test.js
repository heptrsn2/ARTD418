// the collection of animated paths
var animatedPaths = [];

// the boolean variable controlling the mouse button action
var animationPaused = true;

function setup(){

	// retrieve all the SVG paths in the html
	var pathEls = document.querySelectorAll('path');

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
	    strokeDashoffset: [offset, 0],
	    duration: anime.random(1000, 3000),
	    delay: anime.random(0, 2000),
	    loop: true,
	    direction: 'alternate',
	    easing: 'easeInOutSine',
	    autoplay: false
	  });

	  // storage of animated pats in a collection
	  animatedPaths.push(tmp);

	}

	// automatic reproduction
	animatedPaths[2].play();

}


function mouseClicked(){

	console.log("reproduction running: " + animationPaused);

	// mouse-controlled reproduction
	if (animationPaused){
		animatedPaths[0].play();
		animatedPaths[1].play();
		animatedPaths[2].play();
	} else {
		animatedPaths[0].pause();
		animatedPaths[1].pause();
		animatedPaths[2].pause();
	}
	animationPaused = !animationPaused;

}
s
