/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria
 * Created on: Sep 2024
 * This program shows the cookie numbers
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let cookieNumber = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        cookieNumber = cookieNumber + 1
        basic.showNumber(cookieNumber)
    } else if (input.buttonIsPressed(Button.B)) {
        cookieNumber = 0
        basic.showNumber(cookieNumber)
    }
})
