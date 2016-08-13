import {alphabetize} from './hands.util'

export class Axis {
    constructor(index) {
	this.index = index
	this.name = 'Axis'+alphabetize(index)
	this.value = 0
	this._conditionHandlers = new Map()
	this._valueHistory = new Array(2).fill(0)
    }

    onCondition(f, handler) {
	// register this condition handler
	this._conditionHandlers.set(f, handler)
    }

    update(v) {
	// update value
	this.value = v

	// shift value history values
	this._valueHistory.unshift(v)
	this._valueHistory.pop()

	// iterate over condition evaluators and handlers
	for (let [evaluator, handler] of this._conditionHandlers) {
	    // if the condition evaluates to true
	    if (evaluator(this.value)) {
		// execute handler
		handler(this.value)
	    }
	}
    }
}
