function pocetak () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    x = 0
    y = 0
    tocka = ""
    radio.setGroup(10)
}
input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += 1
    led.plot(x, y)
})
input.onButtonPressed(Button.AB, function () {
    tocka = "" + tocka + x + y
    basic.showIcon(IconNames.Heart)
    radio.sendString(tocka)
})
input.onGesture(Gesture.Shake, function () {
    pocetak()
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
})
let tocka = ""
let y = 0
let x = 0
pocetak()
