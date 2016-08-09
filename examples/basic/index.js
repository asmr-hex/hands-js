import {test, Hands} from '../../src/hands.core.js'


export function Basic() {
    (()=>{console.log(__dirname + "Testing")})()
    test()


    console.log(new Hands())
    // instantiate hands
    let hands = new Hands();
}
