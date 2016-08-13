# Hands
simple gamepad API for browser.

### Install
```shell
$ npm install hands
```
### Usage

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

**operators on buttons/axes:**
```javascript

	//
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

### Notes
Since this library relies on the experimental [GamePad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API),
it is only supported by a subset of modern browsers (Chrome >35.0, Firefox >29.0, Opera >22.0). Please check the
[Compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad#Browser_compatibility) for more details. 
