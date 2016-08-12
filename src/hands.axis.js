import {alphabetize} from './hands.util'

export class Axis {
    constructor(index) {
	this.index = index
	this.name = 'Axis'+alphabetize(index)
    }
}
