import {Button} from './hands.button'
import {Axis} from './hands.axis'


export class Hand {
    constructor(gamepad) {
	this.id = gamepad.index
	this.type = gamepad.id

	this.buttons = { fromIndex: new Map(),
			 fromName: new Map()}
	this.axes = { fromIndex: new Map(),
		      fromName: new Map()}
	this.buttonMap = new Map()
	this.axisMap = new Map()

	// iterate over all buttons in gamepad to initialize
	for (let [index, value] in gamepad.buttons) {
	    let index = Number.parseInt(index)+1
	    let button = new Button(index)

	    // dynamically set button attribute name
	    Object.assign(this, {[button.name]: button})

	    // add entry to button map
	    this.buttons.fromIndex.set(index, this[button.name])
	    this.buttons.fromName.set(this[button.name], index)
	}
	// iterate over all axes in gamepad
	for (let [index, value] in gamepad.axes) {
	    let index = Number.parseInt(index)+1
	    let axis = new Axis(index)

	    // dynamically set button attribute name
	    Object.assign(this, {[axis.name]: axis})

	    // add entry to button map
	    this.axisMap.set(index, this[axis.name])
	}

	console.log(gamepad)
    }
    
    renamePercept(oldName, newName) {
	// 

    }

    _assignPercept(percept) {
	
    }

    update(gamepad) {
	// update all button states
	for (let [index, value] in gamepad.buttons) {
	    let index = Number.parseInt(index)+1
	    let button = this.buttonMap.get(index)
	    button.update(gamepad.buttons[index-1].pressed)
	}
	// update all axis states
	for (let [index, value] in gamepad.axes) {
	    let index = Number.parseInt(index)+1
	    let axis = this.axisMap.get(index)
	    axis.update(gamepad.axes[index-1])
	}
    }

    draw() {
	let drawnJSON = ""

	this.buttonMap.forEach((v,k,m) => {
	    drawnJSON += `${v.name}\t\t:${v.pressed}<br>`
	})
	this.axisMap.forEach((v,k,m) => {
	    drawnJSON += `${v.name}\t\t:${v.value}<br>`
	})

	return drawnJSON
    }
}
