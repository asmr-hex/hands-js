import {Button} from './hands.button'
import {Axis} from './hands.axis'

export class Hand {
    constructor(gamepad) {
	this.id = gamepad.index
	this.type = gamepad.id
	this.buttonMap = {}
	this.axisMap = {}
	// iterate over all buttons in gamepad
	for (let [index, value] in gamepad.buttons) {
	    let index = Number.parseInt(index)+1
	    let button = new Button(index)

	    // dynamically set button attribute name
	    Object.assign(this, {[button.name]: button})

	    // add entry to button map
	    this.buttonMap[index] = this[button.name]
	}
	// iterate over all axes in gamepad
	for (let [index, value] in gamepad.axes) {
	    let index = Number.parseInt(index)+1
	    let axis = new Axis(index)

	    // dynamically set button attribute name
	    Object.assign(this, {[axis.name]: axis})

	    // add entry to button map
	    this.axisMap[index] = this[axis.name]
	}

	console.log(gamepad)
    }

    update(gamepad) {
	// update all button states
	for (let [index, value] in gamepad.buttons) {
	    let index = Number.parseInt(index)+1
	    this.buttonMap[index].pressed = gamepad.buttons[index-1].pressed
	}
	// update all axis states
	for (let [index, value] in gamepad.axes) {
	    let index = Number.parseInt(index)+1
	    this.axisMap[index].value = gamepad.axes[index-1]
	}
    }

    draw() {
	let drawnJSON = ""

	for (let idx in this.buttonMap) {
	    drawnJSON += `${this.buttonMap[idx].name}\t\t:${this.buttonMap[idx].pressed}<br>`
	}
	for (let idx in this.axisMap) {
	    drawnJSON += `${this.axisMap[idx].name}\t\t:${this.axisMap[idx].value}<br>`
	}


	return drawnJSON
    }
}
