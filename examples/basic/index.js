import {Hands} from '../../src/hands.core.js'

export function Basic() {
    // instantiate hands
    let hands = new Hands();

    hands.welcome()


    function update() {
	hands.welcome()

	hands.update()

	document.getElementById("content").innerHTML = hands.draw()

	window.requestAnimationFrame(update)
    }

    window.requestAnimationFrame(update)
}
