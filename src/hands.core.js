import Modernizr from 'modernizr'
import {alphabetize} from './hands.util'
import {Hand} from './hands.hand'


/* Hands is the main class for the gamepad API
 * 
 */
export class Hands {
    constructor(...args) {
	// initialize an empty map of connected gamepads
	this.hands = {}

	this.welcome()
    }

    draw() {
	let drawnJSON = "<br>"
	for (let index in  this.hands) {
	    drawnJSON += this.hands[index].draw() + "<br>"
	}

	return drawnJSON
    }
    
    welcome() {
	let gamepads = this._readGamepads()
	if (!gamepads) {
	    return
	}

	// snapshot gamepad indices currently registered
	let rmHands = Object.keys(this.hands)

	// create new hands from list of connected gamepads
	for (let gamepad of gamepads) {
	    if (gamepad.index in Object.keys(this.hands)) {
		// if we've already got it, skip creating a new hand and
		// remove from potentially disconnectedHands array
		rmHands.splice(rmHands.indexOf(gamepad.index), 1)
		continue
	    }

	    let hand = new Hand(gamepad)

	    // create a new hand
	    this.hands[hand.id] = hand

	    // print out connection
	    let alphabetID = alphabetize(hand.id+1)
	    console.log(`Connected to Hand ${alphabetID}`)
	}

	// disconnect remaining hands in rmHands array
	for (let handIndex in rmHands) {
	    delete(this.hands[handIndex])

	    // print out disconnection
	    let alphabetID = alphabetize(handIndex+1)
	    console.log(`Disconnected from Hand ${alphabetID}`)
	}

    }

    update() {
	let gamepads = this._readGamepads()
	if (!gamepads) {
	    return
	}

	// iterate over gamepads and update button/axis values
	for (let gamepad of gamepads) {
	    if (gamepad.index in Object.keys(this.hands)) {
		// only update buttons if this hand is registered!
		this.hands[gamepad.index].update(gamepad)
	    }
	}

	return
    }

    _readGamepads() {
	// ensure that we can read gamepads using Modernizr
	if (!Modernizr.gamepads) {
	    console.log("oh no, gamepadAPI not supported!")	    
	    return null
	}

	// read defined gamepads
	let gamepads = Array.from(navigator.getGamepads()).filter(v => {
	    return typeof(v) !== "undefined"
	})

	return gamepads
    }

    // default generator method
    * [Symbol.iterator]() {
	for (let hand of this.hands) {
	    yield hand;
	}
    }
}

