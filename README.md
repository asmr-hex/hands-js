# Hands
simple gamepad API for browser.

## Install
```shell
$ npm install --save hands
```
## Usage

**importing and instantiation:**
```javascript
	// -- ES6 --
	import {Hands} from 'hands'

	let hands = new Hands()


	// -- ES5 -- 
	var Hands = require("hands");

	// get all connected controllers
	var hands = new Hands();
```

**basic:**
```javascript
	// For basic usage, first welcome and register all
	// connected controllers. Then simply update each
	// controller and read values of buttons and axes.

	// welcome and register initially connected controllers
	hands.welcome()

	// main animation loop
	function update() {
	
		// update hands
		hands.update()

		// read values
		for (let hand of hands) {
			console.log(hand.value("input-name")
		}
		
		window.requestAnimationFrame(update);
	}
		
	window.requestAnimationFrame(update);
```

**setting reaction handlers on value updates**
```javascript

	// initialize array of values we would like to control
	var X = []

	// register reaction handlers for each connected controller
	hands.forEach(function(hand, i) {
		// add entry for each connected controller
		X.push(0.0)
		
		// set reaction handler for an input
		hand.setReaction("input-name", function(value) {
			// change value of array entry to value of input
			X[i] = value;
		});
	});

	// main animation loop
	function update() {
		// update all connected controllers and call
		// all attached reaction handlers
		hands.update();
		// 
	
		// continue updating
		window.requestAnimationFrame(update);
	}

	// begin updating
	window.requestAnimationFrame(update);
```

**attaching an onConnection/onDisconnection callback to a new controller connection:**
```javascript

	// initialize an empty map of objects
	var A = {}

	// set onConnection callback
	hands.onConnection(function(hand) {
		// populate a new entry to the map on connection
		A[hand.id] = {somde: "data"}
	}).onDisconnection(function(hand) {
		// remove entry from map on disconnection
		A.delete(hand.id)
	});
```

## Documentation
#####Hands Class:
The `Hands` class is a collection of connected/registered controllers and
provides high level methods for operating over all controllers.
```javascript
	class Hands {
		// discover and register connected controllers
		welcome() {...}

		// query registered controllers and update state.
		update() {...}
		
		// register a custom handler for connections.
		//
		// the provided handler takes the newly connected Hand
		// instance as its only argument.
		onConnect((hand) => {...}) {...}

		// register a custom handler for disconnections.
		//
		// this provided handler takes the newly disconnected
		// Hand instance as its only argument.
		onDisconnect((hand) => {...}) {...}
	}
```

Additionally, it is possible to iterate over an instance of the class to
access individual controllers.
```javascript
	let hands = new Hands()
	
	for (let hand of hands) {
		// hand is an instance of class 'Hand'
	}
```

#####Hand Class:
The `Hand` class is a high level representation of a controller which
encompasses percept state and provides methods for which to respond to
these percepts.
```javascript
	class Hand {
		// given a gamepad, update internal percept state
		update(gamepad) {...}
		
		// set a reaction handler for a particular percept.
		//
		// this method takes the input name, a handler function
		// which takes the value of the input, and optionally
		// a condition evaluator function which takes this hand
		// instance and returns a boolean. 
		setReaction("input-name", v => {...}, [this => {...}])
		
		// clear all reactions from a particular percept.
		clearReactions("input-name")
		
		// rename an input.
		//
		// this method renames an input which can be used
		// programmatically. Input values can be accessed
		// by their names directly from the hand instance.
		// For example, given a percept named "talk",
		// developers can access the values of "talk" from
		// a hand instance with hand.talk.
		renamePercept("oldInputName", "newInputName")
	}
```

### Notes
Since this library relies on the experimental [GamePad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API),
it is only supported by a subset of modern browsers (Chrome >35.0, Firefox >29.0, Opera >22.0). Please check the
[Compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad#Browser_compatibility) for more details. 
