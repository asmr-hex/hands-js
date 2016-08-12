import {Hands} from '../../src/hands.core.js'

export function Basic() {
    // instantiate hands
    let hands = new Hands();

    function update() {
	hands.welcome()

	hands.update()

	window.requestAnimationFrame(update)
    }

    window.requestAnimationFrame(update)
}
