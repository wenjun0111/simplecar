def stop():
    pass

def on_button_pressed_a():
    global Where
    Where = -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Where
    Where = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def go():
    pass
Where = 0
stop()
Where = 0

def on_forever():
    if Where == -1:
        pins.servo_write_pin(AnalogPin.P0, 0)
        pins.servo_write_pin(AnalogPin.P2, 0)
        basic.show_arrow(ArrowNames.NORTH)
    elif Where == 1:
        pins.servo_write_pin(AnalogPin.P0, 180)
        pins.servo_write_pin(AnalogPin.P0, 180)
        basic.show_arrow(ArrowNames.SOUTH)
    else:
        pins.servo_write_pin(AnalogPin.P0, 90)
        pins.servo_write_pin(AnalogPin.P2, 90)
        basic.show_leds("""
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            """)
basic.forever(on_forever)
