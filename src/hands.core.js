console.log((()=>{return "yo"})())

export class Hands {
    constructor(...args) {
	this.hands = []
    }
    
    // default generator method
    * [Symbol.iterator]() {
	for (let hand of this.hands) {
	    yield hand;
	}
    }
}
