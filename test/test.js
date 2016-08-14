import {expect} from 'chai'
import {Hands} from '../src/hands.core'
import {Button} from '../src/hands.button'
import * as err from '../src/hands.error'


describe("Providing Invalid Callback to onConnect", () => {
    it("throws and error", () => {
	let hands = new Hands({test:true})
	let fn = () => {return "nothing"}
	expect(() => hands.onConnect(fn)).
	    to.
	    throw(Error, err.InvalidSignature(fn.toString()))
    })
})


describe("Providing Valid Callback to onConnect", () => {
    it("sets '_connectHandler' properly", () => {
	let hands = new Hands({test:true})
	let fn = (v) => {return "$%^&"}
	hands.onConnect(fn)
	expect(hands._connectHandler).to.equal(fn)
    })
})

describe("Overloading Button object as Number", () => {
    it("returns binarized value of button.pressed", () => {
	let button = new Button(1)
	console.log(button)
	expect(Number(button)).to.equal(0)
    })
})
