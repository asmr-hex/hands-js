import {Hands} from '../../src/hands.core.js'

export function Basic() {
    // instantiate hands
    let hands = new Hands();

    hands.welcome()

    for (let v of hands) {
	// assign a condition handler
	v.AxisA.onCondition((v) => {
	    return v == 1
	}, (v) => {
	    document.getElementById("content").style.backgroundColor = '#FD9987'
	})

	// assign a condition handler
	v.AxisA.onCondition((v) => {
	    return v != 1
	}, (v) => {
	    document.getElementById("content").style.backgroundColor = 'white'
	})


	console.log(v.AxisA)
	
    }

    function update() {
	hands.welcome()

	hands.update()

	document.getElementById("content").innerHTML = hands.draw()

	window.requestAnimationFrame(update)
    }

    window.requestAnimationFrame(update)
}
