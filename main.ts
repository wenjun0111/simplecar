function stop () {
	
}
input.onButtonPressed(Button.A, function () {
    Where = -1
})
input.onButtonPressed(Button.AB, function () {
    Where = 2
})
input.onButtonPressed(Button.B, function () {
    Where = 1
})
function go () {
	
}
let Where = 0
stop()
Where = 0
basic.forever(function () {
    if (Where == -1) {
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.showArrow(ArrowNames.North)
    } else if (Where == 1) {
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.showArrow(ArrowNames.South)
    } else if (Where == 2) {
        pins.servoWritePin(AnalogPin.P3, 180)
        basic.showIcon(IconNames.Heart)
    } else {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
