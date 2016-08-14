import Modernizr from 'modernizr'
import {alphabetize} from './hands.util'
import {Hand} from './hands.hand'
import * as err from './hands.error'


/* Hands is the main class for the gamepad API
 * 
 */
export class Hands {
    constructor(config = {test: false}) {
	// set configuration parameters
	this._test = config.test

	// initialize an empty map of connected gamepads
	this.hands = new Map()
	this._connectHandler = (v) => {return}
	this._disconnectHandler = (v) => {return}

	this.welcome()
    }

    onConnect(f) {
	// set connect handler
	this._connectHandler = this._validateCallback(f, 1)
    }

    onDisconnect(f) {
	// set disconnect handler
	this._disconnectHandler = this._validateCallback(f, 1)
    }
    
    _validateCallback(f, argn, ...args) {
	// ensure that function accepts appropriate # of params
	if (f.length != argn) {
	    throw new Error(err.InvalidSignature(f.toString()))
	}

	return f
    }

    draw() {
	let drawnJSON = "<br>"
	this.hands.forEach((v,k,m) => {
	    drawnJSON += v.draw() + "<br>"	    
	})

	return drawnJSON
    }
    
    welcome() {
	let gamepads = this._readGamepads()
	if (!gamepads) {
	    return
	}

	// snapshot gamepad indices currently registered
	let rmHands = [...this.hands.keys()]

	// create new hands from list of connected gamepads
	for (let gamepad of gamepads) {
	    if (this.hands.has(gamepad.index)) {
		// if we've already got it, skip creating a new hand and
		// remove from potentially disconnectedHands array
		rmHands.splice(gamepad.index, 1)
		continue
	    }

	    let hand = new Hand(gamepad)

	    // create a new hand
	    this.hands.set(hand.id, hand)

	    // print out connection
	    let alphabetID = alphabetize(hand.id+1)
	    console.log(`Connected to Hand ${alphabetID}`)
	}

	// disconnect remaining hands in rmHands array
	for (let handIndex in rmHands) {
	    this.hands.delete(handIndex)

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
	    if (this.hands.has(gamepad.index)) {
		// only update buttons if this hand is registered!
		this.hands.get(gamepad.index).update(gamepad)
	    }
	}

	return
    }

    _readGamepads() {
	// ensure that we can read gamepads using Modernizr
	if (!Modernizr.gamepads) {
	    this._test ? null:console.log(err.GamepadNotSupported())
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
	for (let [_, hand] of this.hands) {
	    yield hand;
	}
    }
}

