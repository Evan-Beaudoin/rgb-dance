basic.showIcon(IconNames.Yes)
// Created by: Evan
// Created on: Oct. 2020
// 
// This program blinks an LED
// 
// 
// 
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, randint(0, 1))
    pins.digitalWritePin(DigitalPin.P2, randint(0, 1))
    pins.digitalWritePin(DigitalPin.P8, randint(0, 1))
    basic.pause(100)
})
