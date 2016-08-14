import {expect} from 'chai'
import {Hands} from '../src/hands.core'
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

