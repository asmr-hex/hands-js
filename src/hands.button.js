import {alphabetize} from './hands.util'

export class Button {
    constructor(index) {
	this.index = index
	this.name = alphabetize(index)
	this.pressed = false
	this.onPress = () => {return}
	this.onUnpress = () => {return}
	this.onHold = () => {return}
	this._valueHistory = new Array(2).fill(0)
    }

    update(v) {
	// update pressed value
	this.pressed = v

	// shift value history values
	this._valueHistory.unshift(v ? 1 : 0)
	this._valueHistory.pop()
    }

    _detectPress() {
	// detect a press using value history
	// button is pressed when [0, 1]
    }

    _detectUnpress() {
	// detect an unpress using value history
	// button is unpressed when [1, 0]
    }

    _detectHold() {
	// detect hold using value history
	// button is held when all history are 1s: [1, 1]
    }
}
