input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(2)
})
basic.showString("ISAIAS")
basic.forever(function () {
    basic.showIcon(IconNames.Pitchfork)
    basic.pause(5000)
    basic.showIcon(IconNames.Sword)
    basic.pause(5000)
})
