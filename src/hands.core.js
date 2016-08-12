import Modernizr from 'modernizr'
import {Hand} from './hands.hand'

/* Hands is the main class for the gamepad API
 * 
 */
export class Hands {
    constructor(...args) {
	// initialize an empty map of connected gamepads
	this.hands = {}
	this.count = 0

	this.welcome()
    }
    
    welcome() {
	let gamepads = this._readGamepads()
	if (!gamepads) {
	    return
	}

	// create new hands from list of connected gamepads
	for (let gamepad of gamepads) {
	    if (gamepad.index in Object.keys(this.hands)) {
		// if we've already got it, skip creating a new hand
		continue
	    }

	    let hand = new Hand(gamepad)

	    // create a new hand
	    this.hands[hand.id] = hand

	    // increment hand count
	    this.count++

	    console.log(hand)
	}

	let diff = gamepads.length - this.count
	if (diff > 0) {
	    console.log("Controller Connection")
	} else if (diff < 0) {
	    for (let i = 0; i < -diff; i++) {
		console.log("Controller Disconnection")
		this.count--
	    }
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
		// if we don't have this controller registered, ignore it
		continue
	    }
	    for (let [index, value] in gamepad.buttons) {
		let index = Number.parseInt(index)+1

		this.hands[gamepad.index].buttonMap[index].pressed = value.pressed
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

