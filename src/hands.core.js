
export class Hands {
    constructor(...args) {
	this.hands = ["a", "b"]
	console.log((()=>{return "yo"})())
    }
    
    // default generator method
    * [Symbol.iterator]() {
	for (let hand of this.hands) {
	    yield hand;
	}
    }
}
