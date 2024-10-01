/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria
 * Created on: Sep 2024
 * This program shows the cookie numbers
*/

// our cookie numbers
let cookieNumber: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function(){
    // get cookieNumber
    cookieNumber= cookieNumber + 1

    //output answer
    basic.showNumber(0 + 1)

})

input.onButtonPressed(Button.B, function () {
    // get cookieNumber
    cookieNumber = 0

    //output answer
    basic.showNumber(0)
})