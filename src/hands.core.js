import Modernizr from 'modernizr'

/* Hands is the main class for the gamepad API
 * 
 */
export class Hands {
    constructor(...args) {
	// initialize an empty map of connected gamepads
	this.hands = {}
	this.welcome()
    }
    
    welcome() {
	// ensure that we can read gamepads using Modernizr
	if (!Modernizr.gamepads) {
	    console.log("oh no, gamepadAPI not supported!")	    
	    return
	}

	// read defined gamepads
	let gamepads = Array.from(navigator.getGamepads()).filter(v => {
	    return typeof(v) !== "undefined"
	})

	// create new hands
	for (let gamepad of gamepads) {
	    new Hand(gamepad)
	}
    }

    // default generator method
    * [Symbol.iterator]() {
	for (let hand of this.hands) {
	    yield hand;
	}
    }
}

class Hand {
    constructor(gamepad) {
	console.log(gamepad)

	this.buttons = {}
	this.axes = {}
    }
}
